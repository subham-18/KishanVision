import React from 'react';
import { Camera, CloudSun, Sprout, ArrowRight, Zap, CheckCircle2, MapPin } from 'lucide-react';
import { DEMO_SCENARIOS, DemoScenario } from '../data/demoData';
import { TranslationStrings } from '../locales/translations';

interface LandingHeroProps {
  t: TranslationStrings;
  onAnalyzeClick: () => void;
  onSelectScenario: (scenario: DemoScenario) => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  t,
  onAnalyzeClick,
  onSelectScenario,
}) => {
  const primaryScenario = DEMO_SCENARIOS.find((s) => s.isPrimary) || DEMO_SCENARIOS[0];

  return (
    <div className="space-y-8 sm:space-y-10 pb-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#F2F7F2] via-[#EBF3EB] to-[#F8FAF8] border border-[#D5E2D5] p-5 sm:p-8 lg:p-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Track Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] text-xs font-semibold">
            <Sprout className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
            <span className="truncate">{t.hero.trackBadge}</span>
          </div>

          {/* Hero Headlines */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#143021]">
              {t.hero.headline}
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-[#2D6A4F]">
              {t.hero.subheadline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#3E5C49] max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onAnalyzeClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1B4332] hover:bg-[#14261B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group min-h-[48px]"
            >
              <Camera className="w-4 h-4 text-[#A7F3D0]" />
              <span>{t.hero.analyzeBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#A7F3D0] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onSelectScenario(primaryScenario)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#F3FAF3] border-2 border-[#2D6A4F] text-[#1B4332] font-bold text-sm shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Zap className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
              <span>{t.hero.demoBtn}</span>
            </button>
          </div>

          {/* Key Trust Points */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#52796F] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              {t.hero.tagline1}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              {t.hero.tagline2}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              {t.hero.tagline3}
            </span>
          </div>
        </div>
      </section>

      {/* 3 Core Capabilities: See / Understand / Act */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Capability 1: SEE */}
        <div className="rounded-xl p-5 sm:p-6 bg-white border border-[#D9E4D9] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] text-xl">
            📷
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#143021]">{t.capabilities.seeTitle}</h3>
            <h4 className="text-xs font-semibold text-[#2D6A4F]">{t.capabilities.seeSub}</h4>
            <p className="text-xs text-[#4F6D59] leading-relaxed pt-1">
              {t.capabilities.seeDesc}
            </p>
          </div>
        </div>

        {/* Capability 2: UNDERSTAND */}
        <div className="rounded-xl p-5 sm:p-6 bg-white border border-[#D9E4D9] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] text-xl">
            🌦️
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#143021]">{t.capabilities.understandTitle}</h3>
            <h4 className="text-xs font-semibold text-[#0369A1]">{t.capabilities.understandSub}</h4>
            <p className="text-xs text-[#4F6D59] leading-relaxed pt-1">
              {t.capabilities.understandDesc}
            </p>
          </div>
        </div>

        {/* Capability 3: ACT */}
        <div className="rounded-xl p-5 sm:p-6 bg-white border border-[#D9E4D9] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] text-xl">
            🌱
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#143021]">{t.capabilities.actTitle}</h3>
            <h4 className="text-xs font-semibold text-[#B45309]">{t.capabilities.actSub}</h4>
            <p className="text-xs text-[#4F6D59] leading-relaxed pt-1">
              {t.capabilities.actDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Primary Demonstration Showcase Bar */}
      <section className="bg-white rounded-xl border border-[#D5E2D5] p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold">
              <Zap className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
              <span>{t.primaryDemoBox.badge}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#143021]">
              {t.primaryDemoBox.title}
            </h3>
            <p className="text-xs text-[#4F6D59] leading-relaxed">
              {t.primaryDemoBox.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#2D6A4F]">
              <span className="bg-[#EBF3EB] px-2.5 py-1 rounded font-medium">{t.primaryDemoBox.cropTag}</span>
              <span className="bg-[#EBF3EB] px-2.5 py-1 rounded font-medium">{t.primaryDemoBox.locTag}</span>
              <span className="bg-[#EBF3EB] px-2.5 py-1 rounded font-medium">{t.primaryDemoBox.langTag}</span>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <button
              onClick={() => onSelectScenario(primaryScenario)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>{t.primaryDemoBox.btn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Alternative Regional Agricultural Scenarios */}
        <div className="mt-5 pt-4 border-t border-[#E8EFE8] space-y-2.5">
          <div className="text-xs font-black text-[#2D6A4F] uppercase tracking-wider flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Regional Crop Field Cases (Click to Test Instantly)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {DEMO_SCENARIOS.map((sc) => (
              <div
                key={sc.id}
                onClick={() => onSelectScenario(sc)}
                className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all hover:border-[#2D6A4F] min-h-[64px] ${
                  sc.isPrimary
                    ? 'border-[#2D6A4F] bg-[#F4FAF4] shadow-2xs'
                    : 'border-[#E2ECE2] bg-white hover:bg-[#FAFCFA]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#143021]">
                  <span className="flex items-center gap-1">
                    <span>{sc.crop === 'Rice' ? '🌾' : sc.crop === 'Cotton' ? '🌿' : '🍅'}</span>
                    <span>{sc.crop}</span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#166534] bg-[#DCFCE7] px-1.5 py-0.2 rounded">{sc.language}</span>
                </div>
                <div className="text-xs text-[#2D6A4F] font-medium mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                  <span>{sc.district}, {sc.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
