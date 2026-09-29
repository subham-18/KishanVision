import React, { useState, useRef } from 'react';
import { UploadCloud, Mic, MicOff, Sparkles, Check, Camera, AlertCircle } from 'lucide-react';
import { CROP_OPTIONS, SUPPORTED_LANGUAGES } from '../data/demoData';
import { FarmContextState } from '../types';
import { TranslationStrings } from '../locales/translations';
import { VoiceManager } from '../utils/voiceManager';

interface CropAnalysisSectionProps {
  t: TranslationStrings;
  formState: FarmContextState;
  setFormState: React.Dispatch<React.SetStateAction<FarmContextState>>;
  onAnalyze: () => void;
  isLoading: boolean;
  loadingStep: string;
}

export const CropAnalysisSection: React.FC<CropAnalysisSectionProps> = ({
  t,
  formState,
  setFormState,
  onAnalyze,
  isLoading,
  loadingStep,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const quickVoicePrompts: Record<string, string[]> = {
    Odia: [
      'ମୋ ଧାନ ପତ୍ର ହଳଦିଆ ପଡୁଛି, ଏହି ସପ୍ତାହରେ କଣ କରିବି?',
      'ପାଣି ଦେବା ପରେ ମଧ୍ୟ ପତ୍ର ଲକ୍ଷଣ କାହିଁକି ଅଳ୍ପ ହେଉଛି?',
    ],
    Hindi: [
      'मेरी धान की पत्तियां पीली क्यों पड़ रही हैं?',
      'सिंचाई के बाद भी पत्तियां पीली क्यों दिख रही हैं?',
    ],
    Telugu: [
      'నా వరి ఆకులు ఎందుకు పసుపు రంగులోకి మారుతున్నాయి?',
      'నీరు పెట్టిన తర్వాత కూడా ఆకులు పచ్చగా ఎందుకు కనబడడం లేదు?',
    ],
    Marathi: [
      'माझ्या भाताची पाने पिवळी का पडत आहेत?',
      'पाणी दिल्यानंतरही पाने पिवळी का दिसत आहेत?',
    ],
    Tamil: [
      'என் நெல் இலைகள் ஏன் மஞ்சள் நிறமாகின்றன?',
      'தண்ணீர் பாய்ச்சிய பிறகும் இலைகள் ஏன் மஞ்சள் நிறத்தில் உள்ளன?',
    ],
    Bengali: [
      'আমার ধানের পাতা কেন হলুদ হয়ে যাচ্ছে?',
      'সেচের পরেও কেন পাতা হলুদ দেখাচ্ছে?',
    ],
    English: [
      'Why are my leaves turning yellow?',
      'What should I do this week to support the crop?',
    ],
  };

  const currentPrompts = quickVoicePrompts[formState.language] || quickVoicePrompts.English;

  const toggleVoiceInput = () => {
    if (isListening) {
      VoiceManager.stopListening();
      setIsListening(false);
      setVoiceNotice(null);
      return;
    }

    setVoiceNotice(null);
    const started = VoiceManager.startListening(formState.language, {
      onStart: () => setIsListening(true),
      onResult: (transcript: string) => {
        setFormState((prev) => ({
          ...prev,
          question: prev.question ? `${prev.question} ${transcript}` : transcript,
        }));
        setIsListening(false);
      },
      onError: (err: string) => {
        console.warn('Microphone status:', err);
        setIsListening(false);
        setVoiceNotice(
          formState.language === 'Odia'
            ? 'ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ମିଳିଲା ନାହିଁ। ଦୟାକରି ତଳେ ଥିବା ପ୍ରଶ୍ନ ବାଛନ୍ତୁ କିମ୍ବା ଟାଇପ୍ କରନ୍ତୁ।'
            : formState.language === 'Hindi'
            ? 'माइक्रोफ़ोन अनुमति नहीं मिली। कृपया नीचे दिए गए प्रश्नों में से चुनें या टाइप करें।'
            : 'Microphone permission is not available. Please type or select a question.'
        );
      },
      onEnd: () => setIsListening(false),
    });

    if (!started) {
      setVoiceNotice('Microphone is not available in this browser. Please type a question.');
    }
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setFormState((prev) => ({
        ...prev,
        imagePreview: e.target?.result as string,
        selectedScenarioId: undefined,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
          {t.form.step1}
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">{t.form.title}</h2>
        <p className="mt-1 text-sm text-zinc-600">{t.form.subtitle}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_1.35fr]">
        <div className="space-y-3">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center transition ${
              isDragging
                ? 'border-zinc-900 bg-zinc-100'
                : formState.imagePreview
                ? 'border-zinc-900 bg-zinc-50'
                : 'border-zinc-300 bg-zinc-50 hover:border-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              accept="image/*"
              className="hidden"
            />

            {formState.imagePreview ? (
              <div className="w-full space-y-3">
                <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-2">
                  <img src={formState.imagePreview} alt="Uploaded crop preview" className="max-h-52 w-full rounded-lg object-contain" />
                </div>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-2.5 py-1.5 font-semibold text-white">
                    <Check className="h-3.5 w-3.5" />
                    {t.form.readyBadge}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="text-xs font-semibold text-zinc-700 underline"
                  >
                    {t.form.changePhoto}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <UploadCloud className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-base font-semibold text-zinc-900">{t.form.uploadText}</div>
                  <div className="mt-1 text-xs text-zinc-500">{t.form.uploadSubtext}</div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white"
                >
                  <Camera className="h-3.5 w-3.5" />
                  Choose photo
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{t.form.cropLabel}</label>
              <select
                value={formState.crop}
                onChange={(e) => setFormState((p) => ({ ...p, crop: e.target.value }))}
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-0"
              >
                {CROP_OPTIONS.map((crop) => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{t.form.selectLanguageLabel}</label>
              <select
                value={formState.language}
                onChange={(e) => setFormState((p) => ({ ...p, language: e.target.value }))}
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-0"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.native}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{t.form.stateLabel}</label>
              <input
                type="text"
                value={formState.state}
                onChange={(e) => setFormState((p) => ({ ...p, state: e.target.value }))}
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{t.form.districtLabel}</label>
              <input
                type="text"
                value={formState.district}
                onChange={(e) => setFormState((p) => ({ ...p, district: e.target.value }))}
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{t.form.questionLabel}</label>
              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold ${
                  isListening ? 'bg-red-100 text-red-700' : 'bg-zinc-100 text-zinc-700'
                }`}
              >
                {isListening ? <MicOff className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                {isListening ? 'Listening' : 'Listen'}
              </button>
            </div>

            <div className="relative">
              <textarea
                rows={4}
                value={formState.question}
                onChange={(e) => setFormState((p) => ({ ...p, question: e.target.value }))}
                placeholder={t.form.questionPlaceholder}
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 outline-none"
              />
            </div>

            {voiceNotice && (
              <div className="mt-2 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{voiceNotice}</span>
              </div>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {currentPrompts.map((prompt, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setFormState((p) => ({ ...p, question: prompt }))}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 transition hover:bg-zinc-100"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onAnalyze}
            disabled={isLoading || !formState.imagePreview}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              isLoading
                ? 'cursor-wait bg-zinc-800 text-white'
                : !formState.imagePreview
                ? 'cursor-not-allowed bg-zinc-200 text-zinc-500'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>{loadingStep || t.form.analyzing}</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>{t.form.analyzeBtn}</span>
              </>
            )}
          </button>

          {!formState.imagePreview && (
            <p className="text-center text-[11px] text-zinc-500">{t.form.noPhotoAlert}</p>
          )}
        </div>
      </div>
    </section>
  );
};
