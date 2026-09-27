import React, { useState } from 'react';
import { 
  Droplets, 
  Thermometer, 
  Activity, 
  Layers, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { INDIAN_DISTRICTS_DATA } from '../data/demoData';
import { CropAnalysisResult } from '../types';
import { TranslationStrings } from '../locales/translations';

interface FarmOverviewProps {
  t: TranslationStrings;
  currentCrop: string;
  district: string;
  state: string;
  lastAssessment: CropAnalysisResult | null;
  onNavigateToAnalyze: () => void;
}

export const FarmOverview: React.FC<FarmOverviewProps> = ({
  t,
  currentCrop,
  district,
  state,
  lastAssessment,
  onNavigateToAnalyze,
}) => {
  const [selectedPlot, setSelectedPlot] = useState('Puri-North');

  const locData = INDIAN_DISTRICTS_DATA[district] || INDIAN_DISTRICTS_DATA.Puri;

  const mockPlots = [
    { id: 'Puri-North', name: 'Plot 1 (Coastal Zone)', crop: `${currentCrop} (Swarna)`, status: 'Yellowing Stress', risk: 'Moderate', ndvi: '0.62' },
    { id: 'Puri-South', name: 'Plot 2 (Riverine Zone)', crop: 'Dhaincha (Green Manure)', status: 'Vegetative', risk: 'Low', ndvi: '0.81' },
    { id: 'Puri-Bramhagiri', name: 'Plot 3 (Inland Zone)', crop: `${currentCrop} (MTU 1010)`, status: 'Tillering', risk: 'Low', ndvi: '0.74' },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E0E8E0] pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#143021]">
            {t.overview.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#4F6D59]">
            {t.overview.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#DCFCE7] border border-[#86EFAC] text-[#14532D] rounded-xl text-xs font-bold self-start sm:self-auto shadow-2xs">
          <Activity className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
          <span>{t.prototypeNotice}</span>
        </div>
      </div>

      {/* Environmental Context Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-white border border-[#D5E2D5] space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#52796F]">
            <span className="font-semibold">{t.overview.tempGauge}</span>
            <Thermometer className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-extrabold text-[#143021]">
            {locData.tempCelsius}°C
          </div>
          <div className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
            Optimal Range
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#D5E2D5] space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#52796F]">
            <span className="font-semibold">{t.overview.humidityGauge}</span>
            <Droplets className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-extrabold text-[#143021]">
            {locData.humidityPct}%
          </div>
          <div className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium">
            Threshold &gt;80%
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#D5E2D5] space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#52796F]">
            <span className="font-semibold">{t.overview.soilGauge}</span>
            <Layers className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-base font-extrabold text-[#143021] truncate" title={locData.soilType}>
            {locData.soilType}
          </div>
          <div className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
            Alluvial Clay Loam
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#D5E2D5] space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#52796F]">
            <span className="font-semibold">{t.overview.ndviGauge}</span>
            <Activity className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-[#143021]">
            0.64 NDVI
          </div>
          <div className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">
            Optimum range: 0.6–0.8
          </div>
        </div>
      </div>

      {/* Main Grid: Current Assessment Recap + Field Plots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Active Assessment Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D5E2D5] p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E8EFE8] pb-3">
            <div>
              <h3 className="text-base font-bold text-[#143021]">
                {t.overview.activeAssessmentTitle} ({currentCrop})
              </h3>
              <p className="text-xs text-[#52796F]">
                {district}, {state}
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md">
              {lastAssessment ? lastAssessment.risk_level : 'Moderate'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#F7FAF7] border border-[#E0ECE0]">
              <div className="text-xs font-bold text-[#143021]">{t.overview.activeConcern}:</div>
              <p className="text-xs text-[#334155] mt-1 leading-relaxed">
                {lastAssessment?.primary_concern ||
                  'Bacterial leaf blight chlorosis triggered by stagnant moisture and high coastal humidity.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#143021]">Actions:</span>
              <ul className="text-xs text-[#334155] space-y-1.5">
                {(lastAssessment?.immediate_actions || [
                  { step: 1, action: 'Drain standing water from paddy field for 48 hours.' },
                  { step: 2, action: 'Halt synthetic urea top-dressing to prevent leaf softness.' },
                  { step: 3, action: 'Apply fresh cow dung slurry filtrate or Pseudomonas bio-culture.' },
                ]).map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <span>{act.action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E8EFE8] flex items-center justify-between">
            <span className="text-xs text-gray-500">1800-180-1551 (Kisan Helpline)</span>
            <button
              onClick={onNavigateToAnalyze}
              className="text-xs font-bold text-[#2D6A4F] hover:underline p-1 min-h-[36px] flex items-center"
            >
              Analyze Crop →
            </button>
          </div>
        </div>

        {/* Multi-Plot Field Management */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D5E2D5] p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E8EFE8] pb-3">
            <h3 className="text-base font-bold text-[#143021]">
              {t.overview.plotsTitle} ({district})
            </h3>
            <span className="text-xs text-gray-400">3 Plots</span>
          </div>

          <div className="space-y-2.5">
            {mockPlots.map((plot) => (
              <div
                key={plot.id}
                onClick={() => setSelectedPlot(plot.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedPlot === plot.id
                    ? 'border-[#2D6A4F] bg-[#F3FAF3]'
                    : 'border-[#E2ECE2] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#143021]">
                  <span>{plot.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    plot.risk === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {plot.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#52796F] mt-1">
                  <span>{plot.crop}</span>
                  <span className="font-semibold text-gray-700">{plot.ndvi} NDVI</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#F8FAF8] rounded-xl border border-[#E2ECE2] text-[11px] text-[#52796F] leading-normal">
            💡 {t.overview.rotationNote}
          </div>
        </div>
      </div>
    </div>
  );
};
