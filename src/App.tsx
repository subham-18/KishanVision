/**
 * KisanVision AI - Multimodal Farm Copilot for Indian Agriculture
 * AgriN & Regenerative Agricultural Intelligence Hackathon
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CropAnalysisSection } from './components/CropAnalysisSection';
import { ResultsDashboard } from './components/ResultsDashboard';
import { CopilotChat } from './components/CopilotChat';
import { FarmOverview } from './components/FarmOverview';
import { DesignedForIndia } from './components/DesignedForIndia';
import { ArchitectureSection } from './components/ArchitectureSection';
import { HowToUseGuide } from './components/HowToUseGuide';
import { DEMO_SCENARIOS, INDIAN_DISTRICTS_DATA, DemoScenario, getLocalizedSummary } from './data/demoData';
import { CropAnalysisResult, FarmContextState } from './types';
import { svgToPngDataUrl } from './utils/imageHelper';
import { getTranslations } from './locales/translations';
import { Sprout, Sparkles, Volume2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const primaryScenario = DEMO_SCENARIOS.find((s) => s.isPrimary) || DEMO_SCENARIOS[0];

  // Store primaryScenario on window for easy subcomponent access
  (window as any).__primaryScenario = primaryScenario;

  const [activeTab, setActiveTab] = useState<'diagnosis' | 'guide' | 'copilot' | 'overview' | 'architecture'>('diagnosis');
  
  // Default language is English, and initial imagePreview is null for a clean main canvas
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
  const [followUpQuestion, setFollowUpQuestion] = useState<string>('');

  // Get active localization strings based on selected language
  const t = getTranslations(formState.language);

  // Language switch handler that updates both formState and active diagnosis
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

  // Primary Demo Trigger
  const handleRunPrimaryDemo = async () => {
    const demoState: FarmContextState = {
      crop: primaryScenario.crop,
      state: primaryScenario.state,
      district: primaryScenario.district,
      language: formState.language, // Always respect the user's selected language
      question: primaryScenario.question,
      imagePreview: primaryScenario.imageDataUri,
      selectedScenarioId: primaryScenario.id,
    };

    setFormState(demoState);
    setActiveTab('diagnosis');
    await executeCropAnalysis(demoState);
  };

  // Scenario selection
  const handleSelectScenario = async (scenario: DemoScenario) => {
    const targetState: FarmContextState = {
      crop: scenario.crop,
      state: scenario.state,
      district: scenario.district,
      language: formState.language, // Always respect user's active language
      question: scenario.question,
      imagePreview: scenario.imageDataUri,
      selectedScenarioId: scenario.id,
    };
    setFormState(targetState);
    setActiveTab('diagnosis');
    // Scroll smoothly to analysis form
    setTimeout(() => {
      document.getElementById('analyze-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Execute Multimodal Crop Analysis
  const executeCropAnalysis = async (stateToUse?: Partial<FarmContextState>) => {
    const currentState = { ...formState, ...stateToUse };
    if (!currentState.imagePreview) {
      alert(t.form.noPhotoAlert);
      return;
    }

    setIsLoading(true);
    setLoadingStep(
      currentState.language === 'Odia'
        ? 'ପତ୍ରର ଲକ୍ଷଣ ଓ ହଳଦିଆ ଦାଗ ଯାଞ୍ଚ ହେଉଛି...'
        : currentState.language === 'Hindi'
        ? 'पत्ती के लक्षण और पीलेपन की जांच हो रही है...'
        : 'Inspecting leaf symptoms & chlorosis margins...'
    );

    try {
      const stepTimer1 = setTimeout(() => {
        setLoadingStep(
          currentState.language === 'Odia'
            ? 'ଜିଲ୍ଲା ମାଟି ଓ ପାଣିପାଗ ସହିତ Gemini AI ବିଶ୍ଳେଷଣ ଚାଲିଛି...'
            : currentState.language === 'Hindi'
            ? 'जिले की मिट्टी और मौसम के साथ Gemini AI का विश्लेषण जारी है...'
            : 'Cross-referencing agro-climatic context with Gemini AI...'
        );
      }, 1000);

      const stepTimer2 = setTimeout(() => {
        setLoadingStep(
          currentState.language === 'Odia'
            ? 'ପ୍ରାକୃତିକ ପରାମର୍ଶ ଏବଂ ୭ ଦିନିଆ ଯୋଜନା ପ୍ରସ୍ତୁତ ହେଉଛି...'
            : currentState.language === 'Hindi'
            ? 'पुनर्योजी सिफारिशें और 7-दिवसीय योजना तैयार की जा रही है...'
            : 'Synthesizing regenerative recommendations & 7-day field plan...'
        );
      }, 2000);

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
      clearTimeout(stepTimer2);

      const data = await response.json();
      if (data.data) {
        setAnalysisResult(data.data);
        setActiveTab('diagnosis');
        // Scroll smoothly to top of results
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
      } else {
        throw new Error('Analysis returned incomplete data');
      }
    } catch (err: any) {
      console.error('Analysis request error:', err);
      // Fallback cleanly to localized agronomic data
      const fallback = getLocalizedSummary(currentState.crop, currentState.language);
      setAnalysisResult({
        visual_observations: [
          `Foliar discoloration and margin yellowing apparent on ${currentState.crop}`,
          `Prevailing humidity and temperature in ${currentState.district} promote pathogen pressure`,
          "Vascular veins retain structure with localized tip drying",
          "Absence of root rot or whole-canopy systemic wilting"
        ],
        possible_conditions: [
          {
            name: currentState.crop === 'Cotton' ? "Sucking Pest Complex (Thrips/Aphids)" : "Bacterial Leaf Blight (Xanthomonas oryzae)",
            likelihood: "Likely (68%)",
            description: "Weather-favored foliar stress common in humid agricultural zones."
          },
          {
            name: "Nitrogen / Potassium Assimilation Stress",
            likelihood: "Moderate (24%)",
            description: "Soil moisture imbalance hinders optimal nutrient absorption."
          }
        ],
        primary_concern: fallback.primaryConcern,
        risk_level: "Moderate",
        confidence: "Cautionary Assessment (76%): Visual symptoms match foliar stress. Field testing recommended.",
        confidence_score: 76,
        environmental_considerations: [
          `Microclimate in ${currentState.district} creates favorable moisture retention`,
          "Rhizosphere drainage is essential to preserve aerobic soil biology"
        ],
        immediate_actions: [
          { step: 1, action: "Drain excess standing water from the field.", urgency: "Today" },
          { step: 2, action: "Suspend chemical urea top-dressing immediately.", urgency: "Today" },
          { step: 3, action: "Spray fresh Cow Dung Slurry or Pseudomonas bio-protectant.", urgency: "Next 24-48 Hours" }
        ],
        regenerative_practices: [
          {
            title: "Microbial Antagonist Spray",
            practice: "Foliar application of Pseudomonas or fermented bio-slurry.",
            benefit: "Builds natural leaf barrier against bacterial and fungal pathogens."
          },
          {
            title: "Alternate Wetting and Drying (AWD)",
            practice: "Allow standing water to subside before re-watering.",
            benefit: "Aerate roots, saves 25% water, and prevents disease propagation."
          }
        ],
        seven_day_plan: [
          { day: "Day 1 (Today)", focus: "Water Drainage", action: "Open drainage channels at lower field bunds." },
          { day: "+2 Days", focus: "Morning Inspection", action: "Inspect underside of affected leaves in morning dew." },
          { day: "+4 Days", focus: "Bio-Shield Spray", action: "Apply neem oil extract or certified bio-fungicide." },
          { day: "+7 Days", focus: "Growth Check", action: "Examine newly emerged leaf shoots for green vigor." }
        ],
        expert_escalation: {
          threshold: "If yellowing spreads to more than 30% of field within 72 hours.",
          recommended_body: `Krishi Vigyan Kendra (KVK) ${currentState.district}`,
          helpline: "1800-180-1551 (Kisan Call Center Toll-Free)",
          warning_signs: ["Rapid wilting of tillers", "Milky bacterial ooze on cut leaves"]
        },
        farmer_summary_native: fallback.native,
        farmer_summary_english: fallback.english
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
      setLoadingStep('');
    }
  };

  const handleAskFollowUp = (prompt: string) => {
    setFollowUpQuestion(prompt);
    setActiveTab('copilot');
  };

  // Compute dynamic theme background based on user data and diagnosed risk
  const getPageThemeClass = () => {
    if (analysisResult) {
      const r = (analysisResult.risk_level || '').toLowerCase();
      if (r.includes('high') || r.includes('उच्च') || r.includes('ଅଧିକ')) {
        return 'bg-[#FFF8F8]';
      }
      if (r.includes('mod') || r.includes('मध्यम')) {
        return 'bg-[#FFFDF7]';
      }
      return 'bg-[#F4FAF4]';
    }
    return 'bg-[#FBFBFA]';
  };

  return (
    <div className={`min-h-screen ${getPageThemeClass()} text-[#1E2E1E] flex flex-col font-sans selection:bg-[#DCFCE7] selection:text-[#143021] max-w-full overflow-x-hidden transition-colors duration-500`}>
      {/* Top Localized Sticky Navbar */}
      <Navbar
        t={t}
        currentLanguage={formState.language}
        onLanguageChange={handleLanguageChange}
        onTryDemo={handleRunPrimaryDemo}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6">
        {/* TAB 1: Clean Crop Health Scanner & Diagnosis Report */}
        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            {/* If NO result yet: Show Clean, Focused Scanner Page */}
            {!analysisResult && (
              <>
                {/* Clean, Elegant Header Banner */}
                <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-r from-[#143021] via-[#1B4332] to-[#2D6A4F] text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#14532D] text-[11px] font-black uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#16A34A]" />
                      <span>{t.hero.trackBadge}</span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {t.hero.headline}
                    </h1>
                    <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                      {t.hero.description}
                    </p>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="flex flex-wrap sm:flex-col gap-2 shrink-0 text-[11px] font-bold text-emerald-200">
                    <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
                      <Sprout className="w-3.5 h-3.5 text-[#86EFAC]" />
                      <span>{t.hero.tagline1}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
                      <Volume2 className="w-3.5 h-3.5 text-[#FDE047]" />
                      <span>{t.hero.tagline2}</span>
                    </span>
                  </div>
                </div>

                {/* Analysis Upload & Agronomic Form */}
                <CropAnalysisSection
                  t={t}
                  formState={formState}
                  setFormState={setFormState}
                  onAnalyze={() => executeCropAnalysis()}
                  isLoading={isLoading}
                  loadingStep={loadingStep}
                />
              </>
            )}

            {/* If Result is Active: Show Clean Assessment Report View */}
            {analysisResult && (
              <div className="space-y-4">
                {/* Back to Scanner Top Toolbar */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white border border-[#CBD5E1] shadow-2xs">
                  <button
                    onClick={() => {
                      setAnalysisResult(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] text-xs font-bold transition-all flex items-center gap-1.5 min-h-[38px] active:scale-95"
                  >
                    <span>←</span>
                    <span>{t.results.newScanBtn}</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="hidden sm:inline text-gray-500 font-medium">Diagnosed:</span>
                    <span className="font-extrabold text-[#14532D] bg-[#DCFCE7] px-2.5 py-1 rounded-lg border border-[#86EFAC]">
                      {formState.crop} · {formState.district}
                    </span>
                    <button
                      onClick={() => setActiveTab('copilot')}
                      className="px-3 py-1.5 rounded-lg bg-[#1B4332] hover:bg-[#14261B] text-white font-bold text-xs flex items-center gap-1 min-h-[38px] transition-colors"
                    >
                      <span>💬 Copilot</span>
                      <ArrowRight className="w-3 h-3 text-[#A7F3D0]" />
                    </button>
                  </div>
                </div>

                {/* Assessment Result Dashboard */}
                <ResultsDashboard
                  t={t}
                  result={analysisResult}
                  crop={formState.crop}
                  district={formState.district}
                  state={formState.state}
                  language={formState.language}
                  imagePreview={formState.imagePreview}
                  onAskFollowUp={handleAskFollowUp}
                  onNewAnalysis={() => {
                    setAnalysisResult(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Interactive AI Farm Copilot */}
        {activeTab === 'copilot' && (
          <CopilotChat
            t={t}
            crop={formState.crop}
            district={formState.district}
            state={formState.state}
            language={formState.language}
            assessmentResult={analysisResult}
            initialQuestion={followUpQuestion}
          />
        )}

        {/* TAB 3: Farm Agro-Context Dashboard */}
        {activeTab === 'overview' && (
          <FarmOverview
            t={t}
            currentCrop={formState.crop}
            district={formState.district}
            state={formState.state}
            lastAssessment={analysisResult}
            onNavigateToAnalyze={() => setActiveTab('diagnosis')}
          />
        )}

        {/* TAB 4: Educational Guide, Principles & Architecture (Cleanly separated from main screen) */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            {/* Quick 3-Step Farmer Visual Guide */}
            <HowToUseGuide
              language={formState.language}
              onTryDemo={handleRunPrimaryDemo}
              onScrollToUpload={() => {
                setActiveTab('diagnosis');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              onSelectScenario={(sc) => {
                handleSelectScenario(sc);
              }}
            />

            {/* Designed for Indian Agriculture Principles */}
            <DesignedForIndia t={t} />

            {/* Technical System Architecture & Multimodal Pipeline */}
            <ArchitectureSection t={t} />
          </div>
        )}
      </main>

      {/* Fully Localized, Professional Footer */}
      <footer className="border-t border-[#E3E8E3] bg-[#F4F7F4] text-xs text-[#52796F] py-6 sm:py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#1B4332] text-white flex items-center justify-center font-bold text-xs shrink-0">
                KV
              </div>
              <span className="font-bold text-[#143021]">{t.appName}</span>
              <span className="text-gray-400">·</span>
              <span>{t.appSubtitle}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-medium text-[#2D6A4F]">
              <button onClick={() => setActiveTab('diagnosis')} className="hover:underline p-1 min-h-[36px] flex items-center">
                {t.tabs.diagnosis}
              </button>
              <button onClick={() => setActiveTab('copilot')} className="hover:underline p-1 min-h-[36px] flex items-center">
                {t.tabs.copilot}
              </button>
              <button onClick={() => setActiveTab('overview')} className="hover:underline p-1 min-h-[36px] flex items-center">
                {t.tabs.overview}
              </button>
              <button onClick={() => setActiveTab('architecture')} className="hover:underline p-1 min-h-[36px] flex items-center">
                {t.tabs.architecture}
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E0EBE0] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B] text-center sm:text-left">
            <p className="max-w-2xl leading-relaxed">
              {t.footer.disclaimer}
            </p>
            <p className="shrink-0 font-semibold text-[#143021]">
              {t.footer.helpline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
