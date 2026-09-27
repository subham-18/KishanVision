import React from 'react';
import { 
  Camera, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Bot,
  CheckCircle2
} from 'lucide-react';
import { TranslationStrings } from '../locales/translations';

interface ArchitectureSectionProps {
  t: TranslationStrings;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ t }) => {
  const steps = [
    {
      num: '01',
      title: t.architecture.step1Title,
      desc: t.architecture.step1Desc,
      icon: Camera,
      tag: 'Input',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      num: '02',
      title: t.architecture.step2Title,
      desc: t.architecture.step2Desc,
      icon: Sparkles,
      tag: 'Vision AI',
      color: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      num: '03',
      title: t.architecture.step3Title,
      desc: t.architecture.step3Desc,
      icon: Layers,
      tag: 'Context',
      color: 'bg-purple-50 text-purple-800 border-purple-200',
    },
    {
      num: '04',
      title: t.architecture.step4Title,
      desc: t.architecture.step4Desc,
      icon: Bot,
      tag: 'Regen Advisory',
      color: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      num: '05',
      title: t.architecture.step5Title,
      desc: t.architecture.step5Desc,
      icon: CheckCircle2,
      tag: 'Action',
      color: 'bg-green-50 text-green-800 border-green-200',
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold">
          <Cpu className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>{t.architecture.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143021]">
          {t.architecture.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#4F6D59]">
          {t.architecture.subtitle}
        </p>
      </div>

      {/* Visual Pipeline Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="relative bg-white rounded-xl border border-[#D5E2D5] p-4.5 space-y-2.5 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#2D6A4F]">{s.num}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border font-semibold ${s.color}`}>
                    {s.tag}
                  </span>
                </div>

                <div className="w-9 h-9 rounded-lg bg-[#F0F5F0] flex items-center justify-center text-[#1B4332]">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[#143021]">
                  {s.title}
                </h3>

                <p className="text-xs text-[#52796F] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#CBD5E1] items-center justify-center text-[#2D6A4F]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Safety & Agronomic Guardrails Banner */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#183B28] to-[#122A1D] text-white space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#86EFAC] shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-[#F0FDF4]">
            {t.architecture.guardrailsTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-white/10 space-y-1">
            <div className="font-bold text-[#86EFAC] text-sm">{t.architecture.g1Title}</div>
            <p className="text-gray-300 leading-relaxed pt-1">
              {t.architecture.g1Desc}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 space-y-1">
            <div className="font-bold text-[#86EFAC] text-sm">{t.architecture.g2Title}</div>
            <p className="text-gray-300 leading-relaxed pt-1">
              {t.architecture.g2Desc}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 space-y-1">
            <div className="font-bold text-[#86EFAC] text-sm">{t.architecture.g3Title}</div>
            <p className="text-gray-300 leading-relaxed pt-1">
              {t.architecture.g3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
