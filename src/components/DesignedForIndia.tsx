import React from 'react';
import { Languages, MapPin, Wheat, Network, CheckCircle, HeartHandshake } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/demoData';
import { TranslationStrings } from '../locales/translations';

interface DesignedForIndiaProps {
  t: TranslationStrings;
}

export const DesignedForIndia: React.FC<DesignedForIndiaProps> = ({ t }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold">
          <HeartHandshake className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>{t.india.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143021]">
          {t.india.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#4F6D59]">
          {t.india.subtitle}
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1: Multilingual */}
        <div className="rounded-xl p-5 bg-white border border-[#D5E2D5] space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
            <Languages className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-[#143021]">
            {t.india.p1Title}
          </h3>
          <p className="text-xs text-[#52796F] leading-relaxed">
            {t.india.p1Desc}
          </p>
          <div className="flex flex-wrap gap-1 pt-1 text-[10px] text-[#2D6A4F] font-semibold">
            {SUPPORTED_LANGUAGES.map((l) => (
              <span key={l.code} className="bg-[#EBF3EB] px-1.5 py-0.5 rounded">
                {l.native}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 2: Micro-climatic Adaptation */}
        <div className="rounded-xl p-5 bg-white border border-[#D5E2D5] space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-[#143021]">
            {t.india.p2Title}
          </h3>
          <p className="text-xs text-[#52796F] leading-relaxed">
            {t.india.p2Desc}
          </p>
        </div>

        {/* Pillar 3: Multi-Crop Agronomy */}
        <div className="rounded-xl p-5 bg-white border border-[#D5E2D5] space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
            <Wheat className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-[#143021]">
            {t.india.p3Title}
          </h3>
          <p className="text-xs text-[#52796F] leading-relaxed">
            {t.india.p3Desc}
          </p>
        </div>

        {/* Pillar 4: AgriStack DPI Ready */}
        <div className="rounded-xl p-5 bg-white border border-[#D5E2D5] space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center">
            <Network className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-[#143021]">
            {t.india.p4Title}
          </h3>
          <p className="text-xs text-[#52796F] leading-relaxed">
            {t.india.p4Desc}
          </p>
        </div>
      </div>

      {/* Honest Scope Clarification */}
      <div className="rounded-xl p-4 sm:p-5 bg-[#F8FAF8] border border-[#D5E2D5] flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#4F6D59]">
          <span className="font-bold text-[#143021]">{t.india.transparencyTitle}:</span>
          <p className="leading-relaxed">
            {t.india.transparencyText}
          </p>
        </div>
      </div>
    </div>
  );
};
