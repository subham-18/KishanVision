/**
 * Robust Voice & Speech Synthesis Manager for Indian Languages
 */

export interface SpeechRecognitionHandlers {
  onStart?: () => void;
  onResult: (text: string) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

const LANG_CODE_MAP: Record<string, string> = {
  Odia: 'or-IN',
  Hindi: 'hi-IN',
  Telugu: 'te-IN',
  Marathi: 'mr-IN',
  Tamil: 'ta-IN',
  Bengali: 'bn-IN',
  English: 'en-IN',
};

// Global reference to keep active utterance from being garbage collected
let activeUtterance: SpeechSynthesisUtterance | null = null;
let activeRecognition: any = null;
let cachedVoices: SpeechSynthesisVoice[] = [];
let currentlySpeakingLang: string | null = null;

// Eagerly preload and cache voices
function updateVoicesCache() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        cachedVoices = v;
      }
    } catch {}
  }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  updateVoicesCache();
  try {
    window.speechSynthesis.onvoiceschanged = () => {
      updateVoicesCache();
    };
  } catch {}
}

export const VoiceManager = {
  isSpeechRecognitionAvailable(): boolean {
    return typeof window !== 'undefined' && Boolean(
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    );
  },

  isSpeechSynthesisAvailable(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  },

  isSpeaking(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking;
  },

  getSpeakingLanguage(): string | null {
    return currentlySpeakingLang;
  },

  startListening(language: string, handlers: SpeechRecognitionHandlers): boolean {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      handlers.onError?.('Speech recognition is not supported in this browser.');
      return false;
    }

    try {
      if (activeRecognition) {
        try { activeRecognition.stop(); } catch {}
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = LANG_CODE_MAP[language] || 'en-IN';

      recognition.onstart = () => {
        handlers.onStart?.();
      };

      recognition.onresult = (event: any) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const transcript = event.results[0][0].transcript;
          handlers.onResult(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event.error);
        handlers.onError?.(event.error || 'Voice input error');
      };

      recognition.onend = () => {
        activeRecognition = null;
        handlers.onEnd?.();
      };

      activeRecognition = recognition;
      recognition.start();
      return true;
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      handlers.onError?.(err?.message || 'Could not start microphone');
      return false;
    }
  },

  stopListening() {
    if (activeRecognition) {
      try {
        activeRecognition.stop();
      } catch {}
      activeRecognition = null;
    }
  },

  speak(text: string, language: string, onEnd?: () => void, onError?: () => void) {
    if (!this.isSpeechSynthesisAvailable() || !text || !text.trim()) {
      onError?.();
      return;
    }

    try {
      window.speechSynthesis.cancel();

      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      updateVoicesCache();

      const utterance = new SpeechSynthesisUtterance(text.trim());
      const targetLang = LANG_CODE_MAP[language] || (language === 'English' ? 'en-IN' : 'hi-IN');
      utterance.lang = targetLang;
      utterance.rate = 0.88; // Natural, comfortable advisory pace for Indian farmers
      utterance.pitch = 1.0;

      const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const langPrefix = targetLang.split('-')[0].toLowerCase();
        
        // 1. Exact match (e.g. 'hi-IN', 'ta-IN', 'te-IN', 'bn-IN', 'mr-IN', 'or-IN')
        let matchingVoice = voices.find((v) => v.lang.toLowerCase() === targetLang.toLowerCase());

        // 2. Prefix match (e.g. any 'hi', 'te', 'ta', 'bn', 'mr', 'or')
        if (!matchingVoice) {
          matchingVoice = voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));
        }

        // 3. Name-based match for Indic languages
        if (!matchingVoice) {
          const langLower = language.toLowerCase();
          matchingVoice = voices.find((v) => v.name.toLowerCase().includes(langLower));
        }

        // 4. Target is English: Prefer Indian English (en-IN)
        if (!matchingVoice && language === 'English') {
          matchingVoice = voices.find((v) => v.lang.toLowerCase().includes('in') && v.lang.toLowerCase().startsWith('en')) 
            || voices.find((v) => v.lang.toLowerCase().startsWith('en')) 
            || voices[0];
        }

        // 5. Target is Indic regional language (Odia, Telugu, Marathi, etc.):
        // NEVER assign an English voice! If exact regional voice is missing (e.g. Odia on desktop Chrome),
        // use an Indic voice engine (like Hindi 'hi-IN' or Bengali 'bn-IN' which share the Eastern Indic phonetic engine).
        if (!matchingVoice && language !== 'English') {
          matchingVoice = voices.find((v) => v.lang.toLowerCase().startsWith('hi') || v.lang.toLowerCase().startsWith('bn') || v.lang.toLowerCase().startsWith('te') || v.lang.toLowerCase().startsWith('ta'));
        }

        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
      }

      currentlySpeakingLang = language;

      utterance.onend = () => {
        activeUtterance = null;
        currentlySpeakingLang = null;
        onEnd?.();
      };

      utterance.onerror = (e) => {
        console.warn('TTS playback error:', e);
        activeUtterance = null;
        currentlySpeakingLang = null;
        onError?.();
      };

      activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech synthesis error:', err);
      currentlySpeakingLang = null;
      onError?.();
    }
  },

  stopSpeaking() {
    if (this.isSpeechSynthesisAvailable()) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    activeUtterance = null;
    currentlySpeakingLang = null;
  },
};
