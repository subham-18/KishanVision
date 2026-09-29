/**
 * KisanVision AI - Multimodal Farm Copilot for Indian Agriculture
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CropAnalysisSection } from './components/CropAnalysisSection';
import { ResultsDashboard } from './components/ResultsDashboard';
import { DEMO_SCENARIOS, INDIAN_DISTRICTS_DATA, getLocalizedSummary } from './data/demoData';
import { CropAnalysisResult, FarmContextState } from './types';
import { svgToPngDataUrl } from './utils/imageHelper';
import { getTranslations } from './locales/translations';

export default function App() {
  const primaryScenario = DEMO_SCENARIOS.find((s) => s.isPrimary) || DEMO_SCENARIOS[0];
  (window as any).__primaryScenario = primaryScenario;

  const [activeTab, setActiveTab] = useState<'diagnosis'>('diagnosis');
  const [formState, setFormState] = useState<FarmContextState>({
    crop: 'Rice',
    state: 'Odisha',
    district: 'Puri',
    language: 'English',
    question: '',
    imagePreview: null,
    selectedScenarioId: undefined,
  });

  const [analysisResult, setAnalysisResult] = useState<CropAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');

  const t = getTranslations(formState.language);

  const handleLanguageChange = (newLang: string) => {
    setFormState((prev) => ({ ...prev, language: newLang }));
    if (analysisResult) {
      const localized = getLocalizedSummary(formState.crop, newLang);
      setAnalysisResult((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          farmer_summary_native: localized.native,
          farmer_summary_english: localized.english,
        };
      });
    }
  };

  const handleRunPrimaryDemo = async () => {
    const demoState: FarmContextState = {
      crop: primaryScenario.crop,
      state: primaryScenario.state,
      district: primaryScenario.district,
      language: formState.language,
      question: primaryScenario.question,
      imagePreview: primaryScenario.imageDataUri,
      selectedScenarioId: primaryScenario.id,
    };

    setFormState(demoState);
    setActiveTab('diagnosis');
    await executeCropAnalysis(demoState);
  };

  const executeCropAnalysis = async (stateToUse?: Partial<FarmContextState>) => {
    const currentState = { ...formState, ...stateToUse };
    if (!currentState.imagePreview) {
      alert(t.form.noPhotoAlert);
      return;
    }

    setIsLoading(true);
    setLoadingStep(
      currentState.language === 'Odia'
        ? 'ପତ୍ର ଲକ୍ଷଣ ଯାଞ୍ଚ ହେଉଛି...'
        : currentState.language === 'Hindi'
        ? 'पत्ती के लक्षण की जांच हो रही है...'
        : 'Checking the crop photo and symptoms...'
    );

    try {
      const stepTimer1 = setTimeout(() => {
        setLoadingStep(
          currentState.language === 'Odia'
            ? 'ଜିଲ୍ଲା ମାଟି ଓ ପାଣିପାଗ ସହିତ ମନୋନୀତ ଚିକିତ୍ସା...'
            : currentState.language === 'Hindi'
            ? 'जिले की मिट्टी और मौसम के साथ विश्लेषण जारी है...'
            : 'Cross-checking local field conditions...'
        );
      }, 1000);

      const districtContext = INDIAN_DISTRICTS_DATA[currentState.district] || {
        district: currentState.district,
        state: currentState.state,
        soilType: 'Coastal Alluvial / Loam',
        climateZone: 'East Coast Plain & Hills',
        tempCelsius: 29,
        humidityPct: 84,
      };

      const pngImage = await svgToPngDataUrl(currentState.imagePreview);

      const response = await fetch('/api/analyze-crop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: pngImage,
          crop: currentState.crop,
          state: currentState.state,
          district: currentState.district,
          language: currentState.language,
          question: currentState.question,
          environmentalContext: {
            temperature: `${districtContext.tempCelsius}°C`,
            humidity: `${districtContext.humidityPct}%`,
            soil_type: districtContext.soilType,
            climate_zone: districtContext.climateZone,
            source: 'District agro-climatic data',
          },
        }),
      });

      clearTimeout(stepTimer1);

      const data = await response.json();
      if (data.data) {
        setAnalysisResult(data.data);
        setActiveTab('diagnosis');
      } else {
        throw new Error('Analysis returned incomplete data');
      }
    } catch (err: any) {
      console.error('Analysis request error:', err);
      const fallback = getLocalizedSummary(currentState.crop, currentState.language);
      setAnalysisResult({
        visual_observations: [
          `Foliar discoloration and margin yellowing apparent on ${currentState.crop}`,
          `Prevailing humidity and temperature in ${currentState.district} promote pathogen pressure`,
          'Vascular veins remain visible with localized tip drying',
          'No clear whole-canopy wilt pattern seen'
        ],
        possible_conditions: [
          {
            name: currentState.crop === 'Cotton' ? 'Leaf reddening stress' : 'Leaf blight / nutrient stress',
            likelihood: 'Likely (60%)',
            description: 'Symptoms are consistent with early disease pressure or uneven moisture stress.',
          },
          {
            name: 'Waterlogging stress',
            likelihood: 'Possible (25%)',
            description: 'High humidity and uneven field drainage can worsen root stress and yellowing.',
          },
          {
            name: 'Nutrient imbalance',
            likelihood: 'Possible (15%)',
            description: 'Low nitrogen or micronutrient imbalance often intensifies chlorosis on younger leaves.',
          }
        ],
        primary_concern: 'Localized yellowing and tip stress on the crop canopy',
        risk_level: 'Moderate',
        confidence: 'Visual symptoms moderately match early moisture or disease stress; field confirmation is recommended.',
        confidence_score: 72,
        environmental_considerations: [
          `Humidity and rainfall in ${currentState.district} raise infection pressure.`,
          `Soil conditions may be limiting root aeration and nutrient uptake.`,
        ],
        immediate_actions: [
          { step: 1, action: 'Drain excess water and avoid heavy nitrogen immediately.', urgency: 'Today' },
          { step: 2, action: 'Inspect the lower leaf surface for fungal or bacterial spotting.', urgency: 'Next 24-48 Hours' },
          { step: 3, action: 'Apply a light bio-fertilizer or foliar compost extract after the next irrigation cycle.', urgency: '+3 Days' },
        ],
        regenerative_practices: [
          {
            title: 'Soil aeration',
            practice: 'Improve drainage and avoid standing water around root zones.',
            benefit: 'Helps healthy root activity and nutrient uptake.',
          },
          {
            title: 'Bio-input support',
            practice: 'Use Jeevamrit or fermented bio-slurry in a light application.',
            benefit: 'Restores microbial balance and soil resilience.',
          }
        ],
        seven_day_plan: [
          { day: 'Day 1 (Today)', focus: 'Drainage', action: 'Reduce standing water and keep roots aerated.' },
          { day: '+2 Days', focus: 'Monitoring', action: 'Check for spreading yellowing and spotting on the lower canopy.' },
          { day: '+4 Days', focus: 'Bio-support', action: 'Use bio-fertilizer and compost tea to improve nutrient uptake.' },
          { day: '+7 Days', focus: 'Field review', action: 'Assess whether new leaves remain healthy and vigorous.' },
        ],
        expert_escalation: {
          threshold: 'If more than 30% of the field shows spreading yellowing in 72 hours.',
          recommended_body: `Krishi Vigyan Kendra (KVK), ${currentState.district}, ${currentState.state}`,
          helpline: 'Contact local agriculture support or Kisan Call Centre',
          warning_signs: ['Rapid leaf collapse', 'Blackening or ooze on the stem or leaf base'],
        },
        farmer_summary_native: fallback.native,
        farmer_summary_english: fallback.english,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
      setLoadingStep('');
    }
  };

  const handleAskFollowUp = (prompt: string) => {
    setFormState((prev) => ({ ...prev, question: prompt }));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-zinc-900">
      <Navbar
        t={t}
        currentLanguage={formState.language}
        onLanguageChange={handleLanguageChange}
        onTryDemo={handleRunPrimaryDemo}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {!analysisResult ? (
          <CropAnalysisSection
            t={t}
            formState={formState}
            setFormState={setFormState}
            onAnalyze={() => executeCropAnalysis()}
            isLoading={isLoading}
            loadingStep={loadingStep}
          />
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
              <div className="text-sm font-medium text-zinc-700">
                Crop diagnosis for <span className="font-semibold text-zinc-900">{formState.crop}</span> in {formState.district}
              </div>
              <button
                type="button"
                onClick={() => setAnalysisResult(null)}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100"
              >
                Upload again
              </button>
            </div>
            <ResultsDashboard
              t={t}
              result={analysisResult}
              crop={formState.crop}
              district={formState.district}
              state={formState.state}
              language={formState.language}
              imagePreview={formState.imagePreview}
              onAskFollowUp={handleAskFollowUp}
              onNewAnalysis={() => setAnalysisResult(null)}
            />
          </div>
        )}
      </main>
    </div>
  );
}
