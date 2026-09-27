import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, MicOff, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { ChatMessage, CropAnalysisResult } from '../types';
import { TranslationStrings } from '../locales/translations';
import { VoiceManager } from '../utils/voiceManager';

interface CopilotChatProps {
  t: TranslationStrings;
  crop: string;
  district: string;
  state: string;
  language: string;
  assessmentResult: CropAnalysisResult | null;
  initialQuestion?: string;
}

export const CopilotChat: React.FC<CopilotChatProps> = ({
  t,
  crop,
  district,
  state,
  language,
  assessmentResult,
  initialQuestion,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      content: t.copilot.welcomeMsg + ` (${crop} · ${district}, ${state})`,
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState(initialQuestion || '');
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message if language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: t.copilot.welcomeMsg + ` (${crop} · ${district}, ${state})`,
            timestamp: 'Just now',
          },
        ];
      }
      return prev;
    });
  }, [language, t.copilot.welcomeMsg, crop, district, state]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    return () => {
      VoiceManager.stopSpeaking();
      VoiceManager.stopListening();
    };
  }, []);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isSending) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map((m) => ({ role: m.role, content: m.content })),
          context: {
            crop,
            district,
            state,
            language,
            primary_concern: assessmentResult?.primary_concern,
          },
        }),
      });

      const data = await response.json();
      const replyContent = data.reply || 'Check soil moisture and consult your local KVK.';

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Regarding your ${crop} in ${district}: Ensure root water drainage before applying any nutrient. If yellowing persists for another 48 hours without fungal spots, apply fermented cow urine or bio-culture Pseudomonas. Consult KVK ${district} if lesions expand.`,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsSending(false);
    }
  };

  const handleToggleVoiceInput = () => {
    if (isListening) {
      VoiceManager.stopListening();
      setIsListening(false);
      return;
    }

    const started = VoiceManager.startListening(language, {
      onStart: () => setIsListening(true),
      onResult: (transcript: string) => {
        setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      },
      onError: () => setIsListening(false),
      onEnd: () => setIsListening(false),
    });

    if (!started) {
      setIsListening(false);
    }
  };

  const handleReadAloud = (id: string, text: string) => {
    if (activeSpeechId === id) {
      VoiceManager.stopSpeaking();
      setActiveSpeechId(null);
      return;
    }

    VoiceManager.stopSpeaking();
    setActiveSpeechId(id);
    VoiceManager.speak(
      text,
      language,
      () => setActiveSpeechId(null),
      () => setActiveSpeechId(null)
    );
  };

  // Localized follow up prompts
  const localizedFollowUps: Record<string, string[]> = {
    Odia: [
      'ଜମିରେ ପାଣି ଦେବା ପରେ ବି ଧାନ ପତ୍ର ହଳଦିଆ ରହିଛି, ମୁଁ କଣ କରିବି?',
      'ଜୀବାମୃତ ଘରେ କିପରି ତିଆରି କରିବି?',
      'ନିମ୍ବ ତେଲ ସହିତ ସୁଡୋମୋନାସ୍ ମିଶାଇ ସିଞ୍ଚନ କରିହେବ କି?',
      'କୀଟନାଶକ ପକାଇବା ପୂର୍ବରୁ କଣ ଯାଞ୍ଚ କରିବା ଦରକାର?',
    ],
    Hindi: [
      'सिंचाई के बाद भी फसल पीली दिख रही है, मुझे क्या जांचना चाहिए?',
      'घर पर जीवामृत बनाने की सही विधि क्या है?',
      'क्या नीम के तेल के साथ स्यूडोमोनास मिलाया जा सकता है?',
      'रासायनिक छिड़काव से पहले क्या सावधानियां बरतें?',
    ],
    Telugu: [
      'నీరు పెట్టిన తర్వాత కూడా ఆకులు పసుపుగా ఉన్నాయి, నేను ఏమి చేయాలి?',
      'జీవామృతం ఇంట్లోనే ఎలా తయారు చేసుకోవాలి?',
      'వేప నూనెతో సూడోమోనాస్ కలిపి పిచికారీ చేయవచ్చా?',
      'రసాయన మందులు వాడే ముందు ఏమి గమనించాలి?',
    ],
    Marathi: [
      'पाणी दिल्यानंतरही पाने पिवळी आहेत, मी काय तपासू?',
      'घरी जीवामृत तयार करण्याची सोपी पद्धत कोणती?',
      'निंबोळी अर्कासोबत स्यूडोमोनास फवारता येईल का?',
      'रासायनिक फवारणीपूर्वी कोणती खबरदारी घ्यावी?',
    ],
    Tamil: [
      'தண்ணீர் பாய்ச்சிய பிறகும் இலை மஞ்சளாக உள்ளது, நான் என்ன செய்ய வேண்டும்?',
      'வீட்டிலேயே ஜீவாமிர்தம் தயாரிப்பது எப்படி?',
      'வேப்ப எண்ணெயுடன் சூடோமோனாஸ் கலந்து தெளிக்கலாமா?',
      'மருந்து தெளிக்கும் முன் கவனிக்க வேண்டியவை என்ன?',
    ],
    Bengali: [
      'জল সেচের পরেও ধানের পাতা হলুদ হয়ে আছে, আমি কী করব?',
      'বাড়িতে কীভাবে জীবামৃত তৈরি করব?',
      'নিম তেলের সাথে সিউডোমোনাস মেশানো যাবে কি?',
      'কীটনাশক দেওয়ার আগে কী পরীক্ষা করা উচিত?',
    ],
    English: [
      'My crop is still yellow after irrigation. What should I check?',
      'How do I prepare Jeevamrit or bio-inputs at home?',
      'Can I spray Panchagavya alongside neem oil?',
      'What should I check before applying any chemical spray?',
    ],
  };

  const sampleFollowUps = localizedFollowUps[language] || localizedFollowUps.English;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Copilot Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E0E8E0] pb-3">
        <div>
          <h2 className="text-xl font-bold text-[#143021] flex items-center gap-2">
            <Bot className="w-5 h-5 text-[#2D6A4F]" />
            <span>{t.copilot.title}</span>
          </h2>
          <p className="text-xs text-[#52796F]">
            {t.copilot.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#F4FAF4] px-3 py-1.5 rounded-lg border border-[#CDE3CD] text-[#2D6A4F] self-start sm:self-auto font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{crop} · {district} ({language})</span>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-[#FAFBF9] border border-[#D5E2D5] rounded-2xl p-4 sm:p-5 h-[400px] sm:h-[440px] overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 sm:gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-lg bg-[#1B4332] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs">
                KV
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3 sm:p-4 text-xs sm:text-sm leading-relaxed space-y-1.5 shadow-2xs ${
                msg.role === 'user'
                  ? 'bg-[#1B4332] text-white rounded-tr-none'
                  : 'bg-white border border-[#E2ECE2] text-[#1E293B] rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-line">{msg.content}</div>

              <div className="flex items-center justify-between gap-3 text-[10px] opacity-70 pt-1 border-t border-black/5">
                <span>{msg.timestamp}</span>

                {msg.role === 'assistant' && (
                  <button
                    onClick={() => handleReadAloud(msg.id, msg.content)}
                    className="hover:opacity-100 flex items-center gap-1 text-[11px] font-bold p-1"
                    title="Voice read-aloud"
                  >
                    {activeSpeechId === msg.id ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-red-600" />
                        <span className="text-red-600">{t.copilot.muteBtn}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                        <span className="text-[#2D6A4F]">{t.copilot.listenBtn}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-[#E2EBE2] text-[#143021] flex items-center justify-center shrink-0 text-xs font-bold">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isSending && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B4332] text-white flex items-center justify-center text-xs font-bold">
              KV
            </div>
            <div className="bg-white border border-[#E2ECE2] p-3 rounded-2xl rounded-tl-none flex items-center gap-2 text-xs text-[#52796F]">
              <div className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-bounce [animation-delay:0.4s]"></div>
              <span className="text-[11px] font-medium">{t.copilot.thinking}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-bold text-[#52796F] uppercase tracking-wider">
          {t.copilot.suggestionsTitle}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {sampleFollowUps.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={isSending}
              className="text-xs bg-white hover:bg-[#F3FAF3] border border-[#CBD5E1] hover:border-[#2D6A4F] text-[#334155] hover:text-[#1B4332] px-3 py-1.5 rounded-lg text-left transition-all font-medium disabled:opacity-50 min-h-[36px]"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar with Voice Mic */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.copilot.inputPlaceholder}
            className="w-full p-3 pr-12 text-xs sm:text-sm bg-white border border-[#CBD5E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-[#143021] min-h-[46px]"
          />

          <button
            type="button"
            onClick={handleToggleVoiceInput}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-[#2D6A4F] hover:bg-[#F0F5F0]'
            }`}
            title="Speech to text"
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>

        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim() || isSending}
          className="px-4 py-3 bg-[#1B4332] hover:bg-[#14261B] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all disabled:opacity-50 shadow-xs min-h-[46px]"
        >
          <span>{t.copilot.sendBtn}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
