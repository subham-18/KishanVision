import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  Mic, 
  MicOff, 
  Sparkles, 
  Check, 
  CloudSun, 
  Droplets, 
  Layers, 
  Thermometer, 
  Info, 
  AlertCircle,
  Sprout,
  Leaf,
  Camera
} from 'lucide-react';
import { CROP_OPTIONS, SUPPORTED_LANGUAGES, INDIAN_DISTRICTS_DATA, DEMO_SCENARIOS } from '../data/demoData';
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

  // Native quick prompt templates for fallback voice or quick click
  const quickVoicePrompts: Record<string, string[]> = {
    Odia: [
      'ମୋ ଧାନ ପତ୍ର ହଳଦିଆ ପଡୁଛି, ଏହି ସପ୍ତାହରେ ମୁଁ କଣ କରିବି?',
      'ଜମିରେ ପାଣି ଦେବା ପରେ ବି ପତ୍ର ସୁଖିଲା ରହିଛି କାହିଁକି?',
      'ଜୀବାମୃତ କିପରି ପ୍ରସ୍ତୁତ କରି ଫସଲରେ ସିଞ୍ଚନ କରିବି?',
    ],
    Hindi: [
      'मेरी धान की पत्तियां पीली क्यों पड़ रही हैं और मुझे इस सप्ताह क्या करना चाहिए?',
      'सिंचाई के बाद भी फसल पीली क्यों दिख रही है?',
      'घर पर जीवामृत और जैविक कीटनाशक कैसे बनाएं?',
    ],
    Telugu: [
      'నా వరి ఆకులు పసుపు రంగులోకి మారుతున్నాయి, ఈ వారం నేను ఏమి చేయాలి?',
      'నీరు పెట్టిన తర్వాత కూడా ఆకులు ఎందుకు పచ్చగా మారడం లేదు?',
      'జీవామృతం ఇంట్లోనే ఎలా తయారు చేసుకోవాలి?',
    ],
    Marathi: [
      'माझ्या भाताची पाने पिवळी का पडत आहेत आणि या आठवड्यात काय करावे?',
      'पाणी दिल्यानंतरही पाने पिवळी का दिसत आहेत?',
      'घरी जीवामृत व सेंद्रिय अर्क कसा तयार करावा?',
    ],
    Tamil: [
      'என் நெல் இலைகள் ஏன் மஞ்சள் நிறமாகின்றன, இந்த வாரம் நான் என்ன செய்ய வேண்டும்?',
      'தண்ணீர் பாய்ச்சிய பிறகும் இலைகள் ஏன் வாடுகின்றன?',
      'வீட்டிலேயே ஜீவாமிர்தம் தயாரிப்பது எப்படி?',
    ],
    Bengali: [
      'আমার ধানের পাতা কেন হলুদ হয়ে যাচ্ছে এবং এই সপ্তাহে আমার কী করা উচিত?',
      'জল সেচের পরেও ধানের পাতা শুকনো দেখাচ্ছে কেন?',
      'বাড়িতে কীভাবে জীবামৃত তৈরি করব?',
    ],
    English: [
      'Why are my rice leaves turning yellow and what should I do this week?',
      'Why does the crop remain yellow even after irrigation?',
      'How do I prepare Jeevamrit organic bio-fertilizer at home?',
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
      onStart: () => {
        setIsListening(true);
      },
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
        // Show polite fallback message and insert sample prompt if mic is blocked
        setVoiceNotice(
          formState.language === 'Odia'
            ? 'ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ମିଳିଲା ନାହିଁ। ଦୟାକରି ତଳେ ଥିବା ପ୍ରଶ୍ନ ଚୟନ କରନ୍ତୁ କିମ୍ବା ଟାଇପ୍ କରନ୍ତୁ।'
            : formState.language === 'Hindi'
            ? 'माइक्रोफ़ोन अनुमति नहीं मिली। कृपया नीचे दिए गए प्रश्नों में से चुनें या टाइप करें।'
            : 'Microphone permission not granted or unsupported. Please select a quick question below or type.'
        );
      },
      onEnd: () => {
        setIsListening(false);
      },
    });

    if (!started) {
      setVoiceNotice('Microphone not available in this browser. Please use quick prompts or type.');
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const districtContext = INDIAN_DISTRICTS_DATA[formState.district] || {
    district: formState.district || 'Puri',
    state: formState.state || 'Odisha',
    soilType: 'Coastal Alluvial / Clay Loam',
    climateZone: 'East Coast Plain & Hills',
    tempCelsius: 29,
    humidityPct: 84,
    rainfallStatus: 'Pre-monsoon coastal moisture',
    recommendedCoverCrop: 'Dhaincha (Sesbania)',
    localKvk: 'Krishi Vigyan Kendra (KVK)',
    helpline: '1800-180-1551',
  };

  return (
    <section id="analyze-section" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E0E8E0] pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#143021]">
            {t.form.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#4F6D59]">
            {t.form.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#DCFCE7] border border-[#86EFAC] text-[#14532D] rounded-xl text-xs font-bold self-start sm:self-auto shadow-2xs">
          <Sprout className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
          <span>{t.prototypeNotice}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Image Upload Area (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-3">
          <label className="block text-xs font-bold text-[#143021] uppercase tracking-wider">
            {t.form.step1}
          </label>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative rounded-2xl border-2 border-dashed p-4 sm:p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[250px] sm:min-h-[280px] ${
              isDragging
                ? 'border-[#2D6A4F] bg-[#EBF5EB]'
                : formState.imagePreview
                ? 'border-[#2D6A4F] bg-[#F4FAF4] shadow-sm'
                : 'border-[#CBD5E1] bg-white hover:border-[#2D6A4F] hover:bg-[#F9FCF9]'
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
              <div className="relative w-full flex flex-col items-center space-y-3">
                <div className="w-full max-h-56 sm:max-h-60 rounded-xl overflow-hidden border-2 border-[#A7D0A7] bg-white shadow-2xs flex items-center justify-center p-2">
                  <img
                    src={formState.imagePreview}
                    alt="Uploaded crop preview"
                    className="max-h-52 sm:max-h-56 w-auto object-contain rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-1 text-xs">
                  <span className="text-[#166534] font-bold flex items-center gap-1.5 bg-[#DCFCE7] px-2.5 py-1 rounded-lg">
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    {t.form.readyBadge}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="text-[#166534] hover:text-[#143021] font-bold underline p-1 min-h-[36px] flex items-center"
                  >
                    {t.form.changePhoto}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 py-3 sm:py-5 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EAF2EA] flex items-center justify-center text-[#2D6A4F] shadow-2xs">
                  <UploadCloud className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#143021]">
                    {t.form.uploadText}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">
                    {t.form.uploadSubtext}
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1B4332] hover:bg-[#14261B] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-[#A7F3D0]" />
                  <span>Choose or Snap Photo</span>
                </button>
                <div className="inline-block px-2.5 py-0.5 bg-[#F1F5F9] rounded text-[10px] text-[#475569] font-medium">
                  JPG, PNG, WebP
                </div>
              </div>
            )}
          </div>

          {/* 3 Quick Sample Presets */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs text-[#52796F]">
              <span className="font-semibold">{t.form.samplePhotoPrompt}</span>
              <span className="text-[11px] text-[#2D6A4F] font-bold">1-Tap Preset</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {DEMO_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    setFormState({
                      crop: sc.crop,
                      state: sc.state,
                      district: sc.district,
                      language: sc.language,
                      question: sc.question,
                      imagePreview: sc.imageDataUri,
                      selectedScenarioId: sc.id,
                    });
                  }}
                  className={`p-2 rounded-xl border-2 text-left transition-all flex flex-col items-center sm:items-start gap-0.5 min-h-[50px] ${
                    formState.selectedScenarioId === sc.id
                      ? 'border-[#1B4332] bg-[#E8F5E8] shadow-2xs ring-2 ring-[#2D6A4F]/20'
                      : 'border-[#D5E2D5] bg-white hover:bg-[#F4FAF4]'
                  }`}
                >
                  <div className="text-[11px] font-bold text-[#143021] flex items-center gap-1 truncate w-full">
                    <span>{sc.crop === 'Rice' ? '🌾' : sc.crop === 'Cotton' ? '🌿' : '🍅'}</span>
                    <span className="truncate">{sc.crop}</span>
                  </div>
                  <span className="text-[10px] text-[#52796F] truncate w-full">{sc.district}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Agronomic Context & Question Form (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          <label className="block text-xs font-bold text-[#143021] uppercase tracking-wider">
            {t.form.step2}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Crop Select */}
            <div>
              <label className="block text-[11px] font-bold text-[#3E5C49] mb-1">
                {t.form.cropLabel}
              </label>
              <select
                value={formState.crop}
                onChange={(e) => setFormState((p) => ({ ...p, crop: e.target.value }))}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-xl text-[#143021] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] min-h-[44px]"
              >
                {CROP_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-[11px] font-bold text-[#3E5C49] mb-1">
                {t.form.stateLabel}
              </label>
              <input
                type="text"
                value={formState.state}
                onChange={(e) => setFormState((p) => ({ ...p, state: e.target.value }))}
                placeholder="e.g. Odisha"
                className="w-full px-3 py-2.5 text-xs font-medium bg-white border border-[#CBD5E1] rounded-xl text-[#143021] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] min-h-[44px]"
              />
            </div>

            {/* District */}
            <div>
              <label className="block text-[11px] font-bold text-[#3E5C49] mb-1">
                {t.form.districtLabel}
              </label>
              <input
                type="text"
                value={formState.district}
                onChange={(e) => setFormState((p) => ({ ...p, district: e.target.value }))}
                placeholder="e.g. Puri"
                className="w-full px-3 py-2.5 text-xs font-medium bg-white border border-[#CBD5E1] rounded-xl text-[#143021] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] min-h-[44px]"
              />
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block text-[11px] font-bold text-[#3E5C49] mb-1">
              {t.form.selectLanguageLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setFormState((p) => ({ ...p, language: lang.code }))}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-left border transition-all min-h-[44px] flex flex-col justify-center ${
                    formState.language === lang.code
                      ? 'border-[#2D6A4F] bg-[#EBF5EB] text-[#1B4332] shadow-2xs font-bold'
                      : 'border-[#CBD5E1] bg-white text-[#475569] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <div className="text-[10px] text-gray-500 font-normal leading-none">{lang.code}</div>
                  <div className="truncate text-xs mt-0.5">{lang.native}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Textarea with Voice Support */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold text-[#3E5C49]">
                {t.form.questionLabel}
              </label>
              <span className="text-[10px] text-[#64748B]">{t.form.questionSubtext}</span>
            </div>

            <div className="relative">
              <textarea
                value={formState.question}
                onChange={(e) => setFormState((p) => ({ ...p, question: e.target.value }))}
                rows={3}
                placeholder={t.form.questionPlaceholder}
                className="w-full p-3 pr-14 text-xs text-[#143021] bg-white border border-[#CBD5E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] resize-none"
              />

              {/* Working Mic Button */}
              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`absolute right-2.5 bottom-2.5 p-2.5 rounded-xl transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse shadow-md ring-4 ring-red-200'
                    : 'bg-[#F0F5F0] hover:bg-[#D5E2D5] text-[#2D6A4F]'
                }`}
                title={t.form.micTooltip}
                aria-label={t.form.micTooltip}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5 text-white" />
                ) : (
                  <Mic className="w-5 h-5 text-[#2D6A4F]" />
                )}
              </button>
            </div>

            {/* Listening Feedback / Mic wave animation */}
            {isListening && (
              <div className="mt-1.5 p-2 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700 animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="font-bold">{t.form.micListening}</span>
                <span className="text-[11px] text-red-600">({formState.language})</span>
              </div>
            )}

            {/* Notice if permission error */}
            {voiceNotice && (
              <div className="mt-1.5 p-2.5 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>{voiceNotice}</div>
              </div>
            )}

            {/* Quick Prompt Chips (Click to fill) */}
            <div className="mt-2 space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#6B8F77]">
                Quick Voice / Text Suggestions:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormState((p) => ({ ...p, question: prompt }))}
                    className="text-[11px] text-left px-2.5 py-1 rounded-md bg-[#F4FAF4] hover:bg-[#E6F3E6] border border-[#CDE3CD] text-[#1E3A2F] transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Environmental Context preview (Simulated/Prototype data card) */}
          <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#D5E2D5] space-y-2">
            <div className="flex items-center justify-between text-xs flex-wrap gap-1">
              <span className="font-bold text-[#143021] flex items-center gap-1.5">
                <CloudSun className="w-3.5 h-3.5 text-[#2D6A4F]" />
                {t.form.contextTitle} ({districtContext.district}, {districtContext.state})
              </span>
              <span className="text-[10px] uppercase font-bold text-[#166534] bg-[#DCFCE7] border border-[#86EFAC] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                District Agro-Profile
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2 bg-white rounded-lg border border-[#E2ECE2]">
                <div className="text-gray-400">{t.form.temp}</div>
                <div className="font-bold text-[#143021] flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-orange-500" />
                  {districtContext.tempCelsius}°C
                </div>
              </div>

              <div className="p-2 bg-white rounded-lg border border-[#E2ECE2]">
                <div className="text-gray-400">{t.form.humidity}</div>
                <div className="font-bold text-[#143021] flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-blue-500" />
                  {districtContext.humidityPct}%
                </div>
              </div>

              <div className="p-2 bg-white rounded-lg border border-[#E2ECE2]">
                <div className="text-gray-400">{t.form.soil}</div>
                <div className="font-bold text-[#143021] truncate flex items-center gap-1">
                  <Layers className="w-3 h-3 text-amber-700" />
                  {districtContext.soilType.split('/')[0]}
                </div>
              </div>

              <div className="p-2 bg-white rounded-lg border border-[#E2ECE2]">
                <div className="text-gray-400">{t.form.kvk}</div>
                <div className="font-bold text-[#143021] truncate" title={districtContext.localKvk}>
                  {districtContext.localKvk.split(',')[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onAnalyze}
              disabled={isLoading || !formState.imagePreview}
              className={`w-full py-4 px-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all min-h-[48px] ${
                isLoading
                  ? 'bg-[#1B4332]/70 text-white cursor-wait'
                  : !formState.imagePreview
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-[#1B4332] hover:bg-[#14261B] text-white active:scale-[0.99]'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{loadingStep || t.form.analyzing}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#A7F3D0]" />
                  <span>{t.form.analyzeBtn}</span>
                </>
              )}
            </button>

            {!formState.imagePreview && (
              <p className="text-[11px] text-center text-amber-700 mt-2 font-medium">
                {t.form.noPhotoAlert}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
