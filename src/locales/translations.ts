/**
 * KisanVision AI - Comprehensive Multi-Language Localization Dictionary
 * Covers English, Odia, Hindi, Telugu, Marathi, Tamil, Bengali
 */

export interface TranslationStrings {
  appName: string;
  appSubtitle: string;
  hackathonBanner: string;
  prototypeNotice: string;
  tryDemoBtn: string;
  tabs: {
    diagnosis: string;
    copilot: string;
    overview: string;
    india: string;
    architecture: string;
  };
  hero: {
    trackBadge: string;
    headline: string;
    subheadline: string;
    description: string;
    analyzeBtn: string;
    demoBtn: string;
    tagline1: string;
    tagline2: string;
    tagline3: string;
  };
  capabilities: {
    seeTitle: string;
    seeSub: string;
    seeDesc: string;
    understandTitle: string;
    understandSub: string;
    understandDesc: string;
    actTitle: string;
    actSub: string;
    actDesc: string;
  };
  primaryDemoBox: {
    badge: string;
    title: string;
    desc: string;
    cropTag: string;
    locTag: string;
    langTag: string;
    btn: string;
  };
  form: {
    title: string;
    subtitle: string;
    step1: string;
    uploadText: string;
    uploadSubtext: string;
    changePhoto: string;
    readyBadge: string;
    step2: string;
    cropLabel: string;
    stateLabel: string;
    districtLabel: string;
    selectLanguageLabel: string;
    questionLabel: string;
    questionSubtext: string;
    questionPlaceholder: string;
    micTooltip: string;
    micListening: string;
    analyzeBtn: string;
    analyzing: string;
    noPhotoAlert: string;
    samplePhotoPrompt: string;
    useSampleBtn: string;
    contextTitle: string;
    temp: string;
    humidity: string;
    soil: string;
    kvk: string;
  };
  results: {
    disclaimerTitle: string;
    disclaimerText: string;
    title: string;
    subtitle: string;
    newScanBtn: string;
    voiceSummaryTitle: string;
    listenBtn: string;
    stopAudioBtn: string;
    toggleEnglishBtn: string;
    toggleNativeBtn: string;
    keyFocus: string;
    cardATitle: string;
    cardBTitle: string;
    cardCTitle: string;
    cardDTitle: string;
    cardETitle: string;
    riskCalculated: string;
    immediateActionsTitle: string;
    immediateActionsSub: string;
    regenTitle: string;
    regenSub: string;
    benefitLabel: string;
    timelineTitle: string;
    timelineSub: string;
    expertTitle: string;
    thresholdLabel: string;
    warningSignsLabel: string;
    institutionLabel: string;
    kisanCallCenter: string;
    kisanHours: string;
    askFollowUpBtn: string;
    followUpPromptText: string;
  };
  copilot: {
    title: string;
    subtitle: string;
    activeContext: string;
    suggestionsTitle: string;
    inputPlaceholder: string;
    sendBtn: string;
    thinking: string;
    welcomeMsg: string;
    listenBtn: string;
    muteBtn: string;
  };
  overview: {
    title: string;
    subtitle: string;
    tempGauge: string;
    humidityGauge: string;
    soilGauge: string;
    ndviGauge: string;
    activeAssessmentTitle: string;
    activeConcern: string;
    plotsTitle: string;
    rotationNote: string;
  };
  india: {
    badge: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    transparencyTitle: string;
    transparencyText: string;
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    guardrailsTitle: string;
    g1Title: string;
    g1Desc: string;
    g2Title: string;
    g2Desc: string;
    g3Title: string;
    g3Desc: string;
  };
  footer: {
    disclaimer: string;
    helpline: string;
  };
}

export const TRANSLATIONS: Record<string, TranslationStrings> = {
  English: {
    appName: "KisanVision AI",
    appSubtitle: "Regenerative Farm Intelligence",
    hackathonBanner: "AI-Powered Regenerative Crop Health Copilot",
    prototypeNotice: "District Agro-Climatic Data",
    tryDemoBtn: "⚡ Try Demo (Puri Rice)",
    tabs: {
      diagnosis: "🌾 Crop Health & Diagnosis",
      copilot: "💬 Farm Copilot",
      overview: "📊 Farm Overview",
      india: "🇮🇳 Designed for India",
      architecture: "⚙️ How It Works",
    },
    hero: {
      trackBadge: "Regenerative Agricultural Intelligence",
      headline: "KisanVision AI",
      subheadline: "Your farm. Your language. Smarter decisions.",
      description: "AI-powered crop health assessment and localized regenerative farming guidance for small and marginal farmers across India.",
      analyzeBtn: "Analyze My Crop",
      demoBtn: "⚡ Try Demo (Puri Rice)",
      tagline1: "Cautious Multimodal AI",
      tagline2: "Regenerative Practices First",
      tagline3: "7 Indian Languages",
    },
    capabilities: {
      seeTitle: "See",
      seeSub: "Analyze crop images",
      seeDesc: "Examine phone camera photos of leaves, stems, or tillers to detect visual chlorosis, margin necrosis, and insect trauma.",
      understandTitle: "Understand",
      understandSub: "Combine farm context",
      understandDesc: "Fuses visual cues with district-level agro-climatic zones, soil hydrology (alluvial, black soil, sandy loam), and humidity.",
      actTitle: "Act",
      actSub: "Practical regenerative guidance",
      actDesc: "Provides actionable 7-day field schedules emphasizing bio-inputs, water management (AWD), soil cover, and clear expert escalation.",
    },
    primaryDemoBox: {
      badge: "LIVE DEMONSTRATION (Puri Rice Leaf)",
      title: "Puri, Odisha · Rice (Paddy) Leaf Yellowing Assessment",
      desc: "Experience the end-to-end multimodal loop: Visual leaf inspection + high coastal humidity context + Odia native language explanation + regenerative water management advisory.",
      cropTag: "Crop: Rice",
      locTag: "Location: Puri, Odisha",
      langTag: "Language: Odia",
      btn: "Load Puri Rice Demo",
    },
    form: {
      title: "Crop Health & Multimodal Diagnosis",
      subtitle: "Submit a crop or leaf image, specify farm geography, and let Gemini reason over symptoms.",
      step1: "1. Crop or Leaf Photograph",
      uploadText: "Upload a crop or leaf photo",
      uploadSubtext: "Drag and drop, browse from device, or use camera",
      changePhoto: "Change photo",
      readyBadge: "Photo ready for analysis",
      step2: "2. Farm Location & Language Context",
      cropLabel: "Crop Type",
      stateLabel: "State",
      districtLabel: "District / Village",
      selectLanguageLabel: "Select Output Language",
      questionLabel: "Farmer's Question / Specific Concern",
      questionSubtext: "Type or speak in your language",
      questionPlaceholder: "Ask the farm copilot anything about this crop...",
      micTooltip: "Click to speak with microphone",
      micListening: "Listening... speak now",
      analyzeBtn: "Analyze Crop",
      analyzing: "Analyzing with Gemini Multimodal AI...",
      noPhotoAlert: "⚠️ Please upload a crop photo or click 'Try Demo' to analyze.",
      samplePhotoPrompt: "Don't have a leaf photo?",
      useSampleBtn: "Use Puri Rice Demo Photo",
      contextTitle: "District Agro-Climatic Parameters",
      temp: "Temperature",
      humidity: "Humidity",
      soil: "Dominant Soil",
      kvk: "Regional KVK",
    },
    results: {
      disclaimerTitle: "Informational Prototype Advisory Notice",
      disclaimerText: "This AI assessment is an advisory tool for smallholder farmers and does not constitute a guaranteed laboratory diagnosis. Crop symptoms can overlap. Always verify severe or rapidly progressing conditions with your local Krishi Vigyan Kendra (KVK) or block agriculture extension officer.",
      title: "Farm Health Assessment",
      subtitle: "Multimodal analysis combining visual leaf morphology and regional agro-climatic context.",
      newScanBtn: "Analyze Another Photo",
      voiceSummaryTitle: "Farmer Voice Summary",
      listenBtn: "🔊 Listen Aloud",
      stopAudioBtn: "⏹ Stop Audio",
      toggleEnglishBtn: "Show English Translation",
      toggleNativeBtn: "Show Native Script",
      keyFocus: "Key Diagnosis Focus",
      cardATitle: "Visual Observation",
      cardBTitle: "Possible Conditions & Likelihood",
      cardCTitle: "Crop Risk Level",
      cardDTitle: "Confidence Level",
      cardETitle: "Environmental & Agronomic Considerations",
      riskCalculated: "Calculated Stress Risk",
      immediateActionsTitle: "Recommended Immediate Actions",
      immediateActionsSub: "Practical, low-cost field interventions to halt disease propagation.",
      regenTitle: "Regenerative Farming Practices",
      regenSub: "Nature-positive interventions to heal soil microbiome and avoid unnecessary synthetic chemical expenditure.",
      benefitLabel: "Soil/Yield Benefit",
      timelineTitle: "Next 7 Days Plan",
      timelineSub: "Specific checkpoints to track recovery or catch secondary fungal infections.",
      expertTitle: "When to Seek Expert Field Inspection",
      thresholdLabel: "Escalation Threshold",
      warningSignsLabel: "Critical Warning Signs",
      institutionLabel: "Recommended Institution",
      kisanCallCenter: "Kisan Call Center (All India)",
      kisanHours: "Available in 22 languages, 6:00 AM to 10:00 PM all 7 days.",
      askFollowUpBtn: "Ask Farm Copilot Follow-up →",
      followUpPromptText: "My crop is still yellow after irrigation. What should I check?",
    },
    copilot: {
      title: "Farm Copilot Chat",
      subtitle: "Ask follow-up questions. KisanVision maintains your crop, geography, and symptoms.",
      activeContext: "Active Context",
      suggestionsTitle: "Suggested Farmer Questions",
      inputPlaceholder: "Ask about crop management, bio-fertilizers, water scheduling, or pest identification...",
      sendBtn: "Send",
      thinking: "Gemini reasoning over agronomic context...",
      welcomeMsg: "Namaskar! I am your KisanVision Farm Copilot. How can I assist you with your field today?",
      listenBtn: "🔊 Listen",
      muteBtn: "⏹ Mute",
    },
    overview: {
      title: "Farm Overview & Field Health Radar",
      subtitle: "Comprehensive field canopy telemetry, soil hydrology, and microclimate risk indicators.",
      tempGauge: "Microclimate Temp",
      humidityGauge: "Relative Humidity",
      soilGauge: "Soil Hydrology & Type",
      ndviGauge: "Canopy Health (Proxy)",
      activeAssessmentTitle: "Active Crop Health Assessment",
      activeConcern: "Primary Concern",
      plotsTitle: "Tracked Field Plots",
      rotationNote: "Regenerative Rotation Note: After harvesting, sow Dhaincha (Sesbania) to replenish organic carbon and suppress soil-borne pathogens.",
    },
    india: {
      badge: "Smallholder & Marginal Farmer Centric",
      title: "Designed for India",
      subtitle: "Bridging India's linguistic diversity, micro-climates, and smallholder reality through open agricultural intelligence.",
      p1Title: "22+ Languages Architecture",
      p1Desc: "Currently supporting 7 major languages with voice input and audio read-aloud designed for low-literacy farmers.",
      p2Title: "127 Agro-Climatic Zones",
      p2Desc: "Context-aware agronomic models reflect regional realities from coastal Odisha to Punjab plains.",
      p3Title: "Multi-Crop Ecosystem",
      p3Desc: "From staple paddy and wheat to commercial cash crops with regenerative bio-fertilizers and IPM focus.",
      p4Title: "AgriStack & DPI Ready",
      p4Desc: "Engineered for future interoperability with India's Digital Public Infrastructure and KVK databases.",
      transparencyTitle: "Prototype Transparency Statement",
      transparencyText: "KisanVision AI is demonstrated here as an innovative prototype for the AgriN hackathon, calibrated for selected agricultural hubs with prototype contextual data.",
    },
    architecture: {
      badge: "System Pipeline",
      title: "How KisanVision Works",
      subtitle: "An end-to-end pipeline connecting multimodal perception to grounded regenerative agronomy.",
      step1Title: "Farmer Input",
      step1Desc: "Leaf photo, voice prompt, or text question in local language.",
      step2Title: "Gemini 3.8 Multimodal AI",
      step2Desc: "Analyzes visual leaf lesions, marginal drying patterns, and chlorosis distribution.",
      step3Title: "Agro-Climatic Context Fusion",
      step3Desc: "Cross-references district weather, soil type, and humidity threshold.",
      step4Title: "Regenerative Advisory Engine",
      step4Desc: "Synthesizes bio-inputs, water management (AWD), and 7-day action timeline without chemical overdose.",
      step5Title: "Localized Action & KVK Escalation",
      step5Desc: "Delivers voice summary in native script + connects to nearest Krishi Vigyan Kendra.",
      guardrailsTitle: "Agronomic Trust & Safety Guardrails",
      g1Title: "Zero False Certainty",
      g1Desc: "Never claims guaranteed diagnoses from photos alone. All assessments are expressed with calibrated confidence scores.",
      g2Title: "No Unsafe Chemical Dosages",
      g2Desc: "Refuses to prescribe high-toxicity pesticide cocktails; emphasizes bio-fungicides and cultural controls (AWD).",
      g3Title: "Human-in-the-Loop Escalation",
      g3Desc: "Automates referral thresholds to local Krishi Vigyan Kendra (KVK) officers and the Kisan Call Center.",
    },
    footer: {
      disclaimer: "Prototype Notice: Environmental and sensor telemetry are simulated as prototype contextual data. Not a replacement for official state agricultural university laboratory diagnosis.",
      helpline: "Kisan Call Center: 1800-180-1551 (Toll-Free, 6 AM - 10 PM)",
    },
  },

  // ODIA (ଓଡ଼ିଆ)
  Odia: {
    appName: "କିଷାନଭିଜନ AI (KisanVision)",
    appSubtitle: "ପୁନର୍ଜନନକୃଷି ବୁଦ୍ଧିମତା କୋପାଇଲଟ୍",
    hackathonBanner: "AI-ଚାଳିତ ପୁନର୍ଜନନଶୀଳ ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ",
    prototypeNotice: "ଜିଲ୍ଲା କୃଷି-ପାଣିପାଗ ତଥ୍ୟ",
    tryDemoBtn: "⚡ ଡେମୋ ଚଲାନ୍ତୁ (ପୁରୀ ଧାନ)",
    tabs: {
      diagnosis: "🌾 ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ଓ ନିଦାନ",
      copilot: "💬 କୃଷକ କୋପାଇଲଟ୍ ଚାଟ୍",
      overview: "📊 ଜମି ପରିଚାଳନା ସମୀକ୍ଷା",
      india: "🇮🇳 ଭାରତ ପାଇଁ ନିର୍ମିତ",
      architecture: "⚙️ କାର୍ଯ୍ୟ ପ୍ରଣାଳୀ",
    },
    hero: {
      trackBadge: "ପୁନର୍ଜନନଶୀଳ କୃଷି ବୁଦ୍ଧିମତା",
      headline: "କିଷାନଭିଜନ AI",
      subheadline: "ଆପଣଙ୍କ ବିଲ। ଆପଣଙ୍କ ଭାଷା। ସଠିକ୍ ନିଷ୍ପତ୍ତି।",
      description: "ଭାରତର କ୍ଷୁଦ୍ର ଓ ନାମମାତ୍ର ଚାଷୀମାନଙ୍କ ପାଇଁ AI-ଆଧାରିତ ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ଆକଳନ ଏବଂ ସ୍ଥାନୀୟ ପୁନର୍ଜନନଶୀଳ ପ୍ରାକୃତିକ କୃଷି ପରାମର୍ଶ।",
      analyzeBtn: "ଫସଲ ଯାଞ୍ଚ କରନ୍ତୁ",
      demoBtn: "⚡ ଡେମୋ ଚଲାନ୍ତୁ (ପୁରୀ ଧାନ)",
      tagline1: "ସାବଧାନ AI ମଲ୍ଟିମୋଡାଲ୍",
      tagline2: "ପ୍ରାକୃତିକ ପୁନର୍ଜନନଶୀଳ ପଦ୍ଧତି",
      tagline3: "ଓଡ଼ିଆ ସମେତ ୭ଟି ଭାରତୀୟ ଭାଷା",
    },
    capabilities: {
      seeTitle: "ଦେଖନ୍ତୁ (See)",
      seeSub: "ପତ୍ର ଓ ଫସଲ ଫଟୋ ଯାଞ୍ଚ",
      seeDesc: "ମୋବାଇଲ୍ କ୍ୟାମେରା ଫଟୋ ଦ୍ୱାରା ପତ୍ରର ହଳଦିଆ ପଡ଼ିବା, ଧାର ଶୁଖିବା ଏବଂ କୀଟପତଙ୍ଗ ଆକ୍ରମଣ ଚିହ୍ନଟ କରନ୍ତୁ।",
      understandTitle: "ବୁଝନ୍ତୁ (Understand)",
      understandSub: "ଜିଲ୍ଲା ମାଟି ଓ ପାଣିପାଗ ସହିତ ମିଳନ",
      understandDesc: "ପୁରୀର ଉପକୂଳ ଆର୍ଦ୍ରତା, ପଟୁ ମାଟି ଏବଂ ତାପମାତ୍ରାକୁ AI ବିଶ୍ଳେଷଣ ସହିତ ଯୋଡି ବାସ୍ତବ ସ୍ଥିତି ବୁଝନ୍ତୁ।",
      actTitle: "ପଦକ୍ଷେପ ନିଅନ୍ତୁ (Act)",
      actSub: "ପ୍ରାକୃତିକ ଓ ସ୍ଥାୟୀ ପରାମର୍ଶ",
      actDesc: "୭ ଦିନିଆ ବିଲ ଯୋଜନା, ଜୀବାମୃତ, ପାଣି ନିଷ୍କାସନ (AWD), ଏବଂ KVK ବିଶେଷଜ୍ଞଙ୍କ ସହ ସଂଯୋଗ।",
    },
    primaryDemoBox: {
      badge: "ମୁଖ୍ୟ ଡେମୋ (ପୁରୀ ଧାନ ପତ୍ର)",
      title: "ପୁରୀ, ଓଡ଼ିଶା · ଧାନ ପତ୍ର ହଳଦିଆ ପଡ଼ିବା ରୋଗ ନିରୂପଣ",
      desc: "ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରକ୍ରିୟା ଦେଖନ୍ତୁ: ପତ୍ର ଫଟୋ ଯାଞ୍ଚ + ପୁରୀ ଉପକୂଳ ଆର୍ଦ୍ରତା + ଓଡ଼ିଆ ଭାଷାରେ ସରଳ ପରାମର୍ଶ + ଜୈବିକ ଉପଚାର।",
      cropTag: "ଫସଲ: ଧାନ",
      locTag: "ସ୍ଥାନ: ପୁରୀ, ଓଡ଼ିଶା",
      langTag: "ଭାଷା: ଓଡ଼ିଆ",
      btn: "ପୁରୀ ଧାନ ଡେମୋ ଖୋଲନ୍ତୁ",
    },
    form: {
      title: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ଓ ମଲ୍ଟିମୋଡାଲ୍ ଯାଞ୍ଚ",
      subtitle: "ଫସଲ କିମ୍ବା ପତ୍ରର ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ, ଆପଣଙ୍କ ଜିଲ୍ଲା ବାଛନ୍ତୁ ଏବଂ Gemini AI ରୁ ପରାମର୍ଶ ପାଆନ୍ତୁ।",
      step1: "୧. ଫସଲ କିମ୍ବା ପତ୍ରର ଫଟୋ",
      uploadText: "ଏଠାରେ ପତ୍ରର ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ",
      uploadSubtext: "ଫଟୋ ଟାଣି ଆଣନ୍ତୁ, ଫାଇଲ୍ ବାଛନ୍ତୁ କିମ୍ବା କ୍ୟାମେରା ବ୍ୟବହାର କରନ୍ତୁ",
      changePhoto: "ଫଟୋ ବଦଳାନ୍ତୁ",
      readyBadge: "ଫଟୋ ଯାଞ୍ଚ ପାଇଁ ପ୍ରସ୍ତୁତ",
      step2: "୨. ଚାଷ ଜମି ଅବସ୍ଥିତି ଓ ଭାଷା",
      cropLabel: "ଫସଲର ପ୍ରକାର",
      stateLabel: "ରାଜ୍ୟ",
      districtLabel: "ଜିଲ୍ଲା / ଗ୍ରାମ",
      selectLanguageLabel: "ଫଳାଫଳ ପାଇଁ ଭାଷା ବାଛନ୍ତୁ",
      questionLabel: "କୃଷକଙ୍କ ପ୍ରଶ୍ନ / ସମସ୍ୟା",
      questionSubtext: "ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା ମାଇକ୍ ରେ କୁହନ୍ତୁ",
      questionPlaceholder: "ଏହି ଫସଲ ବିଷୟରେ ଯାହା ପଚାରିବାକୁ ଚାହାଁନ୍ତି ଏଠାରେ ଲେଖନ୍ତୁ...",
      micTooltip: "ମାଇକ୍ରୋଫୋନ୍ ଦବାଇ କଥା କୁହନ୍ତୁ",
      micListening: "ଶୁଣୁଛି... ଏବେ କୁହନ୍ତୁ",
      analyzeBtn: "ଫସଲ ଯାଞ୍ଚ କରନ୍ତୁ",
      analyzing: "Gemini AI ଦ୍ୱାରା ଯାଞ୍ଚ ଚାଲିଛି...",
      noPhotoAlert: "⚠️ ଦୟାକରି ଏକ ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ କିମ୍ବା 'ଡେମୋ ଚଲାନ୍ତୁ' ଦବାନ୍ତୁ।",
      samplePhotoPrompt: "ଫଟୋ ନାହିଁ କି?",
      useSampleBtn: "ପୁରୀ ଧାନ ନମୁନା ଫଟୋ ବ୍ୟବହାର କରନ୍ତୁ",
      contextTitle: "ସ୍ଥାନୀୟ କୃଷି-ପରିବେଶ ଓ ମାଟି ସ୍ଥିତି",
      temp: "ତାପମାତ୍ରା",
      humidity: "ବାୟୁମଣ୍ଡଳୀୟ ଆର୍ଦ୍ରତା",
      soil: "ମାଟି ପ୍ରକାର",
      kvk: "ସ୍ଥାନୀୟ କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର",
    },
    results: {
      disclaimerTitle: "ସତର୍କତାମୂଳକ ପରାମର୍ଶ ସୂଚନା",
      disclaimerText: "ଏହି AI ଆକଳନ କୃଷକମାନଙ୍କ ସହାୟତା ପାଇଁ ଏକ ସୂଚନାମୂଳକ ଉପକରଣ ଏବଂ ଏହା କୌଣସି ଚୂଡ଼ାନ୍ତ ଲାବୋରେଟୋରୀ ପରୀକ୍ଷା ନୁହେଁ। ଗମ୍ଭୀର ସମସ୍ୟା ଦେଖାଦେଲେ ନିଜ ବ୍ଲକ୍ କୃଷି ଅଧିକାରୀ କିମ୍ବା ନିକଟସ୍ଥ କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର (KVK) ସହିତ ପରାମର୍ଶ କରନ୍ତୁ।",
      title: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ମୂଲ୍ୟାୟନ (Farm Health Assessment)",
      subtitle: "ପତ୍ରର ଲକ୍ଷଣ ଏବଂ ଆପଣଙ୍କ ଜିଲ୍ଲାର ପାଣିପାଗକୁ ଆଧାର କରି Gemini AI ର ବିଶ୍ଳେଷଣ।",
      newScanBtn: "ଅନ୍ୟ ଏକ ଫଟୋ ଯାଞ୍ଚ କରନ୍ତୁ",
      voiceSummaryTitle: "କୃଷକ ଭାଇଙ୍କ ପାଇଁ ସରଳ ବାର୍ତ୍ତା",
      listenBtn: "🔊 ପଢ଼ି ଶୁଣାନ୍ତୁ (Listen)",
      stopAudioBtn: "⏹ ଅଟକାନ୍ତୁ (Stop)",
      toggleEnglishBtn: "ଇଂରାଜୀ ଅନୁବାଦ ଦେଖନ୍ତୁ",
      toggleNativeBtn: "ଓଡ଼ିଆ ଅକ୍ଷରରେ ଦେଖନ୍ତୁ",
      keyFocus: "ମୁଖ୍ୟ ଚିନ୍ତା / ରୋଗ ସନ୍ଦେହ",
      cardATitle: "ପତ୍ରରେ ଦେଖାଯାଇଥିବା ଲକ୍ଷଣ",
      cardBTitle: "ସମ୍ଭାବ୍ୟ ରୋଗ ଓ ଆକଳନ",
      cardCTitle: "ଫସଲ ବିପଦ ସ୍ତର (Risk Level)",
      cardDTitle: "ବିଶ୍ୱାସନୀୟତା ସ୍ତର (Confidence)",
      cardETitle: "ଜିଲ୍ଲା ପାଣିପାଗ ଓ ମାଟିର ପ୍ରଭାବ",
      riskCalculated: "ହିସାବ କରାଯାଇଥିବା ବିପଦ",
      immediateActionsTitle: "ତୁରନ୍ତ କରିବାକୁ ଥିବା ପଦକ୍ଷେପ",
      immediateActionsSub: "ରୋଗ ବ୍ୟାପିବା ରୋକିବା ପାଇଁ ସହଜ ଏବଂ ସ୍ୱଳ୍ପ ଖର୍ଚ୍ଚ ବିଶିଷ୍ଟ ପଦକ୍ଷେପ।",
      regenTitle: "ପୁନର୍ଜନନଶୀଳ ପ୍ରାକୃତିକ କୃଷି ପଦ୍ଧତି",
      regenSub: "ମାଟିର ଉର୍ବରତା ବୃଦ୍ଧି ଏବଂ ଅଦରକାରୀ ରାସାୟନିକ ଖର୍ଚ୍ଚ ହ୍ରାସ କରିବା ପାଇଁ ପ୍ରାକୃତିକ ଉପାୟ।",
      benefitLabel: "ମାଟି ଓ ଅମଳ ଉପରେ ଲାଭ",
      timelineTitle: "ଆଗାମୀ ୭ ଦିନର ବିଲ କାର୍ଯ୍ୟସୂଚୀ",
      timelineSub: "ଫସଲର ଉନ୍ନତି ଲକ୍ଷ୍ୟ କରିବା ପାଇଁ ନିର୍ଦ୍ଦିଷ୍ଟ ପଦକ୍ଷେପ।",
      expertTitle: "ବିଶେଷଜ୍ଞଙ୍କ ପରାମର୍ଶ କେବେ ନେବେ",
      thresholdLabel: "ବିପଦ ସୀମା",
      warningSignsLabel: "ମୁଖ୍ୟ ବିପଦ ଲକ୍ଷଣ",
      institutionLabel: "ପରାମର୍ଶ ନେବାକୁ ଥିବା କାର୍ଯ୍ୟାଳୟ",
      kisanCallCenter: "କିଷାନ କଲ୍ ସେଣ୍ଟର୍ (ସର୍ବଭାରତୀୟ)",
      kisanHours: "୨୨ଟି ଭାଷାରେ ଉପଲବ୍ଧ, ସକାଳ ୬:୦୦ ରୁ ରାତି ୧୦:୦୦ ଯାଏଁ ସବୁଦିନ।",
      askFollowUpBtn: "କୋପାଇଲଟ୍ କୁ ଆଉ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ →",
      followUpPromptText: "ଜମିରେ ପାଣି ଦେବା ପରେ ବି ଧାନ ପତ୍ର ହଳଦିଆ ରହିଛି, ମୁଁ କଣ କରିବି?",
    },
    copilot: {
      title: "କୃଷକ କୋପାଇଲଟ୍ ଚାଟ୍",
      subtitle: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ। କିଷାନଭିଜନ ଆପଣଙ୍କ ଫସଲ, ସ୍ଥାନ ଓ ରୋଗ ଲକ୍ଷଣକୁ ମନେରଖି ଉତ୍ତର ଦିଏ।",
      activeContext: "ସକ୍ରିୟ ଚାଷ ତଥ୍ୟ",
      suggestionsTitle: "ପଚାରିବା ପାଇଁ କିଛି ପ୍ରଶ୍ନ",
      inputPlaceholder: "ଫସଲ, ଜୈବିକ ଖତ, ପାଣି ପରିଚାଳନା କିମ୍ବା ରୋଗ ବିଷୟରେ ପଚାରନ୍ତୁ...",
      sendBtn: "ପଠାନ୍ତୁ",
      thinking: "Gemini AI ଚାଷ ବିଷୟରେ ଚିନ୍ତା କରୁଛି...",
      welcomeMsg: "ନମସ୍କାର କୃଷକ ଭାଇ! ମୁଁ ଆପଣଙ୍କ କିଷାନଭିଜନ କୋପାଇଲଟ୍। ଆଜି ଆପଣଙ୍କ ବିଲ ବିଷୟରେ ମୁଁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
      listenBtn: "🔊 ଶୁଣନ୍ତୁ",
      muteBtn: "⏹ ବନ୍ଦ କରନ୍ତୁ",
    },
    overview: {
      title: "ଜମି ପରିଚାଳନା ଓ ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ରାଡାର୍",
      subtitle: "ଜମିର ଉପଗ୍ରହ ସୂଚକାଙ୍କ, ମାଟିର ଆର୍ଦ୍ରତା ଏବଂ ଜଳବାୟୁ ବିପଦ ଆକଳନ।",
      tempGauge: "ସ୍ଥାନୀୟ ତାପମାତ୍ରା",
      humidityGauge: "ବାୟୁମଣ୍ଡଳ ଆର୍ଦ୍ରତା",
      soilGauge: "ମାଟିର ପ୍ରକାର",
      ndviGauge: "ଫସଲ ସବୁଜିମା (NDVI ସୂଚକ)",
      activeAssessmentTitle: "ସକ୍ରିୟ ଫସଲ ଯାଞ୍ଚ ସ୍ଥିତି",
      activeConcern: "ମୁଖ୍ୟ ସମସ୍ୟା",
      plotsTitle: "ପଞ୍ଜୀକୃତ ଜମି ପ୍ଲଟ୍ ସମୂହ",
      rotationNote: "ପୁନର୍ଜନନଶୀଳ ଫସଲ ଚକ୍ର: ଧାନ ଅମଳ ପରେ ଧଇଞ୍ଚା ଚାଷ କରନ୍ତୁ, ଯାହା ମାଟିରେ ଜୈବିକ ଅଙ୍ଗାରକ ବୃଦ୍ଧି କରିବ ଏବଂ ଜୀବାଣୁ ନଷ୍ଟ କରିବ।",
    },
    india: {
      badge: "ଭାରତୀୟ ଚାଷୀଙ୍କ ପାଇଁ ସମର୍ପିତ",
      title: "ଭାରତ ପାଇଁ ନିର୍ମିତ",
      subtitle: "ଭାରତର ଭାଷାଗତ ବିବିଧତା, ମାଟିର ପାର୍ଥକ୍ୟ ଏବଂ କ୍ଷୁଦ୍ର ଚାଷୀଙ୍କ ଆବଶ୍ୟକତାକୁ ପୂରଣ କରିବା ପାଇଁ ପ୍ରସ୍ତୁତ।",
      p1Title: "୨୨+ ଭାଷା ଭିତ୍ତିଭୂମି",
      p1Desc: "ବର୍ତ୍ତମାନ ଓଡ଼ିଆ ସମେତ ୭ଟି ମୁଖ୍ୟ ଭାଷାରେ ଧ୍ୱନି (Voice) ଏବଂ ଲିଖିତ ପରାମର୍ଶ ଉପଲବ୍ଧ।",
      p2Title: "୧୨୭ କୃଷି-ଜଳବାୟୁ ମଣ୍ଡଳ",
      p2Desc: "ଉପକୂଳ ଓଡ଼ିଶାରୁ ପଞ୍ଜାବ ପର୍ଯ୍ୟନ୍ତ ପ୍ରତ୍ୟେକ ଜିଲ୍ଲାର ମାଟି ଓ ପାଣିପାଗକୁ ଆଧାର କରି ନିର୍ଦ୍ଦିଷ୍ଟ ପରାମର୍ଶ।",
      p3Title: "ବହୁ-ଫସଲ ବ୍ୟବସ୍ଥା",
      p3Desc: "ଧାନ, ଗହମ, କପା, ପନିପରିବା ସହିତ ଜୈବିକ ପଦ୍ଧତି ଏବଂ ମିଶ୍ରିତ ଫସଲ ପାଇଁ ଉପଯୁକ୍ତ।",
      p4Title: "AgriStack ଓ ଡିଜିଟାଲ୍ ସଂଯୋଗ",
      p4Desc: "ଭାରତର ଡିଜିଟାଲ୍ ପବ୍ଲିକ୍ ଇନଫ୍ରାଷ୍ଟ୍ରକଚର୍ (DPI) ଏବଂ KVK ତଥ୍ୟ ସହିତ ସଂଯୋଗ ଯୋଗ୍ୟ।",
      transparencyTitle: "ପ୍ରୋଟୋଟାଇପ୍ ସ୍ପଷ୍ଟୀକରଣ",
      transparencyText: "କିଷାନଭିଜନ AI କୁ AgriN ହାକାଥନ୍ ପାଇଁ ପ୍ରୋଟୋଟାଇପ୍ ଭାବରେ ପ୍ରସ୍ତୁତ କରାଯାଇଛି ଏବଂ ନମୁନା ଜିଲ୍ଲା ସହିତ ପ୍ରଦର୍ଶନ କରାଯାଉଛି।",
    },
    architecture: {
      badge: "ସିଷ୍ଟମ୍ ପାଇପଲାଇନ୍",
      title: "କିଷାନଭିଜନ କିପରି କାମ କରେ",
      subtitle: "ଫଟୋ ଗ୍ରହଣ ଠାରୁ ଆରମ୍ଭ କରି ପ୍ରାକୃତିକ କୃଷି ପରାମର୍ଶ ପର୍ଯ୍ୟନ୍ତ ଏକ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରଣାଳୀ।",
      step1Title: "ଚାଷୀଙ୍କ ତଥ୍ୟ",
      step1Desc: "ପତ୍ର ଫଟୋ, କଣ୍ଠସ୍ୱର (Voice) କିମ୍ବା ଓଡ଼ିଆ ଭାଷାରେ ଲେଖା ପ୍ରଶ୍ନ।",
      step2Title: "Gemini 3.8 AI ବିଶ୍ଳେଷଣ",
      step2Desc: "ପତ୍ରର ହଳଦିଆ ଦାଗ ଏବଂ ରୋଗ ଲକ୍ଷଣର କାରଣ ଖୋଜେ।",
      step3Title: "ପାଣିପାଗ ଓ ମାଟି ସଂଯୋଗ",
      step3Desc: "ପୁରୀ ଜିଲ୍ଲାର ଉପକୂଳ ଆର୍ଦ୍ରତା ଓ ମାଟିର ପରିସ୍ଥିତିକୁ ଯୋଡ଼େ।",
      step4Title: "ପୁନର୍ଜନନଶୀଳ ପରାମର୍ଶ ଇଞ୍ଜିନ୍",
      step4Desc: "ଜୈବିକ ଉପଚାର, ଜଳ ପରିଚାଳନା ଏବଂ ୭ ଦିନିଆ କାର୍ଯ୍ୟ ଯୋଜନା ପ୍ରସ୍ତୁତ କରେ।",
      step5Title: "ଚାଷୀଙ୍କ ପଦକ୍ଷେପ ଓ KVK ସହାୟତା",
      step5Desc: "ଓଡ଼ିଆ ଭାଷାରେ ପରାମର୍ଶ ଏବଂ କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର ସହିତ ସମ୍ପର୍କ।",
      guardrailsTitle: "ବିଶ୍ୱାସନୀୟତା ଓ ସୁରକ୍ଷା ନିୟମ",
      g1Title: "ଅସତ୍ୟ ଦାବି ନାହିଁ",
      g1Desc: "କେବଳ ଫଟୋରୁ ୧୦୦% ରୋଗ ନିରୂପଣ ଦାବି କରେନାହିଁ; ସତର୍କତାମୂଳକ ଆକଳନ ପ୍ରଦାନ କରେ।",
      g2Title: "ବିପଜ୍ଜନକ ରାସାୟନିକ ପରାମର୍ଶ ନାହିଁ",
      g2Desc: "ବିଷାକ୍ତ କୀଟନାଶକ ପରିବର୍ତ୍ତେ ଜୈବିକ ସାର, ଗୋବର ରସ ଏବଂ ପ୍ରାକୃତିକ ପଦ୍ଧତି ଉପରେ ଗୁରୁତ୍ୱ ଦିଏ।",
      g3Title: "ବିଶେଷଜ୍ଞଙ୍କ ସହ ସଂଯୋଗ",
      g3Desc: "ଫସଲ ନଷ୍ଟ ହେବାର ଆଶଙ୍କା ଥିଲେ ତୁରନ୍ତ KVK କିମ୍ବା କିଷାନ କଲ୍ ସେଣ୍ଟରକୁ ପଠାଏ।",
    },
    footer: {
      disclaimer: "ପ୍ରୋଟୋଟାଇପ୍ ସୂଚନା: ପରିବେଶ ଓ ସେନ୍ସର ତଥ୍ୟ କେବଳ ଡେମୋ ଉଦ୍ଦେଶ୍ୟରେ ଦିଆଯାଇଛି। ଏହା ସରକାରୀ କୃଷି ବିଶ୍ୱବିଦ୍ୟାଳୟ ପରୀକ୍ଷାଗାରର ବିକଳ୍ପ ନୁହେଁ।",
      helpline: "କିଷାନ କଲ୍ ସେଣ୍ଟର୍: ୧୮୦୦-୧୮୦-୧୫୫୧ (ଟୋଲ୍ ଫ୍ରି, ସକାଳ ୬ ରୁ ରାତି ୧୦)",
    },
  },

  // HINDI (हिंदी)
  Hindi: {
    appName: "किसानविज़न AI (KisanVision)",
    appSubtitle: "पुनर्योजी कृषि बुद्धिमत्ता",
    hackathonBanner: "AI-संचालित पुनर्योजी फसल स्वास्थ्य सलाहकार",
    prototypeNotice: "जिला कृषि-मौसम डेटा",
    tryDemoBtn: "⚡ डेमो चलाएं (पुरी धान)",
    tabs: {
      diagnosis: "🌾 फसल स्वास्थ्य एवं जांच",
      copilot: "💬 किसान कोपायलट चैट",
      overview: "📊 खेत प्रबंधन समीक्षा",
      india: "🇮🇳 भारत के लिए निर्मित",
      architecture: "⚙️ कार्य प्रणाली",
    },
    hero: {
      trackBadge: "पुनर्योजी कृषि बुद्धिमत्ता",
      headline: "किसानविज़न AI",
      subheadline: "आपका खेत। आपकी भाषा। सही निर्णय।",
      description: "भारत के लघु एवं सीमांत किसानों के लिए AI-संचालित फसल स्वास्थ्य मूल्यांकन और स्थानीय पुनर्योजी प्राकृतिक कृषि सलाह।",
      analyzeBtn: "मेरी फसल की जांच करें",
      demoBtn: "⚡ डेमो चलाएं (पुरी धान)",
      tagline1: "सतर्क मल्टीमॉडल AI",
      tagline2: "पुनर्योजी जैविक पद्धतियां",
      tagline3: "7 भारतीय भाषाओं में उपलब्ध",
    },
    capabilities: {
      seeTitle: "देखें (See)",
      seeSub: "पत्ती व फसल की फोटो जांचें",
      seeDesc: "मोबाइल कैमरे से पत्ती का पीलापन, किनारों का सूखना और कीट क्षति तुरंत पहचानें।",
      understandTitle: "समझें (Understand)",
      understandSub: "मिट्टी और मौसम के साथ समन्वय",
      understandDesc: "जिले की आर्द्रता, दोमट या काली मिट्टी और वर्षा को AI विश्लेषण के साथ जोड़ें।",
      actTitle: "कदम उठाएं (Act)",
      actSub: "व्यावहारिक पुनर्योजी मार्गदर्शन",
      actDesc: "7-दिवसीय योजना, जीवामृत, पानी की निकासी (AWD) और कृषि विज्ञान केंद्र (KVK) से संपर्क।",
    },
    primaryDemoBox: {
      badge: "मुख्य डेमो (पुरी धान पत्ती)",
      title: "पुरी, ओडिशा · धान की पत्ती का पीलापन विश्लेषण",
      desc: "पूर्ण मल्टीमॉडल प्रक्रिया देखें: पत्ती निरीक्षण + तटीय आर्द्रता संदर्भ + हिंदी/ओडिया व्याख्या + जैविक जल प्रबंधन।",
      cropTag: "फसल: धान (चावल)",
      locTag: "स्थान: पुरी, ओडिशा",
      langTag: "भाषा: हिंदी",
      btn: "पुरी धान डेमो लोड करें",
    },
    form: {
      title: "फसल स्वास्थ्य एवं मल्टीमॉडल निदान",
      subtitle: "फसल या पत्ती की फोटो अपलोड करें, अपना जिला चुनें और Gemini AI से सलाह पाएं।",
      step1: "1. फसल अथवा पत्ती की फोटो",
      uploadText: "फसल या पत्ती की फोटो अपलोड करें",
      uploadSubtext: "खींचकर लाएं, गैलरी से चुनें या कैमरे का उपयोग करें",
      changePhoto: "फोटो बदलें",
      readyBadge: "फोटो विश्लेषण हेतु तैयार",
      step2: "2. खेत का स्थान और भाषा",
      cropLabel: "फसल का प्रकार",
      stateLabel: "राज्य",
      districtLabel: "जिला / गांव",
      selectLanguageLabel: "आउटपुट भाषा चुनें",
      questionLabel: "किसान का प्रश्न / विशेष समस्या",
      questionSubtext: "टाइप करें या माइक से बोलें",
      questionPlaceholder: "इस फसल के बारे में जो पूछना चाहते हैं यहां लिखें...",
      micTooltip: "माइक दबाकर बोलें",
      micListening: "सुन रहा हूँ... अब बोलें",
      analyzeBtn: "फसल की जांच करें",
      analyzing: "Gemini AI द्वारा विश्लेषण जारी है...",
      noPhotoAlert: "⚠️ कृपया फोटो अपलोड करें या 'डेमो चलाएं' पर क्लिक करें।",
      samplePhotoPrompt: "क्या आपके पास फोटो नहीं है?",
      useSampleBtn: "पुरी धान का नमूना फोटो प्रयोग करें",
      contextTitle: "स्थानीय कृषि-मौसम और मिट्टी की स्थिति",
      temp: "तापमान",
      humidity: "हवा में नमी",
      soil: "मुख्य मिट्टी प्रकार",
      kvk: "क्षेत्रीय KVK",
    },
    results: {
      disclaimerTitle: "सूचनात्मक प्रोटोटाइप सलाह सूचना",
      disclaimerText: "यह AI मूल्यांकन किसानों की मदद हेतु एक सूचनात्मक साधन है और यह किसी प्रयोगशाला जांच का विकल्प नहीं है। गंभीर स्थिति होने पर हमेशा अपने कृषि विज्ञान केंद्र (KVK) अथवा कृषि अधिकारी से संपर्क करें।",
      title: "खेत स्वास्थ्य मूल्यांकन (Health Assessment)",
      subtitle: "पत्ती के लक्षणों और स्थानीय कृषि मौसम पर आधारित मल्टीमॉडल AI विश्लेषण।",
      newScanBtn: "दूसरी फोटो जांचें",
      voiceSummaryTitle: "किसान के लिए सरल संदेश",
      listenBtn: "🔊 बोलकर सुनाएं (Listen)",
      stopAudioBtn: "⏹ बंद करें (Stop)",
      toggleEnglishBtn: "अंग्रेज़ी अनुवाद देखें",
      toggleNativeBtn: "हिंदी में देखें",
      keyFocus: "मुख्य रोग फोकस",
      cardATitle: "पत्ती पर देखे गए लक्षण",
      cardBTitle: "संभावित रोग व आशंका",
      cardCTitle: "फसल जोखिम स्तर",
      cardDTitle: "सटीकता / विश्वास स्तर",
      cardETitle: "मौसम व मिट्टी का प्रभाव",
      riskCalculated: "आकलित फसल जोखिम",
      immediateActionsTitle: "तत्काल आवश्यक कदम",
      immediateActionsSub: "रोग फैलाव रोकने के लिए आसान व कम लागत वाले उपाय।",
      regenTitle: "पुनर्योजी प्राकृतिक कृषि पद्धतियां",
      regenSub: "मिट्टी की उर्वरता बढ़ाने और हानिकारक रसायनों के खर्च को रोकने के प्राकृतिक तरीके।",
      benefitLabel: "मिट्टी व पैदावार पर लाभ",
      timelineTitle: "आगामी 7 दिनों की कार्ययोजना",
      timelineSub: "फसल सुधार की जांच के लिए निर्धारित चरण।",
      expertTitle: "कृषि विशेषज्ञ से कब संपर्क करें",
      thresholdLabel: "खतरे की सीमा",
      warningSignsLabel: "मुख्य चेतावनी संकेत",
      institutionLabel: "अनुशंसित संस्थान",
      kisanCallCenter: "किसान कॉल सेंटर (अखिल भारतीय)",
      kisanHours: "22 भाषाओं में उपलब्ध, सुबह 6:00 से रात 10:00 बजे तक सातों दिन।",
      askFollowUpBtn: "कोपायलट से अगला प्रश्न पूछें →",
      followUpPromptText: "सिंचाई के बाद भी पत्तियां पीली हैं, मुझे क्या करना चाहिए?",
    },
    copilot: {
      title: "किसान कोपायलट चैट",
      subtitle: "सवाल पूछें। किसानविज़न आपकी फसल, स्थान और लक्षणों को ध्यान में रखकर उत्तर देता है।",
      activeContext: "सक्रिय खेत संदर्भ",
      suggestionsTitle: "सुझाए गए प्रश्न",
      inputPlaceholder: "खाद, पानी प्रबंधन, जैविक कीटनाशक या फसल देखभाल के बारे में पूछें...",
      sendBtn: "भेजें",
      thinking: "Gemini AI कृषि संदर्भ पर विचार कर रहा है...",
      welcomeMsg: "नमस्ते किसान मित्र! मैं आपका किसानविज़न कोपायलट हूँ। आज मैं आपकी फसल के लिए क्या सहायता कर सकता हूँ?",
      listenBtn: "🔊 सुनें",
      muteBtn: "⏹ म्यूट",
    },
    overview: {
      title: "खेत समीक्षा एवं फसल स्वास्थ्य रडार",
      subtitle: "उपग्रह सूचकांक, मिट्टी की नमी और जलवायु जोखिम संकेतक।",
      tempGauge: "स्थानीय तापमान",
      humidityGauge: "हवा में नमी",
      soilGauge: "मिट्टी का प्रकार",
      ndviGauge: "फसल हरियाली (NDVI)",
      activeAssessmentTitle: "सक्रिय फसल स्वास्थ्य स्थिति",
      activeConcern: "मुख्य चिंता",
      plotsTitle: "खेत के पंजीकृत प्लॉट",
      rotationNote: "पुनर्योजी फसल चक्र: धान कटाई के बाद ढैंचा बोएं, जिससे मिट्टी में जैविक कार्बन बढ़ेगा और बैक्टीरिया नष्ट होंगे।",
    },
    india: {
      badge: "भारतीय किसानों के लिए समर्पित",
      title: "भारत के लिए निर्मित",
      subtitle: "भारत की भाषाई विविधता, मिट्टी और छोटे किसानों की जरूरतों को पूरा करने के लिए तैयार।",
      p1Title: "22+ भाषाओं की रूपरेखा",
      p1Desc: "वर्तमान में 7 प्रमुख भाषाओं में आवाज और लिखित सलाह उपलब्ध।",
      p2Title: "127 कृषि-जलवायु क्षेत्र",
      p2Desc: "ओडिशा के तटीय मैदानों से लेकर पंजाब तक स्थानीय मिट्टी और जलवायु के अनुकूल।",
      p3Title: "विविध फसल प्रणाली",
      p3Desc: "धान, गेहूं, कपास, प्याज व दलहन फसलों के लिए जैविक पद्धतियों पर केंद्रित।",
      p4Title: "AgriStack डिजिटल एकीकरण",
      p4Desc: "डिजिटल पब्लिक इंफ्रास्ट्रक्चर और KVK नेटवर्क के साथ जुड़ने में सक्षम।",
      transparencyTitle: "प्रोटोटाइप पारदर्शिता सूचना",
      transparencyText: "किसानविज़न AI को हैकाथॉन प्रोटोटाइप के रूप में प्रस्तुत किया गया है और संदर्भ डेटा सिमुलेटेड है।",
    },
    architecture: {
      badge: "सिस्टम पाइपलाइन",
      title: "किसानविज़न कैसे कार्य करता है",
      subtitle: "फोटो विश्लेषण से लेकर प्राकृतिक कृषि सलाह तक का संपूर्ण तंत्र।",
      step1Title: "किसान का इनपुट",
      step1Desc: "पत्ती की फोटो, आवाज या स्थानीय भाषा में लिखा प्रश्न।",
      step2Title: "Gemini 3.8 AI विश्लेषण",
      step2Desc: "पत्ती के धब्बों और पीलापन के कारणों की पड़ताल करता है।",
      step3Title: "मौसम व मिट्टी का मिलान",
      step3Desc: "जिले की आर्द्रता, तापमान और मिट्टी की स्थिति को जोड़ता है।",
      step4Title: "पुनर्योजी सलाहकार इंजन",
      step4Desc: "जैविक खाद, जल प्रबंधन और 7-दिवसीय योजना तैयार करता है।",
      step5Title: "कार्रवाई एवं KVK रेफरल",
      step5Desc: "स्थानीय भाषा में सलाह और निकटतम कृषि विज्ञान केंद्र से जोड़ना।",
      guardrailsTitle: "सुरक्षा एवं विश्वसनीयता नियम",
      g1Title: "झूठे दावे नहीं",
      g1Desc: "केवल फोटो से 100% बीमारी का पक्का दावा नहीं करता, बल्कि सतर्क संभावना बताता है।",
      g2Title: "हानिकारक रसायनों की मनाही",
      g2Desc: "जहरीले रसायनों के स्थान पर प्राकृतिक जैविक घोल और जल प्रबंधन को बढ़ावा देता है।",
      g3Title: "विशेषज्ञों से जुड़ाव",
      g3Desc: "फसल क्षति का खतरा होने पर तुरंत KVK या किसान कॉल सेंटर की सलाह देता है।",
    },
    footer: {
      disclaimer: "प्रोटोटाइप सूचना: पर्यावरण डेटा केवल प्रोटोटाइप प्रदर्शन हेतु है। यह आधिकारिक प्रयोगशाला जांच का विकल्प नहीं है।",
      helpline: "किसान कॉल सेंटर: 1800-180-1551 (टोल-फ्री, सुबह 6 से रात 10 बजे)",
    },
  },

  // TELUGU (తెలుగు)
  Telugu: {
    appName: "కిసాన్ విజన్ AI (KisanVision)",
    appSubtitle: "పునరుత్పాదక వ్యవసాయ మేధస్సు",
    hackathonBanner: "AI-ఆధారిత పునరుత్పాదక పంట ఆరోగ్య సలహాదారు",
    prototypeNotice: "జిల్లా వ్యవసాయ-వాతావరణ సమాచారం",
    tryDemoBtn: "⚡ డెమో చూడండి (పూరి వరి)",
    tabs: {
      diagnosis: "🌾 పంట ఆరోగ్యం & విశ్లేషణ",
      copilot: "💬 రైతు కోపైలట్ చాట్",
      overview: "📊 పొలం నిర్వహణ సమీక్ష",
      india: "🇮🇳 భారతదేశం కోసం రూపకల్పన",
      architecture: "⚙️ ఎలా పనిచేస్తుంది",
    },
    hero: {
      trackBadge: "పునరుత్పాదక వ్యవసాయ ఇంటెలిజెన్స్",
      headline: "కిసాన్ విజన్ AI",
      subheadline: "మీ పొలం. మీ భాష. సరైన నిర్ణయాలు.",
      description: "భారతదేశంలోని చిన్న, సన్నకారు రైతుల కోసం AI ఆధారిత పంట ఆరోగ్య అంచనా మరియు స్థానిక సహజ సేంద్రీయ వ్యవసాయ సలహాలు.",
      analyzeBtn: "నా పంటను పరీక్షించండి",
      demoBtn: "⚡ డెమో చూడండి (పూరి వరి)",
      tagline1: "జాగ్రత్తైన మల్టీమోడల్ AI",
      tagline2: "సేంద్రీయ వ్యవసాయ పద్ధతులు",
      tagline3: "7 భారతీయ భాషల్లో లభ్యం",
    },
    capabilities: {
      seeTitle: "చూడండి (See)",
      seeSub: "పంట ఫోటోలను విశ్లేషించండి",
      seeDesc: "ఆకుల పసుపు రంగు, ఎండిపోవడం మరియు తెగుళ్ల లక్షణాలను ఫోన్ కెమెరా ద్వారా గుర్తించండి.",
      understandTitle: "అర్థం చేసుకోండి (Understand)",
      understandSub: "భూసారం మరియు వాతావరణం",
      understandDesc: "జిల్లా నేల స్వభావం, గాలిలో తేమ మరియు ఉష్ణోగ్రతను AI విశ్లేషణతో అనుసంధానించండి.",
      actTitle: "ఆచరించండి (Act)",
      actSub: "సహజ పద్ధతుల మార్గదర్శనం",
      actDesc: "7 రోజుల ప్రణాళిక, జీవామృతం, నీటి యాజమాన్యం మరియు KVK శాస్త్రవేత్తల సలహాలు.",
    },
    primaryDemoBox: {
      badge: "లైవ్ డెమో (పూరి వరి ఆకు)",
      title: "పూరి, ఒడిశా · వరి ఆకు పసుపు రంగు తెగులు నిర్ధారణ",
      desc: "పూర్తి మల్టీమోడల్ ప్రక్రియ: ఆకు పరిశీలన + తేమ వాతావరణం + స్థానిక భాషలో వివరణ + సహజ నీటి యాజమాన్యం.",
      cropTag: "పంట: వరి",
      locTag: "ప్రాంతం: పూరి, ఒడిశా",
      langTag: "భాష: తెలుగు",
      btn: "పూరి వరి డెమోను ప్రారంభించండి",
    },
    form: {
      title: "పంట ఆరోగ్యం & మల్టీమోడల్ విశ్లేషణ",
      subtitle: "పంట లేదా ఆకు ఫోటో అప్‌లోడ్ చేయండి, మీ జిల్లాను ఎంచుకోండి, Gemini AI నుండి సలహా పొందండి.",
      step1: "1. పంట లేదా ఆకు ఛాయాచిత్రం",
      uploadText: "ఆకు లేదా పంట ఫోటోను అప్‌లోడ్ చేయండి",
      uploadSubtext: "గ్యాలరీ నుండి ఎంచుకోండి లేదా కెమెరా ఉపయోగించండి",
      changePhoto: "ఫోటో మార్చండి",
      readyBadge: "విశ్లేషణకు సిద్ధంగా ఉంది",
      step2: "2. పొలం ప్రాంతం & భాష",
      cropLabel: "పంట రకం",
      stateLabel: "రాష్ట్రం",
      districtLabel: "జిల్లా / గ్రామం",
      selectLanguageLabel: "అవుట్‌పుట్ భాషను ఎంచుకోండి",
      questionLabel: "రైతు ప్రశ్న / సమస్య",
      questionSubtext: "టైప్ చేయండి లేదా మైక్ ద్వారా మాట్లాడండి",
      questionPlaceholder: "ఈ పంట గురించి మీరు తెలుసుకోవాలనుకున్నది ఇక్కడ రాయండి...",
      micTooltip: "మైక్ నొక్కి మాట్లాడండి",
      micListening: "వింటోంది... మాట్లాడండి",
      analyzeBtn: "పంటను విశ్లేషించండి",
      analyzing: "Gemini AI ద్వారా విశ్లేషణ జరుగుతోంది...",
      noPhotoAlert: "⚠️ దయచేసి ఫోటో అప్‌లోడ్ చేయండి లేదా 'డెమో చూడండి' క్లిక్ చేయండి.",
      samplePhotoPrompt: "ఫోటో లేదా?",
      useSampleBtn: "పూరి వరి నమూనా ఫోటోను వాడండి",
      contextTitle: "స్థానిక వ్యవసాయ-వాతావరణం & నేల స్థితి",
      temp: "ఉష్ణోగ్రత",
      humidity: "గాలిలో తేమ",
      soil: "నేల రకం",
      kvk: "ప్రాంతీయ KVK",
    },
    results: {
      disclaimerTitle: "సమాచార ప్రోటోటైప్ సలహా సూచన",
      disclaimerText: "ఈ AI విశ్లేషణ రైతులకు సహాయార్థం అందించే సలహా మాత్రమే, ఇది అధికారిక ల్యాబ్ నిర్ధారణ కాదు. తీవ్రమైన సమస్యల కోసం సమీప కృషి విజ్ఞాన కేంద్రం (KVK) ను సంప్రదించండి.",
      title: "పొలం ఆరోగ్య అంచనా (Health Assessment)",
      subtitle: "ఆకు లక్షణాలు మరియు స్థానిక వ్యవసాయ వాతావరణాన్ని పరిశీలించిన Gemini AI ఫలితం.",
      newScanBtn: "మరో ఫోటో పరీక్షించండి",
      voiceSummaryTitle: "రైతు మిత్రుడి కోసం సారాంశం",
      listenBtn: "🔊 వినిపించండి (Listen)",
      stopAudioBtn: "⏹ ఆపండి (Stop)",
      toggleEnglishBtn: "ఆంగ్ల అనువాదం చూడండి",
      toggleNativeBtn: "తెలుగులో చూడండి",
      keyFocus: "ప్రధాన తెగులు సమస్య",
      cardATitle: "గమనించిన లక్షణాలు",
      cardBTitle: "సంభావ్య తెగుళ్లు & అంచనా",
      cardCTitle: "పంట ప్రమాద స్థాయి",
      cardDTitle: "ఖచ్చితత్వ స్థాయి",
      cardETitle: "వాతావరణం & నేల ప్రభావం",
      riskCalculated: "లెక్కింపబడిన ప్రమాదం",
      immediateActionsTitle: "వెంటనే చేయవలసిన పనులు",
      immediateActionsSub: "తెగులు వ్యాపించకుండా నివారించేందుకు తక్కువ ఖర్చుతో కూడిన చర్యలు.",
      regenTitle: "పునరుత్పాదక సహజ సేద్య పద్ధతులు",
      regenSub: "భూసారాన్ని పెంచి అనవసర రసాయన ఖర్చులను నివారించే పద్ధతులు.",
      benefitLabel: "నేల/దిగుబడిపై ప్రయోజనం",
      timelineTitle: "రాబోయే 7 రోజుల ప్రణాళిక",
      timelineSub: "పంట కోలుకునే విధానాన్ని గమనించడానికి దశలు.",
      expertTitle: "నిపుణులను ఎప్పుడు సంప్రదించాలి",
      thresholdLabel: "ప్రమాద పరిమితి",
      warningSignsLabel: "ముఖ్య హెచ్చరిక సంకేతాలు",
      institutionLabel: "సిఫార్సు చేయబడిన సంస్థ",
      kisanCallCenter: "కిసాన్ కాల్ సెంటర్ (అఖిల భారత)",
      kisanHours: "22 భాషల్లో అందుబాటులో ఉంది, ఉదయం 6 నుండి రాత్రి 10 వరకు.",
      askFollowUpBtn: "కోపైలట్‌ను మరిన్ని ప్రశ్నలు అడగండి →",
      followUpPromptText: "నీరు పెట్టిన తర్వాత కూడా ఆకులు పసుపుగా ఉన్నాయి, నేను ఏమి చేయాలి?",
    },
    copilot: {
      title: "రైతు కోపైలట్ చాట్",
      subtitle: "ప్రశ్నలు అడగండి. కిసాన్ విజన్ మీ పంట, ప్రాంతం మరియు తెగులు లక్షణాలను గుర్తుంచుకుంటుంది.",
      activeContext: "యాక్టివ్ పొలం సమాచారం",
      suggestionsTitle: "సూచించబడిన ప్రశ్నలు",
      inputPlaceholder: "ఎరువులు, నీటి యాజమాన్యం, కషాయాలు లేదా తెగుళ్ల గురించి అడగండి...",
      sendBtn: "పంపండి",
      thinking: "Gemini AI వ్యవసాయ సమాచారాన్ని విశ్లేషిస్తోంది...",
      welcomeMsg: "నమస్కారం రైతు మిత్రమా! నేను మీ కిసాన్ విజన్ కోపైలట్‌ను. ఈ రోజు మీ పంటకు సంబంధించి నేను ఎలా సహాయపడగలను?",
      listenBtn: "🔊 వినండి",
      muteBtn: "⏹ మ్యూట్",
    },
    overview: {
      title: "పొలం సమీక్ష & పంట ఆరోగ్య రాడార్",
      subtitle: "శాటిలైట్ సూచికలు, నేల తేమ మరియు వాతావరణ ప్రమాద సంకేతాలు.",
      tempGauge: "ఉష్ణోగ్రత",
      humidityGauge: "గాలిలో తేమ",
      soilGauge: "నేల స్వభావం",
      ndviGauge: "పంట పచ్చదనం (NDVI)",
      activeAssessmentTitle: "ప్రస్తుత పంట ఆరోగ్య స్థితి",
      activeConcern: "ప్రధాన సమస్య",
      plotsTitle: "నమోదైన పొలం ప్లాట్లు",
      rotationNote: "సేంద్రీయ పంట మార్పిడి: వరి కోత తర్వాత జీలుగు (ధైంచా) వేయడం ద్వారా సేంద్రీయ కర్బనం పెరుగుతుంది.",
    },
    india: {
      badge: "భారతీయ రైతుల కోసం ప్రత్యేకం",
      title: "భారతదేశం కోసం రూపకల్పన",
      subtitle: "భారతీయ రైతుల భాషలు, వివిధ నేలల స్వభావాలు మరియు చిన్న రైతుల అవసరాలకు తగిన రూపకల్పన.",
      p1Title: "22+ భాషల లక్ష్యం",
      p1Desc: "ప్రస్తుతం తెలుగు సహా 7 ముఖ్య భాషల్లో మాటల ద్వారా మరియు రాతపూర్వకంగా లభ్యం.",
      p2Title: "127 వ్యవసాయ-వాతావరణ మండలాలు",
      p2Desc: "తీర ప్రాంతాల నుండి పీఠభూముల వరకు స్థానిక వాతావరణానికి అనుగుణంగా సలహాలు.",
      p3Title: "వివిధ రకాల పంటలు",
      p3Desc: "వరి, పత్తి, మిరప, వేరుశనగ మరియు కూరగాయల కోసం సేంద్రీయ పద్ధతులు.",
      p4Title: "AgriStack మరియు DPI అనుసంధానం",
      p4Desc: "భారత డిజిటల్ పబ్లిక్ ఇన్‌ఫ్రాస్ట్రక్చర్ మరియు KVK నెట్‌వర్క్‌తో అనుసంధానం కాగలదు.",
      transparencyTitle: "ప్రోటోటైప్ సమాచారం",
      transparencyText: "కిసాన్ విజన్ AI అనేది హ్యాకథాన్ ప్రోటోటైప్‌గా రూపొందించబడింది.",
    },
    architecture: {
      badge: "సిస్టమ్ పైప్‌లైన్",
      title: "కిసాన్ విజన్ ఎలా పనిచేస్తుంది",
      subtitle: "ఫోటో పరిశీలన నుండి సేంద్రీయ వ్యవసాయ సలహా వరకు పూర్తి ప్రక్రియ.",
      step1Title: "రైతు సమాచారం",
      step1Desc: "ఆకు ఫోటో, మాట లేదా తెలుగులో రాసిన ప్రశ్న.",
      step2Title: "Gemini 3.8 AI విశ్లేషణ",
      step2Desc: "ఆకు మచ్చలు మరియు పసుపు రంగు కారణాలను పరిశీలిస్తుంది.",
      step3Title: "వాతావరణం & నేల అనుసంధానం",
      step3Desc: "జిల్లా తేమ మరియు నేల రకాన్ని జోడిస్తుంది.",
      step4Title: "సేంద్రీయ సలహా ఇంజిన్",
      step4Desc: "జీవామృతం, నీటి యాజమాన్యం మరియు 7 రోజుల కార్యాచరణను సిద్ధం చేస్తుంది.",
      step5Title: "ఆచరణ & KVK సంప్రదింపు",
      step5Desc: "తెలుగులో సలహా మరియు కృషి విజ్ఞాన కేంద్రంతో అనుసంధానం.",
      guardrailsTitle: "విశ్వసనీయత & భద్రతా నియమాలు",
      g1Title: "తప్పుడు హామీలు లేవు",
      g1Desc: "ఫోటో ఆధారంగా 100% పక్కా రోగనిర్ధారణ అని చెప్పదు; జాగ్రత్తతో కూడిన అంచనా మాత్రమే ఇస్తుంది.",
      g2Title: "హానికర రసాయనాల నిషేధం",
      g2Desc: "విషపూరిత రసాయన మందుల స్థానంలో జీవనియంత్రణ మరియు కషాయాలను ప్రోత్సహిస్తుంది.",
      g3Title: "శాస్త్రవేత్తలతో సంప్రదింపు",
      g3Desc: "తీవ్రమైన నష్టం వాటిల్లే అవకాశం ఉంటే KVK లేదా కిసాన్ కాల్ సెంటర్‌ను సూచిస్తుంది.",
    },
    footer: {
      disclaimer: "ప్రోటోటైప్ గమనిక: పర్యావరణ వివరాలు ప్రోటోటైప్ ప్రదర్శన కోసం మాత్రమే. ఇది ల్యాబ్ పరీక్షలకు ప్రత్యామ్నాయం కాదు.",
      helpline: "కిసాన్ కాల్ సెంటర్: 1800-180-1551 (టోల్ ఫ్రీ, ఉదయం 6 నుండి రాత్రి 10 వరకు)",
    },
  },

  // MARATHI (मराठी)
  Marathi: {
    appName: "किसानव्हिजन AI (KisanVision)",
    appSubtitle: "पुनरुत्पादक कृषी बुद्धिमत्ता",
    hackathonBanner: "AI-आधारित पुनरुत्पादक पीक आरोग्य सल्लागार",
    prototypeNotice: "जिल्हा कृषी-हवामान माहिती",
    tryDemoBtn: "⚡ डेमो पहा (पुरी भातशेती)",
    tabs: {
      diagnosis: "🌾 पीक आरोग्य व तपासणी",
      copilot: "💬 शेतकरी कोपायलट चॅट",
      overview: "📊 शेत व्यवस्थापन आढावा",
      india: "🇮🇳 भारतासाठी डिझाइन",
      architecture: "⚙️ कार्यपद्धती",
    },
    hero: {
      trackBadge: "पुनरुत्पादक शेती बुद्धिमत्ता",
      headline: "किसानव्हिजन AI",
      subheadline: "तुमची शेती. तुमची भाषा. योग्य निर्णय.",
      description: "भारतातील लहान व सीमांत शेतकऱ्यांसाठी AI-आधारित पीक आरोग्य मूल्यांकन आणि स्थानिक पुनरुत्पादक शाश्वत शेती मार्गदर्शन.",
      analyzeBtn: "माझ्या पिकाची तपासणी करा",
      demoBtn: "⚡ डेमो पहा (पुरी भातशेती)",
      tagline1: "सतर्क मल्टीमॉडल AI",
      tagline2: "पुनरुत्पादक सेंद्रिय पद्धती",
      tagline3: "मराठीसह ७ भारतीय भाषांमध्ये",
    },
    capabilities: {
      seeTitle: "पाहा (See)",
      seeSub: "पानांचा व पिकाचा फोटो तपासा",
      seeDesc: "कॅमेरा फोटोद्वारे पानांचा पिवळेपणा, करपा आणि किडींचा प्रादुर्भाव त्वरित ओळखा.",
      understandTitle: "समजून घ्या (Understand)",
      understandSub: "माती आणि हवामानाचा मेळ",
      understandDesc: "जिल्ह्यातील काळी अथवा तांबडी माती, आर्द्रता आणि तापमान AI सोबत जोडा.",
      actTitle: "कृती करा (Act)",
      actSub: "शाश्वत शेती सल्ला",
      actDesc: "७ दिवसांचे नियोजन, जीवामृत, पाणी निचरा आणि कृषी विज्ञान केंद्राशी (KVK) संपर्क.",
    },
    primaryDemoBox: {
      badge: "थेट प्रात्यक्षिक (पुरी भात पान)",
      title: "पुरी, ओडिशा · भाताच्या पानावरील पिवळेपणा तपासणी",
      desc: "संपूर्ण मल्टीमॉडल प्रक्रिया: पान तपासणी + किनारपट्टीची आर्द्रता + मराठी/स्थानिक सल्ला + सेंद्रिय जल व्यवस्थापन.",
      cropTag: "पीक: भात (धान)",
      locTag: "स्थान: पुरी, ओडिशा",
      langTag: "भाषा: मराठी",
      btn: "पुरी भातशेती डेमो उघडा",
    },
    form: {
      title: "पीक आरोग्य आणि मल्टीमॉडल निदान",
      subtitle: "पिकाचा किंवा पानाचा फोटो अपलोड करा, जिल्हा निवडा आणि Gemini AI कडून सल्ला मिळवा.",
      step1: "१. पीक किंवा पानाचे छायाचित्र",
      uploadText: "येथे पानाचा फोटो अपलोड करा",
      uploadSubtext: "फोटो ड्रॅग करा, गॅलरीतून निवडा किंवा कॅमेरा वापरा",
      changePhoto: "फोटो बदला",
      readyBadge: "फोटो विश्लेषणासाठी सज्ज",
      step2: "२. शेताचे ठिकाण व भाषा",
      cropLabel: "पिकाचा प्रकार",
      stateLabel: "राज्य",
      districtLabel: "जिल्हा / गाव",
      selectLanguageLabel: "सल्ला मिळवण्यासाठी भाषा निवडा",
      questionLabel: "शेतकऱ्याचा प्रश्न / समस्या",
      questionSubtext: "टाईप करा किंवा माइकने बोला",
      questionPlaceholder: "या पिकाविषयी तुम्हाला जे विचारायचे आहे ते येथे लिहा...",
      micTooltip: "माइक दाबून बोला",
      micListening: "ऐकत आहे... आता बोला",
      analyzeBtn: "पिकाची तपासणी करा",
      analyzing: "Gemini AI द्वारे विश्लेषण सुरू आहे...",
      noPhotoAlert: "⚠️ कृपया फोटो अपलोड करा किंवा 'डेमो पहा' वर क्लिक करा.",
      samplePhotoPrompt: "फोटो उपलब्ध नाही का?",
      useSampleBtn: "पुरी भाताचा नमुना फोटो वापरा",
      contextTitle: "स्थानिक कृषी-हवामान व माती स्थिती",
      temp: "तापमान",
      humidity: "हवेतील ओलावा (आर्द्रता)",
      soil: "मातीचा प्रकार",
      kvk: "प्रादेशिक KVK",
    },
    results: {
      disclaimerTitle: "माहितीपूर्ण प्रोटोटाइप सल्ला सूचना",
      disclaimerText: "हे AI मूल्यांकन शेतकऱ्यांच्या मदतीसाठी मार्गदर्शक साधन आहे आणि ही कोणतीही अधिकृत लॅब चाचणी नाही. गंभीर समस्येसाठी नेहमी कृषी विज्ञान केंद्र (KVK) किंवा कृषी अधिकाऱ्यांशी संपर्क साधा.",
      title: "पीक आरोग्य मूल्यांकन (Health Assessment)",
      subtitle: "पानावरील लक्षणे आणि स्थानिक हवामानावर आधारित Gemini AI चे विश्लेषण.",
      newScanBtn: "दुसरा फोटो तपासा",
      voiceSummaryTitle: "शेतकरी बांधवांसाठी मुख्य सल्ला",
      listenBtn: "🔊 ऐका (Listen)",
      stopAudioBtn: "⏹ थांबवा (Stop)",
      toggleEnglishBtn: "इंग्रजी भाषांतर पाहा",
      toggleNativeBtn: "मराठीत पाहा",
      keyFocus: "मुख्य रोग संशय",
      cardATitle: "पानावर दिसलेली लक्षणे",
      cardBTitle: "संभाव्य रोग व शक्यता",
      cardCTitle: "पीक धोका पातळी",
      cardDTitle: "सत्यता पातळी (Confidence)",
      cardETitle: "हवामान व मातीचा प्रभाव",
      riskCalculated: "मोजलेला पीक धोका",
      immediateActionsTitle: "तातडीने करावयाची कृती",
      immediateActionsSub: "रोग प्रसार रोखण्यासाठी सोपे व कमी खर्चाचे उपाय.",
      regenTitle: "पुनरुत्पादक सेंद्रिय शेती पद्धती",
      regenSub: "जमिनीची सुपीकता वाढवून अनावश्यक रासायनिक खर्च कमी करण्याचे उपाय.",
      benefitLabel: "जमीन व उत्पादनावर फायदा",
      timelineTitle: "पुढील ७ दिवसांचे नियोजन",
      timelineSub: "पिकाच्या सुधारणेवर लक्ष ठेवण्यासाठी टप्पे.",
      expertTitle: "तज्ज्ञांचा सल्ला कधी घ्यावा",
      thresholdLabel: "धोका मर्यादा",
      warningSignsLabel: "मुख्य धोक्याची लक्षणे",
      institutionLabel: "शिफारस केलेली संस्था",
      kisanCallCenter: "किसान कॉल सेंटर (अखिल भारतीय)",
      kisanHours: "२२ भाषांमध्ये उपलब्ध, सकाळी ६ ते रात्री १० वाजेपर्यंत.",
      askFollowUpBtn: "कोपायलटला आणखी प्रश्न विचारा →",
      followUpPromptText: "पाणी दिल्यानंतरही पाने पिवळी आहेत, मी काय तपासू?",
    },
    copilot: {
      title: "शेतकरी कोपायलट चॅट",
      subtitle: "प्रश्न विचारा. किसानव्हिजन तुमचे पीक, परिसर आणि रोगाची लक्षणे लक्षात ठेवून सल्ला देते.",
      activeContext: "सक्रिय शेत संदर्भ",
      suggestionsTitle: "सुचवलेले प्रश्न",
      inputPlaceholder: "खते, पाणी व्यवस्थापन, जैविक कीटकनाशके किंवा पिकाच्या काळजीबद्दल विचारा...",
      sendBtn: "पाठवा",
      thinking: "Gemini AI शेती संदर्भावर विचार करत आहे...",
      welcomeMsg: "नमस्कार शेतकरी मित्र! मी तुमचा किसानव्हिजन कोपायलट आहे. आज मी आपल्या शेतासाठी काय मदत करू शकतो?",
      listenBtn: "🔊 ऐका",
      muteBtn: "⏹ म्यूट",
    },
    overview: {
      title: "शेत व्यवस्थापन व पीक आरोग्य रडार",
      subtitle: "उपग्रह निर्देशांक, जमिनीतील ओलावा आणि हवामान धोका दर्शक.",
      tempGauge: "स्थानिक तापमान",
      humidityGauge: "हवेतील आर्द्रता",
      soilGauge: "मातीचा प्रकार",
      ndviGauge: "पीक हिरवेगारपणा (NDVI)",
      activeAssessmentTitle: "सक्रिय पीक आरोग्य स्थिती",
      activeConcern: "मुख्य समस्या",
      plotsTitle: "नोंदणीकृत शेत प्लॉट",
      rotationNote: "सेंद्रिय पीक फेरपालट: भात कापणीनंतर ढेंचा लावावा, ज्यामुळे जमिनीत सेंद्रिय कर्ब वाढेल आणि बुरशी नष्ट होईल.",
    },
    india: {
      badge: "भारतीय शेतकऱ्यांसाठी समर्पित",
      title: "भारतासाठी डिझाइन",
      subtitle: "भारतातील भाषा, विविध प्रकारच्या माती आणि लहान शेतकऱ्यांच्या गरजांसाठी सज्ज.",
      p1Title: "२२+ भाषांची रचना",
      p1Desc: "सध्या मराठीसह ७ प्रमुख भाषांमध्ये आवाजाद्वारे आणि लेखी सल्ला उपलब्ध.",
      p2Title: "१२७ कृषी-हवामान विभाग",
      p2Desc: "महाराष्ट्रातील काळ्या मातीपासून तटीय मैदानांपर्यंत अनुकूल सल्ला.",
      p3Title: "विविध पिकांसाठी योग्य",
      p3Desc: "भात, कापूस, कांदा, सोयाबीन व फळबागांसाठी सेंद्रिय पद्धती.",
      p4Title: "AgriStack डिजिटल प्रणाली",
      p4Desc: "भारताच्या डिजिटल पब्लिक इन्फ्रास्ट्रक्चर आणि KVK नेटवर्कशी जोडणीक्षम.",
      transparencyTitle: "प्रोटोटाइप स्पष्टीकरण",
      transparencyText: "किसानव्हिजन AI हे हॅकाथॉन प्रोटोटाइप म्हणून सादर केले गेले आहे.",
    },
    architecture: {
      badge: "सिस्टम पाइपलाइन",
      title: "किसानव्हिजन कसे काम करते",
      subtitle: "फोटो विश्लेषणापासून ते शाश्वत सेंद्रिय सल्ल्यापर्यंत संपूर्ण कार्यप्रणाली.",
      step1Title: "शेतकऱ्याची माहिती",
      step1Desc: "पानाचा फोटो, आवाज किंवा मराठीत लिहिलेला प्रश्न.",
      step2Title: "Gemini 3.8 AI विश्लेषण",
      step2Desc: "पानावरील डाग आणि पिवळेपणाच्या कारणांचा शोध घेते.",
      step3Title: "हवामान व मातीचे एकत्रीकरण",
      step3Desc: "जिल्ह्यातील आर्द्रता, तापमान आणि मातीची स्थिती जोडते.",
      step4Title: "सेंद्रिय सल्लागार इंजिन",
      step4Desc: "जीवामृत, पाणी नियोजन आणि ७ दिवसांचे वेळापत्रक तयार करते.",
      step5Title: "कृती व KVK मदत",
      step5Desc: "स्थानिक भाषेत सल्ला आणि जवळच्या कृषी विज्ञान केंद्राशी संपर्क.",
      guardrailsTitle: "विश्वासार्हता व सुरक्षा नियम",
      g1Title: "खोटे दावे नाहीत",
      g1Desc: "फक्त फोटोवरून १००% खात्रीशीर रोगाचा दावा करत नाही; सतर्क शक्यता दर्शवते.",
      g2Title: "घातक रसायनांना प्रतिबंध",
      g2Desc: "विषारी कीटकनाशकांऐवजी सेंद्रिय अर्क आणि जल व्यवस्थापनावर भर देते.",
      g3Title: "तज्ज्ञांशी जोडणी",
      g3Desc: "पीक नुकसानीचा धोका असल्यास तात्काळ KVK किंवा किसान कॉल सेंटरकडे पाठवते.",
    },
    footer: {
      disclaimer: "प्रोटोटाइप सूचना: पर्यावरण माहिती केवळ प्रोटोटाइप संदर्भासाठी आहे. ही प्रयोगशाळेच्या चाचणीचा पर्याय नाही.",
      helpline: "किसान कॉल सेंटर: १८००-१८०-१५५१ (टोल-फ्री, सकाळी ६ ते रात्री १०)",
    },
  },

  // TAMIL (தமிழ்)
  Tamil: {
    appName: "கிசான்விஷன் AI (KisanVision)",
    appSubtitle: "இயற்கை மீளுருவாக்க வேளாண் அறிவு",
    hackathonBanner: "AI-இயங்கும் மீளுருவாக்க பயிர் நல ஆலோசகர்",
    prototypeNotice: "மாவட்ட வேளாண்-வானிலை தகவல்",
    tryDemoBtn: "⚡ மாதிரி சோதனை (பூரி நெல்)",
    tabs: {
      diagnosis: "🌾 பயிர் நலம் & நோய் அறிதல்",
      copilot: "💬 உழவர் வழிகாட்டி சாட்",
      overview: "📊 பண்ணை மேலாண்மை",
      india: "🇮🇳 இந்தியாவிற்காக வடிவமைக்கப்பட்டது",
      architecture: "⚙️ செயல்படும் விதம்",
    },
    hero: {
      trackBadge: "மீளுருவாக்க வேளாண் நுண்ணறிவு",
      headline: "கிசான்விஷன் AI",
      subheadline: "உங்கள் நிலம். உங்கள் மொழி. சிறந்த முடிவுகள்.",
      description: "இந்தியாவின் சிறு மற்றும் குறு விவசாயிகளுக்கான AI பயிர் நல மதிப்பீடு மற்றும் உள்ளூர் இயற்கை விவசாய வழிகாட்டுதல்.",
      analyzeBtn: "என் பயிரை சோதிக்கவும்",
      demoBtn: "⚡ மாதிரி சோதனை (பூரி நெல்)",
      tagline1: "பாதுகாப்பான மல்டிமாடல் AI",
      tagline2: "இயற்கை மீளுருவாக்க முறைகள்",
      tagline3: "தமிழ் உள்ளிட்ட 7 மொழிகளில்",
    },
    capabilities: {
      seeTitle: "பாருங்கள் (See)",
      seeSub: "இலை மற்றும் பயிர் படம்",
      seeDesc: "மொபைல் கேமரா படம் மூலம் இலை மஞ்சள் நிறமாதல், கருகல் மற்றும் பூச்சி தாக்குதலைக் கண்டறியவும்.",
      understandTitle: "புரிந்துகொள்ளுங்கள் (Understand)",
      understandSub: "மண் மற்றும் வானிலை இணைப்பு",
      understandDesc: "மாவட்டத்தின் ஈரப்பதம், மண் வகை மற்றும் வெப்பநிலையை AI பகுப்பாய்வுடன் இணைக்கவும்.",
      actTitle: "செயல்படுங்கள் (Act)",
      actSub: "நடைமுறை இயற்கை விவசாயம்",
      actDesc: "7 நாள் களத் திட்டம், ஜீவாமிர்தம், மாற்று நீர் பாசனம் மற்றும் வேளாண் அறிவியல் மையம் (KVK) இணைப்பு.",
    },
    primaryDemoBox: {
      badge: "நேரடி மாதிரி (பூரி நெல் இலை)",
      title: "பூரி, ஒடிசா · நெல் இலை மஞ்சள் நிறமாதல் பரிசோதனை",
      desc: "முழு செயல்முறை: இலை சோதனை + கடற்கரை ஈரப்பதம் + எளிய தமிழ் விளக்கம் + இயற்கை நீர் மேலாண்மை.",
      cropTag: "பயிர்: நெல்",
      locTag: "இடம்: பூரி, ஒடிசா",
      langTag: "மொழி: தமிழ்",
      btn: "பூரி நெல் மாதிரியை இயக்கவும்",
    },
    form: {
      title: "பயிர் நலம் மற்றும் நோய் அறிதல்",
      subtitle: "பயிர் அல்லது இலை படத்தை பதிவேற்றி, மாவட்டத்தை தேர்வு செய்து Gemini AI ஆலோசனை பெறுங்கள்.",
      step1: "1. பயிர் அல்லது இலை புகைப்படம்",
      uploadText: "இங்கே இலை படத்தை பதிவேற்றவும்",
      uploadSubtext: "படத்தை இழுத்துவிடவும் அல்லது கேமராவைப் பயன்படுத்தவும்",
      changePhoto: "படத்தை மாற்றவும்",
      readyBadge: "பகுப்பாய்வுக்கு தயாராக உள்ளது",
      step2: "2. பண்ணை அமைவிடம் & மொழி",
      cropLabel: "பயிர் வகை",
      stateLabel: "மாநிலம்",
      districtLabel: "மாவட்டம் / கிராமம்",
      selectLanguageLabel: "முடிவுக்கான மொழியைத் தேர்வுசெய்க",
      questionLabel: "விவசாயியின் கேள்வி / சந்தேகம்",
      questionSubtext: "தட்டச்சு செய்யவும் அல்லது மைக் மூலம் பேசவும்",
      questionPlaceholder: "இந்த பயிர் பற்றி நீங்கள் கேட்க விரும்புவதை இங்கே எழுதவும்...",
      micTooltip: "மைக் அழுத்தி பேசவும்",
      micListening: "கேட்கிறது... இப்போது பேசவும்",
      analyzeBtn: "பயிரை சோதிக்கவும்",
      analyzing: "Gemini AI மூலம் பகுப்பாய்வு நடக்கிறது...",
      noPhotoAlert: "⚠️ தயவுசெய்து படத்தை பதிவேற்றவும் அல்லது 'மாதிரி சோதனை' சொடுக்கவும்.",
      samplePhotoPrompt: "படம் இல்லையா?",
      useSampleBtn: "பூரி நெல் மாதிரி படத்தை பயன்படுத்தவும்",
      contextTitle: "உள்ளூர் வேளாண்-வானிலை & மண் நிலை",
      temp: "வெப்பநிலை",
      humidity: "காற்றின் ஈரப்பதம்",
      soil: "மண் வகை",
      kvk: "வட்டார KVK மையம்",
    },
    results: {
      disclaimerTitle: "முக்கிய பாதுகாப்பு அறிவிப்பு",
      disclaimerText: "இந்த AI மதிப்பீடு விவசாயிகளுக்கு உதவும் ஒரு வழிகாட்டி மட்டுமே, இது ஆய்வக சோதனையின் மாற்று அல்ல. தீவிர பாதிப்புக்கு வேளாண் அலுவலர் அல்லது வேளாண் அறிவியல் மையத்தை (KVK) அணுகவும்.",
      title: "பண்ணை நல மதிப்பீடு (Health Assessment)",
      subtitle: "இலை அறிகுறிகள் மற்றும் உள்ளூர் வானிலை அடிப்படையிலான Gemini AI பகுப்பாய்வு.",
      newScanBtn: "மற்றொரு படத்தை சோதிக்கவும்",
      voiceSummaryTitle: "விவசாயிக்கான எளிய விளக்கம்",
      listenBtn: "🔊 கேட்டு அறியவும் (Listen)",
      stopAudioBtn: "⏹ நிறுத்தவும் (Stop)",
      toggleEnglishBtn: "ஆங்கில மொழிபெயர்ப்பைக் காட்டு",
      toggleNativeBtn: "தமிழில் காட்டு",
      keyFocus: "முக்கிய நோய் கவனம்",
      cardATitle: "கண்டறியப்பட்ட அறிகுறிகள்",
      cardBTitle: "சாத்தியமான நோய்கள்",
      cardCTitle: "பயிர் ஆபத்து நிலை",
      cardDTitle: "நம்பகத்தன்மை அளவு",
      cardETitle: "வானிலை மற்றும் மண் தாக்கம்",
      riskCalculated: "கணக்கிடப்பட்ட ஆபத்து",
      immediateActionsTitle: "உடனடியாக செய்ய வேண்டியவை",
      immediateActionsSub: "நோய் பரவுவதை தடுக்க குறைந்த செலவிலான எளிய நடவடிக்கைகள்.",
      regenTitle: "இயற்கை மீளுருவாக்க வேளாண் முறைகள்",
      regenSub: "மண் வளத்தை பெருக்கி தேவையற்ற ரசாயன செலவுகளை குறைக்கும் வழிகள்.",
      benefitLabel: "மண்/மகசூல் பயன்",
      timelineTitle: "அடுத்த 7 நாட்கள் திட்டம்",
      timelineSub: "பயிர் மீட்சியை கண்காணிக்க உதவும் நிலைகள்.",
      expertTitle: "வல்லுநர்களை எப்போது அணுக வேண்டும்",
      thresholdLabel: "ஆபத்து வரம்பு",
      warningSignsLabel: "முக்கிய எச்சரிக்கை அறிகுறிகள்",
      institutionLabel: "பரிந்துரைக்கப்பட்ட மையம்",
      kisanCallCenter: "கிசான் கால் சென்டர் (அனைத்து இந்தியா)",
      kisanHours: "22 மொழிகளில் கிடைக்கும், காலை 6 முதல் இரவு 10 மணி வரை.",
      askFollowUpBtn: "வழிகாட்டியிடம் மேலும் கேட்க →",
      followUpPromptText: "தண்ணீர் பாய்ச்சிய பிறகும் இலை மஞ்சளாக உள்ளது, நான் என்ன செய்ய வேண்டும்?",
    },
    copilot: {
      title: "உழவர் வழிகாட்டி சாட்",
      subtitle: "கேள்விகள் கேளுங்கள். கிசான்விஷன் உங்கள் பயிர், இடம் மற்றும் நோயை நினைவில் வைத்து பதிலளிக்கும்.",
      activeContext: "தற்போதைய பயிர் தகவல்",
      suggestionsTitle: "பரிந்துரைக்கப்பட்ட கேள்விகள்",
      inputPlaceholder: "உரம், நீர் மேலாண்மை அல்லது பூச்சி கட்டுப்பாடு பற்றி கேளுங்கள்...",
      sendBtn: "அனுப்பு",
      thinking: "Gemini AI விவசாய விவரங்களை ஆராய்கிறது...",
      welcomeMsg: "வணக்கம் உழவர் நண்பரே! நான் உங்கள் கிசான்விஷன் வழிகாட்டி. இன்று உங்கள் பயிருக்கு நான் எவ்வாறு உதவ முடியும்?",
      listenBtn: "🔊 கேள்",
      muteBtn: "⏹ நிறுத்து",
    },
    overview: {
      title: "பண்ணை மேலாண்மை & பயிர் நல ரேடார்",
      subtitle: "செயற்கைக்கோள் குறியீடு, மண் ஈரப்பதம் மற்றும் வானிலை ஆபத்து நிலவரம்.",
      tempGauge: "உள்ளூர் வெப்பநிலை",
      humidityGauge: "காற்றின் ஈரப்பதம்",
      soilGauge: "மண் வகை",
      ndviGauge: "பயிர் பசுமை குறியீடு (NDVI)",
      activeAssessmentTitle: "தற்போதைய பயிர் நல நிலை",
      activeConcern: "முக்கிய பிரச்சினை",
      plotsTitle: "பதிவு செய்யப்பட்ட நிலங்கள்",
      rotationNote: "பயிர் சுழற்சி: நெல் அறுவடைக்கு பின் தக்கைப்பூண்டு (Dhaincha) விதைக்கவும், இது மண்ணில் தழைச்சத்தை கூட்டும்.",
    },
    india: {
      badge: "இந்திய விவசாயிகளுக்காக",
      title: "இந்தியாவிற்காக வடிவமைக்கப்பட்டது",
      subtitle: "இந்தியாவின் மொழிகள், மண் வகைகள் மற்றும் சிறு விவசாயிகளின் தேவைக்கேற்ப உருவாக்கப்பட்டது.",
      p1Title: "22+ மொழிகள் கட்டமைப்பு",
      p1Desc: "தற்போது தமிழ் உட்பட 7 முக்கிய மொழிகளில் பேச்சு மற்றும் எழுத்து வடிவில் கிடைக்கும்.",
      p2Title: "127 வேளாண்-வானிலை மண்டலங்கள்",
      p2Desc: "தமிழக சமவெளி முதல் கடலோர பகுதிகள் வரை மண் மற்றும் காலநிலைக்கு ஏற்ற அறிவுரைகள்.",
      p3Title: "பல்வகை பயிர்கள்",
      p3Desc: "நெல், பருத்தி, தக்காளி, மக்காச்சோளம் பயிர்களுக்கான இயற்கை முறைகள்.",
      p4Title: "AgriStack டிஜிட்டல் இணைப்பு",
      p4Desc: "இந்திய டிஜிட்டல் வேளாண் கட்டமைப்பு மற்றும் KVK மையங்களுடன் இணையும் வசதி.",
      transparencyTitle: "முன்மாதிரி வெளிப்படைத்தன்மை",
      transparencyText: "கிசான்விஷன் AI ஒரு முன்மாதிரியாக வடிவமைக்கப்பட்டுள்ளது.",
    },
    architecture: {
      badge: "கட்டமைப்பு",
      title: "கிசான்விஷன் எவ்வாறு செயல்படுகிறது",
      subtitle: "புகைப்பட பகுப்பாய்வு முதல் இயற்கை விவசாய ஆலோசனை வரை முழுமையான செயல்பாடு.",
      step1Title: "விவசாயியின் உள்ளீடு",
      step1Desc: "இலை படம், குரல் அல்லது தமிழில் எழுதப்பட்ட கேள்வி.",
      step2Title: "Gemini 3.8 AI பகுப்பாய்வு",
      step2Desc: "இலை புள்ளிகள் மற்றும் மஞ்சள் நிறத்திற்கான காரணத்தை ஆராய்கிறது.",
      step3Title: "வானிலை & மண் இணைப்பு",
      step3Desc: "மாவட்டத்தின் ஈரப்பதம், வெப்பநிலை மற்றும் மண்ணை இணைக்கிறது.",
      step4Title: "இயற்கை ஆலோசனை இயந்திரம்",
      step4Desc: "ஜீவாமிர்தம், நீர் மேலாண்மை மற்றும் 7 நாள் செயல் திட்டத்தை உருவாக்குகிறது.",
      step5Title: "கள நடவடிக்கை & KVK இணைப்பு",
      step5Desc: "தமிழில் ஆலோசனை மற்றும் வேளாண் அறிவியல் மையத்துடன் இணைப்பு.",
      guardrailsTitle: "பாதுகாப்பு விதிகள்",
      g1Title: "தவறான உறுதிமொழி இல்லை",
      g1Desc: "புகைப்படம் மூலம் மட்டுமே 100% உறுதியான நோய் கண்டறிதல் என்று கூறாது.",
      g2Title: "நச்சு ரசாயனங்கள் தவிர்ப்பு",
      g2Desc: "ரசாயன மருந்துகளுக்கு பதிலாக இயற்கை மூலிகைக் கரைசல்களை பரிந்துரைக்கிறது.",
      g3Title: "நிபுணர் வழிகாட்டல்",
      g3Desc: "தீவிர பயிர் பாதிப்பு இருப்பின் உடனே KVK மையத்திற்கு பரிந்துரைக்கிறது.",
    },
    footer: {
      disclaimer: "முன்மாதிரி அறிவிப்பு: சூழல் தகவல்கள் மாதிரி பயன்பாட்டிற்கு மட்டுமே. இது ஆய்வக பரிசோதனைக்கு மாற்று அல்ல.",
      helpline: "கிசான் கால் சென்டர்: 1800-180-1551 (கட்டணமில்லா எண், காலை 6 முதல் இரவு 10 வரை)",
    },
  },

  // BENGALI (বাংলা)
  Bengali: {
    appName: "কিষাণভিশন AI (KisanVision)",
    appSubtitle: "পুনরুৎপাদনমূলক কৃষি বুদ্ধিমত্তা",
    hackathonBanner: "AI-চালিত পুনরুৎপাদনমূলক ফসল স্বাস্থ্য সহায়ক",
    prototypeNotice: "জেলা কৃষি-আবহাওয়া তথ্য",
    tryDemoBtn: "⚡ ডেমো দেখুন (পুরী ধান)",
    tabs: {
      diagnosis: "🌾 ফসলের স্বাস্থ্য ও রোগ নির্ণয়",
      copilot: "💬 কৃষক কোপাইলট চ্যাট",
      overview: "📊 খামার ব্যবস্থাপনা পর্যালোচনা",
      india: "🇮🇳 ভারতের জন্য নির্মিত",
      architecture: "⚙️ কার্যপ্রণালী",
    },
    hero: {
      trackBadge: "পুনরুৎপাদনমূলক কৃষি বুদ্ধিমত্তা",
      headline: "কিষাণভিশন AI",
      subheadline: "আপনার জমি। আপনার ভাষা। সঠিক সিদ্ধান্ত।",
      description: "ভারতের ক্ষুদ্র ও প্রান্তিক কৃষকদের জন্য AI-চালিত ফসলের স্বাস্থ্য মূল্যায়ন এবং স্থানীয় প্রাকৃতিক কৃষি পরামর্শ।",
      analyzeBtn: "আমার ফসল পরীক্ষা করুন",
      demoBtn: "⚡ ডেমো দেখুন (পুরী ধান)",
      tagline1: "সতর্ক মাল্টিমোডাল AI",
      tagline2: "প্রাকৃতিক পুনরুৎপাদনমূলক পদ্ধতি",
      tagline3: "বাংলা সহ ৭টি ভারতীয় ভাষায়",
    },
    capabilities: {
      seeTitle: "দেখুন (See)",
      seeSub: "পাতা ও ফসলের ছবি বিশ্লেষণ",
      seeDesc: "মোবাইল ক্যামেরা দিয়ে পাতার হলুদ ভাব, শুকিয়ে যাওয়া এবং পোকামাকড়ের আক্রমণ দ্রুত শনাক্ত করুন।",
      understandTitle: "বুঝুন (Understand)",
      understandSub: "মাটি ও আবহাওয়ার সংযোগ",
      understandDesc: "জেলার আর্দ্রতা, পলি বা এঁটেল মাটি এবং তাপমাত্রাকে AI বিশ্লেষণের সাথে যুক্ত করুন।",
      actTitle: "পদক্ষেপ নিন (Act)",
      actSub: "ব্যবহারিক প্রাকৃতিক নির্দেশনা",
      actDesc: "৭ দিনের পরিকল্পনা, জীবামৃত, জল নিষ্কাশন (AWD) এবং কৃষি বিজ্ঞান কেন্দ্র (KVK)-এর পরামর্শ।",
    },
    primaryDemoBox: {
      badge: "লাইভ ডেমো (পুরী ধান পাতা)",
      title: "পুরী, ওড়িশা · ধানের পাতার হলুদ রোগ মূল্যায়ন",
      desc: "সম্পূর্ণ মাল্টিমোডাল প্রক্রিয়া: পাতা পরীক্ষা + উপকূলীয় আর্দ্রতা + বাংলায় সহজ ব্যাখ্যা + প্রাকৃতিক জল ব্যবস্থাপনা।",
      cropTag: "ফসল: ধান",
      locTag: "স্থান: পুরী, ওড়িশা",
      langTag: "ভাষা: বাংলা",
      btn: "পুরী ধান ডেমো খুলুন",
    },
    form: {
      title: "ফসলের স্বাস্থ্য ও মাল্টিমোডাল রোগ নির্ণয়",
      subtitle: "ফসল বা পাতার ছবি আপলোড করুন, আপনার জেলা নির্বাচন করুন এবং Gemini AI থেকে পরামর্শ পান।",
      step1: "১. ফসল বা পাতার ছবি",
      uploadText: "এখানে পাতার ছবি আপলোড করুন",
      uploadSubtext: "ছবি টেনে আনুন, ফাইল থেকে বাছুন বা ক্যামেরা ব্যবহার করুন",
      changePhoto: "ছবি পরিবর্তন করুন",
      readyBadge: "ছবি পরীক্ষার জন্য প্রস্তুত",
      step2: "২. খামারের অবস্থান ও ভাষা",
      cropLabel: "ফসলের ধরন",
      stateLabel: "রাজ্য",
      districtLabel: "জেলা / গ্রাম",
      selectLanguageLabel: "পরামর্শের ভাষা নির্বাচন করুন",
      questionLabel: "কৃষকের প্রশ্ন / বিশেষ সমস্যা",
      questionSubtext: "টাইপ করুন অথবা মাইক দিয়ে বলুন",
      questionPlaceholder: "এই ফসল সম্পর্কে যা জানতে চান এখানে লিখুন...",
      micTooltip: "মাইক টিপে কথা বলুন",
      micListening: "শুনছি... এখন বলুন",
      analyzeBtn: "ফসল পরীক্ষা করুন",
      analyzing: "Gemini AI দ্বারা বিশ্লেষণ চলছে...",
      noPhotoAlert: "⚠️ দয়া করে ছবি আপলোড করুন অথবা 'ডেমো দেখুন' ক্লিক করুন।",
      samplePhotoPrompt: "ছবি নেই কি?",
      useSampleBtn: "পুরী ধানের নমুনা ছবি ব্যবহার করুন",
      contextTitle: "স্থানীয় কৃষি-আবহাওয়া ও মাটির অবস্থা",
      temp: "তাপমাত্রা",
      humidity: "বাতাসের আর্দ্রতা",
      soil: "মাটির ধরন",
      kvk: "আঞ্চলিক KVK কেন্দ্র",
    },
    results: {
      disclaimerTitle: "তথ্যমূলক প্রোটোটাইপ সতর্কবার্তা",
      disclaimerText: "এই AI মূল্যায়ন কৃষকদের সাহায্যের জন্য একটি তথ্যমূলক মাধ্যম এবং এটি চূড়ান্ত ল্যাব পরীক্ষার বিকল্প নয়। গুরুতর সমস্যায় স্থানীয় কৃষি বিজ্ঞান কেন্দ্র (KVK) বা কৃষি আধিকারিকের সাথে যোগাযোগ করুন।",
      title: "ফসলের স্বাস্থ্য মূল্যায়ন (Health Assessment)",
      subtitle: "পাতার লক্ষণ ও স্থানীয় আবহাওয়ার উপর ভিত্তি করে Gemini AI বিশ্লেষণ।",
      newScanBtn: "অন্য ছবি পরীক্ষা করুন",
      voiceSummaryTitle: "কৃষক বন্ধুর জন্য সহজ বার্তা",
      listenBtn: "🔊 শুনে নিন (Listen)",
      stopAudioBtn: "⏹ বন্ধ করুন (Stop)",
      toggleEnglishBtn: "ইংরেজি অনুবাদ দেখুন",
      toggleNativeBtn: "বাংলায় দেখুন",
      keyFocus: "প্রধান রোগের লক্ষণ",
      cardATitle: "পাতায় দেখা লক্ষণসমূহ",
      cardBTitle: "সম্ভাব্য রোগ ও সম্ভাবনা",
      cardCTitle: "ফসলের ঝুঁকির মাত্রা",
      cardDTitle: "নির্ভরযোগ্যতার স্তর",
      cardETitle: "আবহাওয়া ও মাটির প্রভাব",
      riskCalculated: "গণনাকৃত ফসলের ঝুঁকি",
      immediateActionsTitle: "অবিলম্বে করণীয় পদক্ষেপ",
      immediateActionsSub: "রোগ ছড়ানো রোধ করতে সহজ ও স্বল্প খরচের পদক্ষেপ।",
      regenTitle: "প্রাকৃতিক পুনরুৎপাদনমূলক কৃষি পদ্ধতি",
      regenSub: "মাটির উর্বরতা বৃদ্ধি ও অপ্রয়োজনীয় রাসায়নিক খরচ কমানোর প্রাকৃতিক উপায়।",
      benefitLabel: "মাটি ও ফলনে সুবিধা",
      timelineTitle: "আগামী ৭ দিনের কাজের পরিকল্পনা",
      timelineSub: "ফসলের উন্নতি নজরদারি করার নির্দিষ্ট ধাপ।",
      expertTitle: "কখন বিশেষজ্ঞের পরামর্শ নেবেন",
      thresholdLabel: "বিপদের মাত্রা",
      warningSignsLabel: "প্রধান সতর্কবার্তা",
      institutionLabel: "সুপারিশকৃত প্রতিষ্ঠান",
      kisanCallCenter: "কিসান কল সেন্টার (সর্বভারতীয়)",
      kisanHours: "২২টি ভাষায় উপলব্ধ, সকাল ৬:০০ থেকে রাত ১০:০০ টা পর্যন্ত।",
      askFollowUpBtn: "কোপাইলটকে আরও প্রশ্ন করুন →",
      followUpPromptText: "জল সেচের পরেও ধানের পাতা হলুদ হয়ে আছে, আমি কী করব?",
    },
    copilot: {
      title: "কৃষক কোপাইলট চ্যাট",
      subtitle: "প্রশ্ন জিজ্ঞাসা করুন। কিষাণভিশন আপনার ফসল, স্থান ও রোগ মনে রেখে উত্তর দেয়।",
      activeContext: "সক্রিয় খামার তথ্য",
      suggestionsTitle: "প্রস্তাবিত প্রশ্নাবলী",
      inputPlaceholder: "সার, জল নিষ্কাশন, জৈব কীটনাশক বা ফসল যত্ন সম্পর্কে জিজ্ঞাসা করুন...",
      sendBtn: "পাঠান",
      thinking: "Gemini AI কৃষি বিষয়ে চিন্তা করছে...",
      welcomeMsg: "নমস্কার কৃষক বন্ধু! আমি আপনার কিষাণভিশন কোপাইলট। আজ আপনার ফসলের বিষয়ে আমি কীভাবে সাহায্য করতে পারি?",
      listenBtn: "🔊 শুনুন",
      muteBtn: "⏹ মিউট",
    },
    overview: {
      title: "খামার ব্যবস্থাপনা ও স্বাস্থ্য রাডার",
      subtitle: "উপগ্রহ সূচক, মাটির আর্দ্রতা এবং আবহাওয়ার ঝুঁকির পরিমাপ।",
      tempGauge: "স্থানীয় তাপমাত্রা",
      humidityGauge: "বাতাসের আর্দ্রতা",
      soilGauge: "মাটির ধরন",
      ndviGauge: "ফসলের সবুজ সূচক (NDVI)",
      activeAssessmentTitle: "বর্তমান ফসলের স্বাস্থ্য অবস্থা",
      activeConcern: "প্রধান সমস্যা",
      plotsTitle: "নিবন্ধিত জমির প্লট",
      rotationNote: "প্রাকৃতিক ফসল আবর্তন: ধান কাটার পর ধঞ্চে চাষ করুন, যা মাটিতে জৈব কার্বন বাড়াবে এবং ক্ষতিকারক ব্যাকটিরিয়া ধ্বংস করবে।",
    },
    india: {
      badge: "ভারতীয় কৃষকদের জন্য নিবেদিত",
      title: "ভারতের জন্য নির্মিত",
      subtitle: "ভারতের ভাষাগত বৈচিত্র্য, বিভিন্ন মাটির ধরন এবং প্রান্তিক কৃষকদের প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ।",
      p1Title: "২২+ ভাষার রূপরেখা",
      p1Desc: "বর্তমানে বাংলা সহ ৭টি প্রধান ভাষায় কণ্ঠস্বর ও লিখিত পরামর্শ উপলব্ধ।",
      p2Title: "১২৭টি কৃষি-আবহাওয়া অঞ্চল",
      p2Desc: "উপকূলীয় ওড়িশা ও বাংলা থেকে পাঞ্জাব সমভূমি পর্যন্ত স্থানীয় পরামর্শ।",
      p3Title: "বহুমুখী ফসল ব্যবস্থা",
      p3Desc: "ধান, গম, পাট, সরিষা ও শাকসবজির জন্য প্রাকৃতিক সার ও পদ্ধতির উপর জোর।",
      p4Title: "AgriStack ডিজিটাল সমন্বয়",
      p4Desc: "ডিজিটাল পাবলিক ইনফ্রাস্ট্রাকচার ও KVK নেটওয়ার্কের সাথে সংযোগযোগ্য।",
      transparencyTitle: "প্রোটোটাইপ স্বচ্ছতা বিজ্ঞপ্তি",
      transparencyText: "কিষাণভিশন AI একটি হ্যাকাথন প্রোটোটাইপ হিসাবে তৈরি করা হয়েছে।",
    },
    architecture: {
      badge: "সিস্টেম পাইপলাইন",
      title: "কিষাণভিশন কীভাবে কাজ করে",
      subtitle: "ছবি পরীক্ষা থেকে শুরু করে প্রাকৃতিক কৃষি পরামর্শের সম্পূর্ণ প্রক্রিয়া।",
      step1Title: "কৃষকের তথ্য",
      step1Desc: "পাতার ছবি, কণ্ঠস্বর অথবা বাংলায় লেখা প্রশ্ন।",
      step2Title: "Gemini 3.8 AI বিশ্লেষণ",
      step2Desc: "পাতার দাগ ও হলুদ ভাব হওয়ার কারণ অনুসন্ধান করে।",
      step3Title: "আবহাওয়া ও মাটির সংযোগ",
      step3Desc: "জেলার আর্দ্রতা, তাপমাত্রা ও মাটির অবস্থাকে যুক্ত করে।",
      step4Title: "প্রাকৃতিক পরামর্শ ইঞ্জিন",
      step4Desc: "জৈব সার, জল নিষ্কাশন ও ৭ দিনের পরিকল্পনা তৈরি করে।",
      step5Title: "মাঠপর্যায়ে কাজ ও KVK সহায়তা",
      step5Desc: "বাংলায় পরামর্শ এবং নিকটস্থ কৃষি বিজ্ঞান কেন্দ্রের সাথে সংযোগ।",
      guardrailsTitle: "নির্ভরযোগ্যতা ও সুরক্ষা নীতি",
      g1Title: "মিথ্যা দাবি নেই",
      g1Desc: "শুধুমাত্র ছবি দেখে ১০০% নিশ্চিত রোগ নির্ণয় দাবি করে না; সতর্ক সম্ভাবনা জানায়।",
      g2Title: "বিষাক্ত রাসায়নিক নিষিদ্ধ",
      g2Desc: "বিষাক্ত কীটনাশকের বদলে ভেষজ নির্যাস ও প্রাকৃতিক জল ব্যবস্থাপনাকে প্রাধান্য দেয়।",
      g3Title: "বিশেষজ্ঞদের সাথে সংযোগ",
      g3Desc: "ফসল নষ্টের আশঙ্কা থাকলে তৎক্ষণাৎ KVK বা কিসান কল সেন্টারে যোগাযোগ করতে বলে।",
    },
    footer: {
      disclaimer: "প্রোটোটাইপ বিজ্ঞপ্তি: পরিবেশগত তথ্য কেবলমাত্র ডেমো প্রদর্শনের জন্য। এটি সরকারি ল্যাব পরীক্ষার বিকল্প নয়।",
      helpline: "কিসান কল সেন্টার: ১৮০০-১৮০-১৫৫১ (টোল-ফ্রি, সকাল ৬ টা থেকে রাত ১০ টা)",
    },
  },
};

export function getTranslations(lang: string): TranslationStrings {
  return TRANSLATIONS[lang] || TRANSLATIONS.English;
}
