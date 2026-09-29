import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Volume2, 
  VolumeX, 
  AlertTriangle, 
  Calendar, 
  PhoneCall, 
  Leaf, 
  RefreshCw,
  Info,
  CheckCircle2,
  Sparkles,
  Thermometer,
  Droplets,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CropAnalysisResult } from '../types';
import { TranslationStrings } from '../locales/translations';
import { VoiceManager } from '../utils/voiceManager';
import { getDualLanguageActionPlan } from '../data/demoData';

interface ResultsDashboardProps {
  t: TranslationStrings;
  result: CropAnalysisResult;
  crop: string;
  district: string;
  state: string;
  language: string;
  imagePreview: string | null;
  onAskFollowUp: (prompt: string) => void;
  onNewAnalysis: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  t,
  result,
  crop,
  district,
  state,
  language,
  imagePreview,
  onAskFollowUp,
  onNewAnalysis,
}) => {
  const [activeAudioMode, setActiveAudioMode] = useState<'native' | 'english' | null>(null);

  // Stop audio on component unmount
  useEffect(() => {
    return () => {
      VoiceManager.stopSpeaking();
    };
  }, []);

  // When language changes, stop audio
  useEffect(() => {
    VoiceManager.stopSpeaking();
    setActiveAudioMode(null);
  }, [language]);

  const handleToggleNativeAudio = () => {
    if (activeAudioMode === 'native') {
      VoiceManager.stopSpeaking();
      setActiveAudioMode(null);
      return;
    }

    const textToRead = result.farmer_summary_native || result.farmer_summary_english;
    if (!textToRead) return;

    VoiceManager.stopSpeaking();
    setActiveAudioMode('native');
    VoiceManager.speak(
      textToRead,
      language,
      () => setActiveAudioMode(null),
      () => setActiveAudioMode(null)
    );
  };

  const handleToggleEnglishAudio = () => {
    if (activeAudioMode === 'english') {
      VoiceManager.stopSpeaking();
      setActiveAudioMode(null);
      return;
    }

    const textToRead = result.farmer_summary_english;
    if (!textToRead) return;

    VoiceManager.stopSpeaking();
    setActiveAudioMode('english');
    VoiceManager.speak(
      textToRead,
      'English',
      () => setActiveAudioMode(null),
      () => setActiveAudioMode(null)
    );
  };

  const getRiskTheme = (risk: string) => {
    const r = (risk || '').toLowerCase();
    if (r.includes('high') || r.includes('उच्च') || r.includes('ଅଧିକ')) {
      return {
        cardBg: 'bg-[#FEF2F2]',
        border: 'border-red-400',
        text: 'text-red-900',
        badge: 'bg-red-600 text-white font-black',
        barColor: 'from-red-500 to-rose-600',
        dot: 'bg-red-500',
        bannerGradient: 'from-[#7F1D1D] via-[#991B1B] to-[#C2410C]',
        accentTag: 'text-red-200 bg-red-950/40 border-red-500/30',
        statusNotice: '⚠️ High Crop Stress Detected · Urgent Regenerative Care Required',
      };
    }
    if (r.includes('mod') || r.includes('मध्यम')) {
      return {
        cardBg: 'bg-[#FFFBEB]',
        border: 'border-amber-400',
        text: 'text-amber-900',
        badge: 'bg-amber-600 text-white font-black',
        barColor: 'from-amber-500 to-yellow-600',
        dot: 'bg-amber-500',
        bannerGradient: 'from-[#78350F] via-[#92400E] to-[#B45309]',
        accentTag: 'text-amber-200 bg-amber-950/40 border-amber-500/30',
        statusNotice: '⚡ Moderate Crop Stress · Follow Preventive Bio-Care Plan',
      };
    }
    return {
      cardBg: 'bg-[#F0FDF4]',
      border: 'border-emerald-400',
      text: 'text-emerald-900',
      badge: 'bg-emerald-600 text-white font-black',
      barColor: 'from-emerald-500 to-green-600',
      dot: 'bg-emerald-500',
      bannerGradient: 'from-[#143021] via-[#1B4332] to-[#2D6A4F]',
      accentTag: 'text-emerald-200 bg-emerald-950/40 border-emerald-500/30',
      statusNotice: '🌱 Manageable / Mild Stress · Standard Soil Health Practices',
    };
  };

  const riskTheme = getRiskTheme(result.risk_level);

  // Helper to extract numeric likelihood for progress bar
  const extractPercentage = (str: string): number => {
    const match = str.match(/(\d+)%/);
    if (match) return parseInt(match[1], 10);
    if (str.toLowerCase().includes('likely')) return 68;
    if (str.toLowerCase().includes('moderate')) return 35;
    return 20;
  };

  const dualPlan = getDualLanguageActionPlan(crop, language);
  const isRegional = language !== 'English';

  return (
    <section className="results-clean space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* 🌟 Dynamic Responsive Assessment Header Banner (Theme adapts to diagnosed risk) */}
      <div className="rounded-2xl p-4 sm:p-6 bg-white text-[#111111] shadow-sm space-y-3.5 border border-[#D9D9D9] transition-all duration-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-2.5 py-1 rounded-full bg-[#111111] text-white font-black uppercase tracking-wider text-[10px] shadow-2xs">
                Active Assessment
              </span>
              <span className="text-[#A0A0A0]">·</span>
              <span className="font-extrabold text-[#111111] text-sm">{crop}</span>
              <span className="text-[#A0A0A0]">·</span>
              <span className="text-[#555555] font-medium">{district}, {state}</span>
              <span className="text-[#A0A0A0]">·</span>
              <span className="text-[#111111] font-bold bg-[#F1F1F1] px-2 py-0.5 rounded">{language}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white drop-shadow-xs">
              {t.results.title} <span className="text-[#666666] font-medium">· {language}</span>
            </h1>
          </div>

          <button
            onClick={onNewAnalysis}
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-[#333333] border border-[#111111] text-xs font-bold text-white flex items-center gap-2 transition-all min-h-[44px] shadow-2xs active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.results.newScanBtn}</span>
          </button>
        </div>

        {/* Dynamic Risk Bar & Primary Concern Callout */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E2E2E2] flex items-start gap-2.5 text-xs flex-1">
            <Sparkles className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-[#111111]">{t.results.keyFocus}: </span>
              <span className="font-semibold text-[#333333]">{result.primary_concern}</span>
            </div>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2] text-xs font-bold text-[#333333] shrink-0 flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${riskTheme.dot} animate-ping shrink-0`}></span>
            <span>{riskTheme.statusNotice}</span>
          </div>
        </div>
      </div>

      {/* 🗣️ Localized Farmer Advice: Dual-Display (Regional Language FIRST, English Reference Below) */}
      <div className="space-y-4">
        {/* Block 1: Native Regional Language Card (Shown whenever language is not English, OR English if selected) */}
        <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#F4FAF4] via-[#ECFDF5] to-[#E6F3E6] border-2 border-[#10B981] space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#16A34A] animate-pulse"></span>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#14532D]">
                🌾 {t.results.voiceSummaryTitle} ({language})
              </h3>
            </div>

            {/* Native Audio Button */}
            <button
              onClick={handleToggleNativeAudio}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all min-h-[42px] shadow-sm active:scale-95 ${
                activeAudioMode === 'native'
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-[#15803D] hover:bg-[#14532D] text-white'
              }`}
              title={`Read aloud in ${language}`}
            >
              {activeAudioMode === 'native' ? (
                <>
                  <VolumeX className="w-4 h-4 text-white" />
                  <span>⏹ {t.results.stopAudioBtn}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#FDE047]" />
                  <span>{language === 'English' ? t.results.listenBtn : `${t.results.listenBtn} (${language})`}</span>
                </>
              )}
            </button>
          </div>

          {/* Native Text (Large, comfortable, bold typography for farmers) */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#86EFAC] text-[#14532D] text-base sm:text-lg leading-relaxed font-bold shadow-xs">
            {result.farmer_summary_native || result.farmer_summary_english}
          </div>
        </div>

        {/* Block 2: English Translation & Reference (Shown when regional language is selected) */}
        {false && isRegional && result.farmer_summary_english && (
          <div className="rounded-2xl p-4 sm:p-5 bg-[#F8FAFC] border-2 border-[#CBD5E1] space-y-3 shadow-2xs">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                  <span>🌐</span>
                  <span>English Translation & Scientific Reference</span>
                </span>
              </div>

            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#334155] text-xs sm:text-sm leading-relaxed font-medium">
              {result.farmer_summary_english}
            </div>
          </div>
        )}
      </div>

      {/* 🎨 DISTINCT HIGH-CONTRAST THEMED CARDS: A, B, C, D, E */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card A: Visual Observations (Vibrant Teal / Mint Theme) */}
        <div className="rounded-2xl p-5 bg-[#F0FDFA] border-2 border-[#2DD4BF] shadow-xs space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#0F766E] text-white flex items-center justify-center text-xs font-black shadow-2xs">
              A
            </span>
            <div>
              <span className="text-[10px] uppercase font-black text-[#0D9488] tracking-wider block">
                Visual Inspection
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-[#134E4A]">
                {t.results.cardATitle}
              </h4>
            </div>
          </div>

          <ul className="text-xs text-[#134E4A] space-y-2 pt-1">
            {result.visual_observations?.map((obs, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#99F6E4] shadow-2xs">
                <Leaf className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="font-semibold leading-relaxed">{obs}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card B: Possible Conditions & Likelihood (Warm Tangerine / Gold Theme) */}
        <div className="rounded-2xl p-5 bg-[#FFFBEB] border-2 border-[#F59E0B] shadow-xs space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#D97706] text-white flex items-center justify-center text-xs font-black shadow-2xs">
              B
            </span>
            <div>
              <span className="text-[10px] uppercase font-black text-[#B45309] tracking-wider block">
                Differential Diagnosis
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-[#78350F]">
                {t.results.cardBTitle}
              </h4>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            {result.possible_conditions?.map((cond, idx) => {
              const pct = extractPercentage(cond.likelihood);
              return (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#FDE68A] space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="font-extrabold text-[#78350F]">{cond.name}</span>
                    <span className="text-[11px] font-black text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A] shrink-0">
                      {cond.likelihood}
                    </span>
                  </div>

                  {/* High-contrast likelihood meter bar */}
                  <div className="w-full bg-[#FEF3C7] rounded-full h-2.5 overflow-hidden p-0.5">
                    <div 
                      className="bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#DC2626] h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-[#5A3810] leading-relaxed font-medium">
                    {cond.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card C & D: Risk Level & Confidence (Ruby Red & Royal Indigo Theme) */}
        <div className="rounded-2xl p-5 bg-white border-2 border-[#CBD5E1] shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Card C */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shadow-2xs">
                C
              </span>
              <div>
                <span className="text-[10px] uppercase font-black text-[#DC2626] tracking-wider block">
                  Stress Severity
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  {t.results.cardCTitle}
                </h4>
              </div>
            </div>

            <div className={`p-4 rounded-xl border-2 ${riskTheme.cardBg} ${riskTheme.border} flex items-center justify-between shadow-2xs`}>
              <span className="text-xs font-black text-gray-700">{t.results.riskCalculated}:</span>
              <span className={`text-xs font-black uppercase px-3.5 py-1.5 rounded-xl ${riskTheme.badge} shadow-xs flex items-center gap-1.5`}>
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>{result.risk_level}</span>
              </span>
            </div>
          </div>

          {/* Card D: Confidence */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#6366F1] text-white flex items-center justify-center text-xs font-black shadow-2xs">
                D
              </span>
              <div>
                <span className="text-[10px] uppercase font-black text-[#6366F1] tracking-wider block">
                  Caution Score
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  {t.results.cardDTitle}
                </h4>
              </div>
            </div>

            <p className="text-xs text-[#312E81] leading-relaxed font-semibold italic bg-[#EEF2FF] p-3 rounded-xl border border-[#C7D2FE]">
              "{result.confidence}"
            </p>
          </div>
        </div>

        {/* Card E: Environmental Context (Azure Sky Blue Theme - spans 3 cols on large screens) */}
        <div className="md:col-span-2 lg:col-span-3 rounded-2xl p-5 bg-[#F0F9FF] border-2 border-[#0284C7] shadow-xs space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-xs font-black shadow-2xs">
                E
              </span>
              <div>
                <span className="text-[10px] uppercase font-black text-[#0369A1] tracking-wider block">
                  Agro-Climatic Reality
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#075985]">
                  {t.results.cardETitle}
                </h4>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#0369A1] bg-white px-2.5 py-1 rounded-md border border-[#BAE6FD] shadow-2xs">
              District Microclimate Parameters
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {result.environmental_considerations?.map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#BAE6FD] text-xs text-[#0C4A6E] font-semibold leading-relaxed shadow-2xs">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🚀 Recommended Immediate Actions (Dual-Language: Regional First, English Below) */}
      <div className="rounded-2xl p-5 sm:p-6 bg-[#F0FDF4] border-2 border-[#10B981] shadow-sm space-y-4">
        <div className="border-b border-[#A7F3D0] pb-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#15803D] text-white text-[10px] font-black uppercase mb-1 shadow-2xs">
            Action Protocol
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#14532D]">
            {t.results.immediateActionsTitle}
          </h3>
          <p className="text-xs text-[#166534] font-medium">
            {t.results.immediateActionsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {dualPlan.immediateActions.map((act) => (
            <div
              key={act.step}
              className="p-4 rounded-xl bg-white border-2 border-[#BBF7D0] flex items-start gap-3 hover:border-[#10B981] transition-all shadow-2xs"
            >
              <div className="w-9 h-9 rounded-xl bg-[#14532D] text-[#FDE047] flex items-center justify-center text-sm font-black shrink-0 shadow-xs">
                {act.step}
              </div>
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-[#14532D]">Step {act.step}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    act.urgency.toLowerCase().includes('today')
                      ? 'bg-red-500 text-white'
                      : act.urgency.toLowerCase().includes('48')
                      ? 'bg-amber-500 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {act.urgency}
                  </span>
                </div>
                {/* Regional Language Action FIRST */}
                <p className="text-xs sm:text-sm text-[#14532D] leading-relaxed font-bold">
                  {act.nativeAction}
                </p>
                {/* English Action Reference BELOW */}
                {isRegional && (
                  <p className="text-[11px] text-[#475569] leading-relaxed font-medium pt-1 border-t border-dashed border-[#CBD5E1]">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] mr-1">EN:</span>
                    {act.englishAction}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌿 Regenerative Farming Practices (Dual-Language: Regional First, English Below) */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#FEFCE8] to-[#F7FEE7] border-2 border-[#84CC16] space-y-4 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#365314] text-white text-[10px] font-black uppercase shadow-2xs">
            <Leaf className="w-3 h-3 text-[#A3E635]" />
            <span>Regenerative Agriculture First</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#365314]">
            {t.results.regenTitle}
          </h3>
          <p className="text-xs text-[#4D7C0F] font-medium">
            {t.results.regenSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {dualPlan.regenerativePractices.map((reg, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border-2 border-[#D9F99D] space-y-2.5 shadow-2xs">
              {/* Regional Practice FIRST */}
              <h4 className="text-xs sm:text-sm font-extrabold text-[#365314] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#65A30D]"></span>
                {reg.titleNative}
              </h4>
              <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-semibold">
                {reg.practiceNative}
              </p>
              <div className="pt-2 border-t border-[#F0FDF4] text-xs text-[#166534] font-bold bg-[#F0FDF4] p-2.5 rounded-lg border border-[#BBF7D0]">
                <span className="font-black text-[#14532D]">{t.results.benefitLabel}: </span>
                {reg.benefitNative}
              </div>

              {/* English Practice Reference BELOW */}
              {isRegional && (
                <div className="pt-2 border-t border-dashed border-[#CBD5E1] space-y-1 text-[11px] text-[#475569]">
                  <p className="font-bold text-[#334155]">EN: {reg.titleEnglish}</p>
                  <p className="text-[11px] text-[#64748B] leading-tight">{reg.practiceEnglish}</p>
                  <p className="text-[10px] text-[#059669] italic">Benefit: {reg.benefitEnglish}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 📅 Next 7 Days Timeline (Dual-Language: Regional First, English Below) */}
      <div className="rounded-2xl p-5 sm:p-6 bg-white border-2 border-[#CBD5E1] shadow-sm space-y-4">
        <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2563EB]">
            <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>7-Day Field Schedule</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#1E293B]">
            {t.results.timelineTitle}
          </h3>
          <p className="text-xs text-[#64748B]">
            {t.results.timelineSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {dualPlan.sevenDayPlan.map((step, idx) => {
            const stepColors = [
              { border: 'border-emerald-300 bg-emerald-50/50', badge: 'bg-emerald-600 text-white' },
              { border: 'border-blue-300 bg-blue-50/50', badge: 'bg-blue-600 text-white' },
              { border: 'border-amber-300 bg-amber-50/50', badge: 'bg-amber-600 text-white' },
              { border: 'border-purple-300 bg-purple-50/50', badge: 'bg-purple-600 text-white' },
            ];
            const sc = stepColors[idx % stepColors.length];
            return (
              <div key={idx} className={`p-4 rounded-xl border-2 ${sc.border} space-y-2 shadow-2xs`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${sc.badge}`}>
                    {step.day}
                  </span>
                  <span className="text-[10px] uppercase font-black text-gray-400">Phase {idx + 1}</span>
                </div>
                {/* Regional focus and action FIRST */}
                <div className="text-xs font-black text-[#1E293B] pt-0.5">{step.focusNative}</div>
                <p className="text-xs text-[#334155] leading-relaxed font-semibold">{step.actionNative}</p>

                {/* English Reference BELOW */}
                {isRegional && (
                  <p className="text-[10px] text-[#64748B] leading-tight pt-1.5 border-t border-dashed border-gray-300">
                    <span className="uppercase font-bold text-[#94A3B8]">EN: </span>
                    {step.actionEnglish}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ⚠️ When to Seek Expert Help (Dual-Language: Regional First, English Below) */}
      <div className="rounded-2xl p-5 sm:p-6 bg-[#FFF1F2] border-2 border-[#FDA4AF] space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9F1239]">
          <AlertTriangle className="w-4 h-4 text-[#E11D48]" />
          <span>KVK / Expert Escalation Triggers</span>
        </div>

        <h3 className="text-base sm:text-lg font-black text-[#881337]">
          {t.results.expertTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2.5">
            <span className="text-xs font-black text-[#9F1239]">{t.results.thresholdLabel}:</span>
            <div className="bg-white/90 p-3 rounded-xl border border-[#FDA4AF] space-y-1">
              {/* Regional Threshold FIRST */}
              <p className="text-xs sm:text-sm text-[#881337] leading-relaxed font-bold">
                {dualPlan.expertEscalation.thresholdNative}
              </p>
              {/* English Threshold BELOW */}
              {isRegional && (
                <p className="text-[11px] text-[#64748B] font-medium pt-1 border-t border-dashed border-[#FDA4AF]">
                  <span className="text-[10px] uppercase font-bold text-[#9F1239] mr-1">EN:</span>
                  {dualPlan.expertEscalation.thresholdEnglish}
                </p>
              )}
            </div>

            <div className="pt-2">
              <span className="text-xs font-black text-[#9F1239]">{t.results.warningSignsLabel}:</span>
              <ul className="text-xs text-[#881337] space-y-1.5 mt-1 font-medium">
                {dualPlan.expertEscalation.warningSignsNative.map((w, idx) => (
                  <li key={idx} className="flex flex-col gap-0.5 bg-white/70 p-2.5 rounded-lg border border-[#FECDD3]">
                    <div className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-bold text-[#881337]">{w}</span>
                    </div>
                    {isRegional && dualPlan.expertEscalation.warningSignsEnglish[idx] && (
                      <span className="text-[11px] text-[#64748B] pl-4">
                        ({dualPlan.expertEscalation.warningSignsEnglish[idx]})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border-2 border-[#FDA4AF] space-y-3 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#143021]">{t.results.institutionLabel}:</span>
              <p className="text-xs text-[#334155] font-bold mt-1 leading-relaxed">
                {result.expert_escalation?.recommended_body || `Krishi Vigyan Kendra (KVK) ${district}`}
              </p>
            </div>

            <div className="pt-3 border-t border-[#FFE4E6] space-y-2">
              <span className="text-xs font-black text-[#143021]">{t.results.kisanCallCenter}:</span>
              <a 
                href="tel:18001801551" 
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-extrabold shadow-md transition-all active:scale-95 min-h-[46px]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 1800-180-1551 (Toll-Free Helpline)</span>
              </a>
              <p className="text-[10px] text-gray-500 text-center font-medium">
                {t.results.kisanHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Follow-up Action Bar */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-white via-[#F4FAF4] to-white border-2 border-[#D5E2D5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <h4 className="text-sm font-bold text-[#143021]">
            {t.results.askFollowUpBtn}
          </h4>
          <p className="text-xs text-[#52796F]">
            "{t.results.followUpPromptText}"
          </p>
        </div>

        <button
          onClick={() => onAskFollowUp(t.results.followUpPromptText)}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#14261B] text-white text-xs font-bold transition-all shadow-xs shrink-0 min-h-[44px] flex items-center justify-center gap-1.5"
        >
          <span>{t.results.askFollowUpBtn}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
