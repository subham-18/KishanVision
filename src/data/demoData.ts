/**
 * KisanVision AI - Prototype Domain Datasets & Demonstration Scenarios
 * Calibrated for the AgriN & Regenerative Agricultural Intelligence Hackathon Track
 */

export interface DemoLocation {
  district: string;
  state: string;
  soilType: string;
  climateZone: string;
  tempCelsius: number;
  humidityPct: number;
  rainfallStatus: string;
  recommendedCoverCrop: string;
  localKvk: string;
  helpline: string;
}

export interface DemoScenario {
  id: string;
  title: string;
  crop: string;
  state: string;
  district: string;
  language: string;
  question: string;
  imageThumbnailDescription: string;
  imageDataUri: string;
  soil: string;
  weatherSummary: string;
  humidity: number;
  temp: number;
  isPrimary?: boolean;
}

// Generate realistic SVG leaf illustrations for offline-resilient, crisp visual demos
function createRiceLeafSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bgPaddy" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E8EFE9"/>
        <stop offset="100%" stop-color="#D5E4D8"/>
      </linearGradient>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#2D5A27"/>
        <stop offset="50%" stop-color="#4E8732"/>
        <stop offset="85%" stop-color="#C2A83E"/>
        <stop offset="100%" stop-color="#D97724"/>
      </linearGradient>
      <linearGradient id="yellowTip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FACC15"/>
        <stop offset="60%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#9A3412"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="3" dy="5" stdDeviation="6" flood-opacity="0.18"/>
      </filter>
    </defs>
    <!-- Background Paddy Field Blur -->
    <rect width="600" height="450" fill="url(#bgPaddy)"/>
    <g opacity="0.25">
      <path d="M-50,450 Q120,200 240,450 T550,450" fill="none" stroke="#22543D" stroke-width="24"/>
      <path d="M30,450 Q200,150 360,450 T650,450" fill="none" stroke="#2F855A" stroke-width="18"/>
    </g>

    <!-- Field Sample Label Badge (Honest Prototype watermark) -->
    <g transform="translate(20, 24)">
      <rect width="210" height="30" rx="6" fill="#1C3D2B" opacity="0.9"/>
      <text x="12" y="20" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Sample: Rice Leaf (Puri, Odisha)</text>
    </g>

    <!-- Main Paddy Leaf with Visual Symptoms -->
    <g filter="url(#shadow)" transform="translate(60, 40)">
      <!-- Leaf Blade -->
      <path d="M 40,360 C 120,310 240,240 360,160 C 420,120 460,70 480,20 C 470,60 410,130 310,210 C 200,290 100,340 30,370 Z" fill="url(#leafGrad)"/>
      
      <!-- Central Midrib Vein -->
      <path d="M 35,365 C 130,310 260,230 380,150 C 440,105 470,55 480,20" fill="none" stroke="#78A65A" stroke-width="4" stroke-linecap="round"/>
      
      <!-- Secondary Parallel Veins -->
      <path d="M 120,305 C 180,265 240,225 300,185" fill="none" stroke="#689E48" stroke-width="1.5" opacity="0.7"/>
      <path d="M 200,245 C 260,205 320,160 380,115" fill="none" stroke="#689E48" stroke-width="1.5" opacity="0.7"/>
      
      <!-- Bacterial Blight Marginal Necrosis & Yellowing on Margins -->
      <path d="M 320,180 C 370,140 430,90 470,30 C 460,65 425,115 355,175 C 335,190 325,185 320,180 Z" fill="url(#yellowTip)" opacity="0.9"/>
      <path d="M 260,235 C 290,205 330,175 365,145 C 360,160 330,195 280,235 Z" fill="#EAB308" opacity="0.8"/>
      
      <!-- Dried Necrotic Lesion Tips (Brown wavy margins) -->
      <path d="M 430,70 Q 450,50 478,22 Q 460,55 435,80 Z" fill="#78350F" opacity="0.95"/>
      <path d="M 400,105 Q 420,85 435,70 Q 422,90 395,115 Z" fill="#92400E" opacity="0.85"/>
      
      <!-- Dew Drops on Leaf Surface (indicative of coastal humidity) -->
      <ellipse cx="230" cy="240" rx="5" ry="3.5" fill="#FFFFFF" opacity="0.75"/>
      <ellipse cx="231" cy="239" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.9"/>
      <ellipse cx="340" cy="165" rx="6" ry="4" fill="#FFFFFF" opacity="0.75"/>
      <ellipse cx="341" cy="164" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.9"/>
      <ellipse cx="160" cy="290" rx="4" ry="3" fill="#FFFFFF" opacity="0.6"/>
    </g>

    <!-- Inspection Annotation Callouts -->
    <g transform="translate(380, 290)">
      <rect width="180" height="64" rx="8" fill="#FFFFFF" opacity="0.95" stroke="#CBD5E1" stroke-width="1"/>
      <text x="12" y="22" fill="#9A3412" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OBSERVED SYMPTOM</text>
      <text x="12" y="38" fill="#1E293B" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Marginal Leaf Blight</text>
      <text x="12" y="52" fill="#64748B" font-family="system-ui, sans-serif" font-size="10">Yellow-orange wavy drying edge</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createCottonLeafSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bgCotton" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F1F5F9"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
      <linearGradient id="cottonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D6A4F"/>
        <stop offset="60%" stop-color="#40916C"/>
        <stop offset="100%" stop-color="#B91C1C"/>
      </linearGradient>
    </defs>
    <rect width="600" height="450" fill="url(#bgCotton)"/>
    <g transform="translate(20, 24)">
      <rect width="230" height="30" rx="6" fill="#1E3A2F" opacity="0.9"/>
      <text x="12" y="20" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Sample: Cotton Leaf (Guntur, AP)</text>
    </g>
    <!-- Palmate 3-lobed Cotton Leaf with Curl & Reddening -->
    <g transform="translate(140, 70)">
      <path d="M 160,280 C 130,220 50,200 40,130 C 35,90 75,70 110,95 C 130,110 145,140 160,110 C 175,70 180,30 220,30 C 255,30 260,70 275,110 C 290,140 305,110 325,95 C 360,70 400,90 395,130 C 385,200 305,220 275,280 Z" fill="url(#cottonGrad)"/>
      <path d="M 218,290 L 218,80" stroke="#74C69D" stroke-width="4"/>
      <path d="M 218,170 L 110,110" stroke="#74C69D" stroke-width="3"/>
      <path d="M 218,170 L 325,110" stroke="#74C69D" stroke-width="3"/>
      <!-- Curling edges highlight -->
      <path d="M 40,130 Q 30,100 70,85" stroke="#DC2626" stroke-width="3" fill="none"/>
      <path d="M 395,130 Q 405,100 365,85" stroke="#DC2626" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(360, 310)">
      <rect width="200" height="56" rx="8" fill="#FFFFFF" opacity="0.95" stroke="#CBD5E1"/>
      <text x="12" y="20" fill="#B91C1C" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OBSERVED SYMPTOM</text>
      <text x="12" y="38" fill="#1E293B" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Upward Leaf Curling & Reddening</text>
      <text x="12" y="50" fill="#64748B" font-family="system-ui, sans-serif" font-size="10">Suspected Thrips / Jassid damage</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createWheatLeafSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bgWheat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF5FF"/>
        <stop offset="100%" stop-color="#F3E8FF"/>
      </linearGradient>
      <linearGradient id="wheatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#15803D"/>
        <stop offset="100%" stop-color="#4ADE80"/>
      </linearGradient>
    </defs>
    <rect width="600" height="450" fill="url(#bgWheat)"/>
    <g transform="translate(20, 24)">
      <rect width="230" height="30" rx="6" fill="#1E293B" opacity="0.9"/>
      <text x="12" y="20" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Sample: Wheat Leaf (Ludhiana, PB)</text>
    </g>
    <!-- Long slender wheat leaf with linear yellow pustules (stripe rust) -->
    <g transform="translate(100, 60)">
      <path d="M 40,340 C 100,280 200,180 340,90 C 390,60 420,30 450,15 C 430,40 380,100 280,210 C 180,310 100,340 40,340 Z" fill="url(#wheatGrad)"/>
      <path d="M 40,340 Q 240,170 450,15" stroke="#86EFAC" stroke-width="2.5" fill="none"/>
      <!-- Yellow Rust Stripe Pustules -->
      <path d="M 220,180 L 290,135" stroke="#F59E0B" stroke-width="4" stroke-dasharray="3,3"/>
      <path d="M 200,200 L 260,160" stroke="#D97724" stroke-width="4" stroke-dasharray="4,2"/>
      <path d="M 250,160 L 320,110" stroke="#FBBF24" stroke-width="3" stroke-dasharray="2,3"/>
    </g>
    <g transform="translate(360, 310)">
      <rect width="200" height="56" rx="8" fill="#FFFFFF" opacity="0.95" stroke="#CBD5E1"/>
      <text x="12" y="20" fill="#D97706" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OBSERVED SYMPTOM</text>
      <text x="12" y="38" fill="#1E293B" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Yellow Stripe Rust Bands</text>
      <text x="12" y="50" fill="#64748B" font-family="system-ui, sans-serif" font-size="10">Puccinia striiformis fungal stripes</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Built-in Demo Scenarios for Instant 60-Second Evaluation
export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'puri_rice',
    title: 'Puri, Odisha — Rice (Primary Demo)',
    crop: 'Rice',
    state: 'Odisha',
    district: 'Puri',
    language: 'Odia',
    question: 'Why are my rice leaves turning yellow and what should I do this week?',
    imageThumbnailDescription: 'Paddy leaf with yellowing tips, dried margins, and high humidity condensation.',
    imageDataUri: createRiceLeafSvg(),
    soil: 'Coastal Alluvial / Clay Loam',
    weatherSummary: '29°C · 84% RH · Scattered Coastal Showers',
    humidity: 84,
    temp: 29,
    isPrimary: true,
  },
  {
    id: 'guntur_cotton',
    title: 'Guntur, Andhra Pradesh — Cotton',
    crop: 'Cotton',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    language: 'Telugu',
    question: 'Leaf edges are curling upwards with slight bronze reddening. What bio-spray is best?',
    imageThumbnailDescription: 'Cotton foliage showing upward curl, cup-shaped deformation, and thrips stress.',
    imageDataUri: createCottonLeafSvg(),
    soil: 'Deep Black Cotton Soil (Vertisol)',
    weatherSummary: '34°C · 62% RH · Dry Gusty Winds',
    humidity: 62,
    temp: 34,
  },
  {
    id: 'ludhiana_wheat',
    title: 'Ludhiana, Punjab — Wheat',
    crop: 'Wheat',
    state: 'Punjab',
    district: 'Ludhiana',
    language: 'Hindi',
    question: 'Is this yellow striping stripe rust or manganese nutrient deficiency?',
    imageThumbnailDescription: 'Wheat leaf showing distinct yellow-orange parallel rust stripes along veins.',
    imageDataUri: createWheatLeafSvg(),
    soil: 'Indo-Gangetic Alluvial Loam',
    weatherSummary: '19°C · 76% RH · Dense Morning Fog',
    humidity: 76,
    temp: 19,
  }
];

// District Context Database for India
export const INDIAN_DISTRICTS_DATA: Record<string, DemoLocation> = {
  Puri: {
    district: 'Puri',
    state: 'Odisha',
    soilType: 'Coastal Alluvial / Saline Loam',
    climateZone: 'East Coast Plain & Hills (Zone 11)',
    tempCelsius: 29,
    humidityPct: 84,
    rainfallStatus: 'Pre-monsoon coastal showers',
    recommendedCoverCrop: 'Sesbania aculeata (Dhaincha)',
    localKvk: 'Krishi Vigyan Kendra, Puri (OUAT)',
    helpline: '1800-180-1551 (Kisan Call Center)'
  },
  Guntur: {
    district: 'Guntur',
    state: 'Andhra Pradesh',
    soilType: 'Deep Black Cotton Soil (Vertisols)',
    climateZone: 'Southern Plateau & Hills (Zone 10)',
    tempCelsius: 34,
    humidityPct: 62,
    rainfallStatus: 'Dry inter-spell',
    recommendedCoverCrop: 'Sunnhemp (Crotalaria juncea)',
    localKvk: 'KVK Lam Farm, ANGRAU Guntur',
    helpline: '1800-425-0330'
  },
  Warangal: {
    district: 'Warangal',
    state: 'Telangana',
    soilType: 'Red Sandy Loam (Chalka)',
    climateZone: 'Southern Plateau (Zone 10)',
    tempCelsius: 33,
    humidityPct: 58,
    rainfallStatus: 'Intermittent cloudiness',
    recommendedCoverCrop: 'Cowpea (Vigna unguiculata)',
    localKvk: 'KVK Malyal, PJTSAU Warangal',
    helpline: '1800-180-1551'
  },
  Nashik: {
    district: 'Nashik',
    state: 'Maharashtra',
    soilType: 'Medium Black Loam & Basaltic',
    climateZone: 'Western Plateau & Hills (Zone 9)',
    tempCelsius: 26,
    humidityPct: 70,
    rainfallStatus: 'Light overcast drizzle',
    recommendedCoverCrop: 'Horsegram (Kulthi)',
    localKvk: 'KVK Yashwantrao Chavan, Nashik',
    helpline: '1800-233-4000'
  },
  Ludhiana: {
    district: 'Ludhiana',
    state: 'Punjab',
    soilType: 'Alluvial Loamy Sand (Inceptisol)',
    climateZone: 'Trans-Gangetic Plain (Zone 6)',
    tempCelsius: 19,
    humidityPct: 76,
    rainfallStatus: 'Cool winter dew and fog',
    recommendedCoverCrop: 'Egyptian Clover (Berseem)',
    localKvk: 'KVK PAU, Ludhiana Campus',
    helpline: '1800-180-1551'
  }
};

export const SUPPORTED_LANGUAGES = [
  { code: 'Odia', label: 'ଓଡ଼ିଆ (Odia)', native: 'ଓଡ଼ିଆ', greeting: 'ନମସ୍କାର କୃଷକ ଭାଇ' },
  { code: 'Hindi', label: 'हिंदी (Hindi)', native: 'हिंदी', greeting: 'नमस्ते किसान मित्र' },
  { code: 'Telugu', label: 'తెలుగు (Telugu)', native: 'తెలుగు', greeting: 'నమస్కారం రైతు మిత్రమా' },
  { code: 'English', label: 'English', native: 'English', greeting: 'Hello Farmer Friend' },
  { code: 'Marathi', label: 'मराठी (Marathi)', native: 'मराठी', greeting: 'नमस्कार शेतकरी मित्र' },
  { code: 'Tamil', label: 'தமிழ் (Tamil)', native: 'தமிழ்', greeting: 'வணக்கம் உழவர் நண்பரே' },
  { code: 'Bengali', label: 'বাংলা (Bengali)', native: 'বাংলা', greeting: 'নমস্কার কৃষক বন্ধু' },
];

export const LOCALIZED_AGRONOMIC_SUMMARIES: Record<string, Record<string, { native: string; english: string; primaryConcern: string }>> = {
  Rice: {
    English: {
      native: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "Suspected Bacterial Leaf Blight exacerbated by stagnant humidity and excessive nitrogen application."
    },
    Odia: {
      native: "ଆପଣଙ୍କ ଧାନ କ୍ଷେତରେ ପତ୍ରର ଧାର ଏବଂ ଅଗ୍ରଭାଗ ହଳଦିଆ ପଡ଼ି ଶୁଖିଯାଉଛି। ଏହା ପ୍ରାଥମିକ 'ଜୀବାଣୁ ଜନିତ ପତ୍ର ପୋଡ଼ା' (Bacterial Leaf Blight) କିମ୍ବା ଜମିରେ ଅତ୍ୟଧିକ ପାଣି ଜମି ରହିବା ଯୋଗୁଁ ଯବକ୍ଷାରଜାନ ଅଭାବର ଲକ୍ଷଣ ହୋଇପାରେ। ବର୍ତ୍ତମାନ ୟୁରିଆ ସାର ପକାଇବା ବନ୍ଦ କରନ୍ତୁ, ବିଲରୁ ବଳକା ପାଣି ନିଷ୍କାସନ କରନ୍ତୁ ଏବଂ ଜୀବାମୃତ କିମ୍ବା ସୁଡୋମୋନାସ୍ ସିଞ୍ଚନ କରନ୍ତୁ। ଯଦି ୨-୩ ଦିନରେ ରୋଗ ବଢ଼େ, ତୁରନ୍ତ ନିକଟସ୍ଥ କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର (KVK) ର ପରାମର୍ଶ ନିଅନ୍ତୁ।",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "ଜୀବାଣୁ ଜନିତ ପତ୍ର ପୋଡ଼ା ରୋଗ (Bacterial Leaf Blight) ଏବଂ ଜମିରେ ଅତ୍ୟଧିକ ଆର୍ଦ୍ରତା।"
    },
    Hindi: {
      native: "आपकी धान की फसल में पत्तियों के किनारे और ऊपरी सिरे पीले पड़कर सूख रहे हैं। यह शुरुआती 'जीवाणु पत्ती झुलसा' (Bacterial Leaf Blight) या खेत में अत्यधिक पानी जमाव के कारण नाइट्रोजन की कमी का लक्षण हो सकता है। फिलहाल यूरिया डालना बंद करें, खेत से अतिरिक्त पानी निकालें, और जीवामृत या स्यूडोमोनास का छिड़काव करें। यदि 2-3 दिनों में लक्षण बढ़ते हैं, तो नजदीकी कृषि विज्ञान केंद्र (KVK) से संपर्क करें।",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "जीवाणु पत्ती झुलसा (Bacterial Leaf Blight) और अत्यधिक आर्द्रता की समस्या।"
    },
    Telugu: {
      native: "మీ వరి పంటలో ఆకుల చివర్లు మరియు అంచులు పసుపు రంగులోకి మారి ఎండిపోతున్నాయి. ఇది బాక్టీరియల్ ఆకు ఎండు తెగులు (Bacterial Leaf Blight) లేదా పొలంలో ఎక్కువ నీరు నిల్వ ఉండటం వల్ల వచ్చే పోషకాల లోపం కావచ్చు. వెంటనే యూరియా వేయడం ఆపండి, పొలం నుండి అదనపు నీటిని తీసివేయండి, మరియు జీవామృతం లేదా సూడోమోనాస్ పిచికారీ చేయండి. తెగులు ఉధృతి పెరిగితే సమీపంలోని కేవీకే (KVK) వ్యవసాయ శాస్త్రవేత్తలను సంప్రదించండి.",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "బాక్టీరియల్ ఆకు ఎండు తెగులు మరియు తేమ ఒత్తిడి."
    },
    Marathi: {
      native: "तुमच्या भात पिकात पानांच्या कडा आणि टोके पिवळी पडून वाळत आहेत. हे जिवाणूजन्य करपा (Bacterial Leaf Blight) किंवा जास्त पाणी साचल्यामुळे अन्नद्रव्यांच्या कमतरतेचे लक्षण असू शकते. सध्या युरिया खताचा वापर थांबवा, शेतातील अतिरिक्त पाणी बाहेर काढा आणि जिवामृत किंवा स्युडोमोनासची फवारणी करा. लक्षणे वाढल्यास तात्काळ जवळच्या कृषी विज्ञान केंद्राशी (KVK) संपर्क साधा.",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "जिवाणूजन्य करपा आणि जादा ओलाव्यामुळे निर्माण झालेला ताण."
    },
    Tamil: {
      native: "உங்கள் நெல் பயிரில் இலைகளின் விளிம்புகள் மற்றும் நுனிகள் மஞ்சள் நிறமாக மாறி காய்ந்து வருகின்றன. இது ஆரம்பகால பாக்டீரியா இலை கருகல் நோய் (Bacterial Leaf Blight) அல்லது அதிகப்படியான நீர் தேக்கத்தால் ஏற்படும் ஊட்டச்சத்து பற்றாக்குறையாக இருக்கலாம். உடனடியாக யூரியா இடுவதை நிறுத்துங்கள், வயலில் இருந்து தேங்கிய தண்ணீரை வடியுங்கள், மற்றும் ஜீவாமிர்தம் அல்லது சூடோமோனாஸ் தெளிக்கவும். நோய் பரவினால் உடனடியாக வேளாண் அறிவியல் மையத்தை (KVK) அணுகவும்.",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "பாக்டீரியா இலை கருகல் நோய் மற்றும் அதிகப்படியான ஈரப்பத அழுத்தம்."
    },
    Bengali: {
      native: "আপনার ধান ক্ষেতে পাতার প্রান্ত এবং ডগা হলুদ হয়ে শুকিয়ে যাচ্ছে। এটি প্রাথমিক ব্যাকটেরিয়াল পাতা ঝলসানো রোগ (Bacterial Leaf Blight) অথবা জমিতে অতিরিক্ত জল জমে থাকার কারণে পুষ্টির ঘাটতির লক্ষণ হতে পারে। এখনই ইউরিয়া সার দেওয়া বন্ধ করুন, জমি থেকে অতিরিক্ত জল নিষ্কাশন করুন এবং জীবামৃত বা সিউডোমোনাস স্প্রে করুন। লক্ষণ বাড়লে নিকটস্থ কৃষি বিজ্ঞান কেন্দ্রের (KVK) পরামর্শ নিন।",
      english: "Your rice crop shows marginal yellowing and tip necrosis. This is likely early Bacterial Leaf Blight or root waterlogging stress triggered by high humidity. Immediately stop applying urea, drain stagnant ponding water, and apply fermented bio-slurry or Pseudomonas. Consult your local KVK if yellowing spreads rapidly.",
      primaryConcern: "ব্যাকটেরিয়াল পাতা ঝলসানো রোগ ও অতিরিক্ত আর্দ্রতাজনিত চাপ।"
    }
  },
  Cotton: {
    English: {
      native: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "Sucking Pest Pressure (Thrips/Aphids) causing upward leaf curling and chlorophyll loss."
    },
    Telugu: {
      native: "మీ పత్తి పంటలో ఆకులు పైకి ముడుచుకుని, ఇత్తడి రంగులోకి మారుతున్నాయి. ఇది తామర పురుగులు (థ్రిప్స్) లేదా రసం పీల్చే పురుగుల ప్రభావం మరియు తేమ కొరత వల్ల వచ్చింది. వేప గింజల కషాయం (NSKE 5%) లేదా అగ్నిఅస్త్రం పిచికారీ చేయండి, పసుపు జిగురు అట్టలు ఏర్పాటు చేయండి మరియు యూరియా తగ్గించండి.",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "రసం పీల్చే పురుగులు (థ్రిప్స్) మరియు ఆకు ముడుత తెగులు."
    },
    Hindi: {
      native: "आपकी कपास की फसल में पत्तियां ऊपर की ओर मुड़ रही हैं और हल्की लाल-भूरी हो रही हैं। यह रस चूसक कीटों (थ्रिप्स/एफिड्स) का प्रकोप है। 5% नीम बीज अर्क (NSKE) या ब्रह्मास्त्र का छिड़काव करें, पीले चिपचिपे कार्ड लगाएं और रासायनिक कीटनाशकों का अंधाधुंध उपयोग न करें।",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "रस चूसक कीटों (थ्रिप्स) का प्रकोप और पत्ती मुड़न।"
    },
    Odia: {
      native: "ଆପଣଙ୍କ କପା ଗଛରେ ପତ୍ରଗୁଡ଼ିକ ଉପରକୁ କୁଞ୍ଚିତ ହୋଇ ଲାଲ୍-ବାଦାମୀ ରଙ୍ଗ ଧରୁଛି। ଏହା ଶୋଷକ କୀଟ (ଥ୍ରିପ୍ସ ବା ଡାହାଣୀ ପୋକ) ଆକ୍ରମଣର ଲକ୍ଷଣ। ୫% ନିମ୍ବ ମଞ୍ଜି କାଢ଼ା (NSKE) କିମ୍ବା ବ୍ରହ୍ମାସ୍ତ୍ର ସିଞ୍ଚନ କରନ୍ତୁ, ହଳଦିଆ ଫାନ୍ଦ ଲଗାନ୍ତୁ ଏବଂ ଅତ୍ୟଧିକ ରାସାୟନିକ ବିଷ ପ୍ରୟୋଗ କରନ୍ତୁ ନାହିଁ।",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "ରସ ଶୋଷକ କୀଟ ଏବଂ ପତ୍ର କୁଞ୍ଚନ ସମସ୍ୟା।"
    },
    Marathi: {
      native: "तुमच्या कापूस पिकात पाने वरच्या बाजूला वळत आहेत आणि लालसर-तपकिरी होत आहेत, हे रस शोषणाऱ्या किडींचा (थ्रिप्स/मावा) प्रादुर्भाव आहे. ५% निंबोळी अर्क (NSKE) किंवा दशपर्णी अर्क फवारा, पिवळे चिकट सापळे लावा आणि अतिरिक्त रासायनिक खते टाळा.",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "रस शोषक किडींचा प्रादुर्भाव आणि पाने आकसणे."
    },
    Tamil: {
      native: "உங்கள் பருத்தி பயிரில் இலைகள் மேல்நோக்கி சுருண்டு செம்பழுப்பு நிறமாக மாறுகின்றன, இது சாறு உறிஞ்சும் பூச்சிகளின் (இலைப்பேன்/அசுவினி) தாக்குதலாகும். 5% வேப்பங்கொட்டை கரைசல் (NSKE) தெளிக்கவும், மஞ்சள் ஒட்டும் பொறிகளை நிறுவவும் மற்றும் மிதமிஞ்சிய உரங்களைத் தவிர்க்கவும்.",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "சாறு உறிஞ்சும் பூச்சிகள் மற்றும் இலை சுருட்டல்."
    },
    Bengali: {
      native: "আপনার তুলা ফসলে পাতা উপরের দিকে কোঁকড়ানো এবং লালচে-বাদামী হচ্ছে, এটি রস চোষক পোকার (থ্রিপস/জাবপোকা) আক্রমণের লক্ষণ। ৫% নিম বীজের নির্যাস (NSKE) স্প্রে করুন, হলুদ আঠালো ফাঁদ লাগান এবং অতিরিক্ত রাসায়নিক সার প্রয়োগ বন্ধ রাখুন।",
      english: "Your cotton crop is experiencing leaf curling and bronze discolouration, characteristic of sucking pest infestation (thrips/aphids) combined with moisture stress. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra, avoid high doses of synthetic chemicals, and install yellow sticky traps.",
      primaryConcern: "রস চোষক পোকার আক্রমণ ও পাতা কোঁকড়ানো।"
    }
  },
  Tomato: {
    English: {
      native: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "Early Blight (Alternaria solani) exacerbated by foliar splashing and canopy humidity."
    },
    Odia: {
      native: "ଆପଣଙ୍କ ବିଲାତି ବାଇଗଣ (ଟମାଟୋ) ଫସଲରେ ଗୋଲାକାର ବାଦାମୀ ଦାଗ ଏବଂ ତଳ ପତ୍ର ହଳଦିଆ ପଡୁଛି, ଯାହା 'ପ୍ରାରମ୍ଭିକ ପତ୍ର ପୋଡ଼ା' (Early Blight) ର ଲକ୍ଷଣ। ଉପରୁ ପାଣି ସିଞ୍ଚନ ବନ୍ଦ କରନ୍ତୁ, ରୋଗାକ୍ରାନ୍ତ ତଳ ପତ୍ର ଛିଣ୍ଡାଇ ନଷ୍ଟ କରନ୍ତୁ ଏବଂ ସୁଡୋମୋନାସ୍ ବା ଖଟା ଘୋଳଦହି କାଢ଼ା ସିଞ୍ଚନ କରନ୍ତୁ।",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "ପ୍ରାରମ୍ଭିକ ପତ୍ର ପୋଡ଼ା (Early Blight) ଏବଂ ଅତ୍ୟଧିକ ଆର୍ଦ୍ରତା।"
    },
    Hindi: {
      native: "आपकी टमाटर की फसल में पत्तियों पर गोल छल्लेदार भूरे धब्बे और निचली पत्तियों का पीलापन दिख रहा है, जो 'अगेती झुलसा' (Early Blight) का लक्षण है। ऊपर से पानी छिड़कना बंद करें, रोगग्रस्त निचली पत्तियों को तोड़कर नष्ट करें और स्यूडोमोनास या खट्टी छाछ का छिड़काव करें।",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "अगेती झुलसा (Early Blight) और पत्ती संक्रमण।"
    },
    Telugu: {
      native: "మీ టమోటా పంటలో ఆకులపై వలయాకారపు గోధుమ మచ్చలు మరియు క్రింది ఆకులు పసుపు రంగులోకి మారుతున్నాయి, ఇది ఎర్లీ బ్లైట్ (Early Blight) తెగులు లక్షణం. పైనుంచి నీరు చల్లడం ఆపండి, తెగులు సోకిన క్రింది ఆకులను తొలగించండి, మరియు సూడోమోనాస్ లేదా పుల్లటి మజ్జిగ ద్రావణం పిచికారీ చేయండి.",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "టమోటా ఎర్లీ బ్లైట్ మరియు ఆకు మచ్చల తెగులు."
    },
    Marathi: {
      native: "तुमच्या टोमॅटो पिकात पानांवर गोलाकार तपकिरी ठिपके आणि खालची पाने पिवळी पडत आहेत, हे 'लवकर येणारा करपा' (Early Blight) रोगाचे लक्षण आहे. वरून पाणी फवारणे थांबवा, प्रादुर्भाव झालेली खालची पाने काढून नष्ट करा आणि स्युडोमोनास किंवा आंबट ताकाची फवारणी करा.",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "टोमॅटो करपा रोग आणि आर्द्रता ताण."
    },
    Tamil: {
      native: "உங்கள் தக்காளி பயிரில் வட்ட வடிவ பழுப்பு நிற புள்ளிகள் மற்றும் கீழ் இலைகள் மஞ்சள் நிறமாக மாறுவது ஆரம்பகால இலை கருகல் (Early Blight) நோயின் அறிகுறியாகும். மேலே இருந்து நீர் தெளிப்பதை நிறுத்துங்கள், பாதிக்கப்பட்ட கீழ் இலைகளை அகற்றி அழிக்கவும், மற்றும் சூடோமோனாஸ் அல்லது புளித்த மோர் கரைசலைத் தெளிக்கவும்.",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "ஆரம்பகால இலை கருகல் நோய்."
    },
    Bengali: {
      native: "আপনার টমেটো গাছে পাতায় গোলাকার বাদামী দাগ এবং নিচের পাতার হলুদ বর্ণ 'আগাম ধ্বসা' (Early Blight) রোগের লক্ষণ। উপর থেকে জল ছিটানো বন্ধ করুন, রোগাক্রান্ত নিচের পাতা কেটে নষ্ট করুন এবং সিউডোমোনাস বা টক ঘোল স্প্রে করুন।",
      english: "Your tomato crop shows target-shaped brown concentric spots and lower leaf yellowing, typical of Early Blight (Alternaria solani). Avoid overhead irrigation, remove severely infected lower leaves, and spray Pseudomonas fluorescens or sour buttermilk copper bio-slurry.",
      primaryConcern: "টমেটোর আগাম ধ্বসা রোগ ও পাতায় ছোপ।"
    }
  }
};

export function getLocalizedSummary(crop: string, language: string) {
  const normalizedCrop = crop === 'Cotton' ? 'Cotton' : crop === 'Tomato' ? 'Tomato' : 'Rice';
  const cropData = LOCALIZED_AGRONOMIC_SUMMARIES[normalizedCrop] || LOCALIZED_AGRONOMIC_SUMMARIES.Rice;
  return cropData[language] || cropData.English;
}

export const CROP_OPTIONS = [
  'Rice',
  'Wheat',
  'Cotton',
  'Tomato',
  'Maize',
  'Onion',
  'Mustard',
  'Soybean',
  'Other'
];

export interface DualLanguageActionPlan {
  immediateActions: Array<{ step: number; nativeAction: string; englishAction: string; urgency: string }>;
  regenerativePractices: Array<{
    titleNative: string;
    practiceNative: string;
    benefitNative: string;
    titleEnglish: string;
    practiceEnglish: string;
    benefitEnglish: string;
  }>;
  sevenDayPlan: Array<{
    day: string;
    focusNative: string;
    actionNative: string;
    focusEnglish: string;
    actionEnglish: string;
  }>;
  expertEscalation: {
    thresholdNative: string;
    thresholdEnglish: string;
    warningSignsNative: string[];
    warningSignsEnglish: string[];
  };
}

export function getDualLanguageActionPlan(crop: string, language: string): DualLanguageActionPlan {
  const isCotton = crop === 'Cotton';
  const isTomato = crop === 'Tomato';

  // Odia
  if (language === 'Odia') {
    return {
      immediateActions: isCotton
        ? [
            { step: 1, nativeAction: "୫% ନିମ୍ବ ମଞ୍ଜି କାଢ଼ା (NSKE) କିମ୍ବା ବ୍ରହ୍ମାସ୍ତ୍ର ସିଞ୍ଚନ କରନ୍ତୁ।", englishAction: "Spray 5% Neem Seed Kernel Extract (NSKE) or fermented Agniastra.", urgency: "Today" },
            { step: 2, nativeAction: "ଏକର ପିଛା ୧୦-୧୨ଟି ହଳଦିଆ ଓ ନୀଳ ଅଠାଳିଆ ଫାନ୍ଦ ଲଗାନ୍ତୁ।", englishAction: "Install 10-12 yellow and blue sticky traps per acre to capture sucking pests.", urgency: "Today" },
            { step: 3, nativeAction: "ଅତ୍ୟଧିକ ରାସାୟନିକ ଯବକ୍ଷାରଜାନ (ୟୁରିଆ) ଦେବା ବନ୍ଦ କରନ୍ତୁ।", englishAction: "Halt excessive synthetic urea fertilizer to harden soft tissue.", urgency: "Next 24-48 Hours" }
          ]
        : isTomato
        ? [
            { step: 1, nativeAction: "ରୋଗାକ୍ରାନ୍ତ ତଳ ପତ୍ରଗୁଡ଼ିକୁ ଛିଣ୍ଡାଇ ନିଆଁରେ ପୋଡ଼ି ଦିଅନ୍ତୁ।", englishAction: "Prune and safely dispose of infected lower foliage to reduce spore load.", urgency: "Today" },
            { step: 2, nativeAction: "ପତ୍ର ଉପରେ ପାଣି ସିଞ୍ଚନ ନକରି କେବଳ ଚେର ପାଖରେ ପାଣି ଦିଅନ୍ତୁ।", englishAction: "Switch from overhead splashing to direct root-zone basin irrigation.", urgency: "Today" },
            { step: 3, nativeAction: "ସୁଡୋମୋନାସ୍ ଫ୍ଲୁଓରେସେନ୍ସ (୫ ଗ୍ରାମ୍/ଲିଟର) ସିଞ୍ଚନ କରନ୍ତୁ।", englishAction: "Spray bio-fungicide Pseudomonas fluorescens (5g/L) during late afternoon.", urgency: "Next 24-48 Hours" }
          ]
        : [
            { step: 1, nativeAction: "ବିଲରୁ ବଳକା ଜମି ରହିଥିବା ପାଣି ତୁରନ୍ତ ନିଷ୍କାସନ କରନ୍ତୁ।", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
            { step: 2, nativeAction: "ୟୁରିଆ ସାର ପକାଇବା ବନ୍ଦ ରଖନ୍ତୁ, ଯାହାଦ୍ୱାରା ରୋଗ ଆହୁରି ବଢ଼ିବ ନାହିଁ।", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
            { step: 3, nativeAction: "ତାଜା ଗୋବର-ଗୋମୂତ୍ର ଜୀବାମୃତ ଛାଣି ବିଲରେ ସିଞ୍ଚନ କରନ୍ତୁ।", englishAction: "Spray fresh filtered cow dung slurry (20kg/200L) or bio-slurry protectant.", urgency: "Next 24-48 Hours" }
          ],
      regenerativePractices: [
        {
          titleNative: "ଜୀବାମୃତ ପ୍ରାକୃତିକ ଉପଚାର",
          practiceNative: "ଦେଶୀ ଗାଈର ଗୋବର, ଗୋମୂତ୍ର, ବେସନ ଓ ଗୁଡ଼ର କିଣ୍ୱିତ ମିଶ୍ରଣ ପ୍ରୟୋଗ।",
          benefitNative: "ମାଟିର ଜୈବିକ ଉର୍ବରତା ବୃଦ୍ଧି କରେ ଏବଂ ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତି ବଢ଼ାଏ।",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        },
        {
          titleNative: "ଜୈବିକ ପ୍ରତିରକ୍ଷା ସିଞ୍ଚନ (ସୁଡୋମୋନାସ୍ / ଟ୍ରାଇକୋଡର୍ମା)",
          practiceNative: "ଉପକାରୀ ଜୀବାଣୁ ଫସଲ ଉପରେ ସିଞ୍ଚନ କରି ପତ୍ରର କବଚ ତିଆରି କରନ୍ତୁ।",
          benefitNative: "ବିଷାକ୍ତ କୀଟନାଶକ ବିନା ରୋଗ ସଂକ୍ରମଣକୁ ୯୦% ରୋକିଥାଏ।",
          titleEnglish: "Microbial Antagonist Bio-Shield",
          practiceEnglish: "Foliar spray of beneficial bacteria (Pseudomonas or Trichoderma viride).",
          benefitEnglish: "Establishes living bio-barrier that outcompetes fungal and bacterial blights."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "ନିଷ୍କାସନ ଓ ନିରୀକ୍ଷଣ", actionNative: "ବନ୍ଧ କାଟି ବିଲରୁ ଅତିରିକ୍ତ ପାଣି ବାହାର କରନ୍ତୁ।", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "ପତ୍ର ଯାଞ୍ଚ", actionNative: "ସକାଳ ଶିଶିର ସମୟରେ ପତ୍ରର ତଳପାଖ କୀଟ କିମ୍ବା କ୍ଷତ ଯାଞ୍ଚ କରନ୍ତୁ।", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "ଜୈବିକ କବଚ ପ୍ରୟୋଗ", actionNative: "ନିମ୍ବ ଅର୍କ କିମ୍ବା ଖଟା ଘୋଳଦହି ଛାଣି ପତ୍ରରେ ସିଞ୍ଚନ କରନ୍ତୁ।", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "ନୂଆ ପତ୍ର ନିରୂପଣ", actionNative: "ନୂତନ ଭାବେ ଗଜା ହୋଇଥିବା ପତ୍ରର ସବୁଜତା ପରୀକ୍ଷା କରନ୍ତୁ।", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "ଯଦି ୭୨ ଘଣ୍ଟା ମଧ୍ୟରେ ଫସଲର ୩୦% ରୁ ଅଧିକ ଅଂଶ ହଳଦିଆ ହୋଇ ଶୁଖିଯାଏ।",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["ପତ୍ରର ଧାରରୁ ଧଳା କ୍ଷୀର ପରି ତରଳ ବାହାରିବା", "ପୂରା ଗୁଛ ଶୁଖି ତଳେ ଢଳି ପଡ଼ିବା", "ଚେର କଳା ପଡ଼ି ଦୁର୍ଗନ୍ଧ ହେବା"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // Hindi
  if (language === 'Hindi') {
    return {
      immediateActions: isCotton
        ? [
            { step: 1, nativeAction: "5% नीम बीज अर्क (NSKE) या ब्रह्मास्त्र का तुरंत छिड़काव करें।", englishAction: "Spray 5% Neem Seed Kernel Extract (NSKE) or fermented bio-extract.", urgency: "Today" },
            { step: 2, nativeAction: "प्रति एकड़ 10-12 पीले और नीले चिपचिपे कार्ड खेत में लगाएं।", englishAction: "Install 10-12 yellow and blue sticky traps per acre to capture sucking pests.", urgency: "Today" },
            { step: 3, nativeAction: "रासायनिक यूरिया का प्रयोग रोकें ताकि पत्तियां कोमल न रहें।", englishAction: "Halt excessive synthetic urea fertilizer to harden soft tissue.", urgency: "Next 24-48 Hours" }
          ]
        : isTomato
        ? [
            { step: 1, nativeAction: "संक्रमित निचली पत्तियों को तोड़कर खेत से दूर जलाएं।", englishAction: "Prune and safely dispose of infected lower foliage to reduce spore load.", urgency: "Today" },
            { step: 2, nativeAction: "पौधों के ऊपर से पानी छिड़कना बंद करें, केवल जड़ों में पानी दें।", englishAction: "Switch from overhead splashing to direct root-zone basin irrigation.", urgency: "Today" },
            { step: 3, nativeAction: "स्यूडोमोनास फ्लोरोसेंस या खट्टी छाछ का छिड़काव करें।", englishAction: "Spray bio-fungicide Pseudomonas fluorescens (5g/L) during late afternoon.", urgency: "Next 24-48 Hours" }
          ]
        : [
            { step: 1, nativeAction: "खेत से अतिरिक्त भरा हुआ पानी तुरंत बाहर निकालें।", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
            { step: 2, nativeAction: "यूरिया का बुरकाव रोकें जिससे बीमारी और न फैले।", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
            { step: 3, nativeAction: "ताजा जीवामृत या स्यूडोमोनास बायो-कंट्रोल का छिड़काव करें।", englishAction: "Spray fresh filtered cow dung slurry (20kg/200L) or bio-slurry protectant.", urgency: "Next 24-48 Hours" }
          ],
      regenerativePractices: [
        {
          titleNative: "जीवामृत प्राकृतिक उपचार",
          practiceNative: "देसी गाय के गोबर, गोमूत्र, गुड़ और बेसन के किण्वित घोल का उपयोग।",
          benefitNative: "मिट्टी के लाभकारी सूक्ष्मजीवों को बढ़ाता है और प्राकृतिक रोग प्रतिरोधक क्षमता देता है।",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        },
        {
          titleNative: "जैव-सुरक्षा कवच (स्यूडोमोनास / ट्राइकोडर्मा)",
          practiceNative: "लाभकारी सूक्ष्म जीवाणुओं का पर्णीय छिड़काव कर प्राकृतिक सुरक्षा बनाएं।",
          benefitNative: "हानिकारक रसायनों के बिना फफूंद और जीवाणु संक्रमण को रोकता है।",
          titleEnglish: "Microbial Antagonist Bio-Shield",
          practiceEnglish: "Foliar spray of beneficial bacteria (Pseudomonas or Trichoderma viride).",
          benefitEnglish: "Establishes living bio-barrier that outcompetes fungal and bacterial blights."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "जल निकासी व निरीक्षण", actionNative: "खेत की मेड़ काटकर ठहरा हुआ पानी बाहर निकालें।", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "पत्ती परीक्षण", actionNative: "सुबह की ओस में पत्तियों की निचली सतह पर रस चूसक कीटों की जांच करें।", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "जैव-रक्षा छिड़काव", actionNative: "नीम का काढ़ा या जैविक कवकनाशी का छिड़काव करें।", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "नई पत्तियों की स्थिति", actionNative: "नई निकल रही पत्तियों की हरी रंगत और विकास की जांच करें।", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "यदि 72 घंटों के भीतर 30% से अधिक पौधे पीले होकर सूखने लगें।",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["पत्तियों के किनारों पर दूधिया चिपचिपा पदार्थ दिखना", "पूरे पौधे का अचानक मुरझाना", "जड़ों का काला पड़ना और बदबू आना"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // Telugu
  if (language === 'Telugu') {
    return {
      immediateActions: [
        { step: 1, nativeAction: "పొలంలో నిలిచి ఉన్న అదనపు నీటిని వెంటనే బయటకు పంపండి.", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
        { step: 2, nativeAction: "యూరియా లేదా రసాయన ఎరువుల వాడకాన్ని తక్షణమే నిలిపివేయండి.", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
        { step: 3, nativeAction: "తాజా జీవామృతం లేదా సూడోమోనాస్ (లీటరుకు 5 గ్రాములు) పిచికారీ చేయండి.", englishAction: "Spray fresh filtered cow dung slurry or bio-control Pseudomonas.", urgency: "Next 24-48 Hours" }
      ],
      regenerativePractices: [
        {
          titleNative: "జీవామృతం సేంద్రీయ పోషణ",
          practiceNative: "ఆవు పేడ, మూత్రం, బెల్లం మరియు పిండితో తయారుచేసిన ద్రావణం వినియోగం.",
          benefitNative: "నేలలో సూక్ష్మజీవులను పెంచి సహజ రోగనిరోధక శక్తిని పెంచుతుంది.",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "నీటి తొలగింపు", actionNative: "పొలం గట్ల ద్వారా నిలిచిన నీటిని తీసివేయండి.", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "ఆకుల పరిశీలన", actionNative: "ఉదయం మంచు వేళ ఆకుల అడుగున తెగులును గమనించండి.", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "వేప కషాయం స్ప్రే", actionNative: "వేప గింజల కషాయం లేదా జీవ శిలీంద్రనాశిని పిచికారీ చేయండి.", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "కొత్త చిగుర్ల పరీక్ష", actionNative: "కొత్తగా వచ్చిన ఆకులు ఆరోగ్యంగా ఉన్నాయో లేదో తనిఖీ చేయండి.", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "72 గంటల్లో 30% కంటే ఎక్కువ పంటకు తెగులు వ్యాపిస్తే.",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["ఆకుల అంచులపై జిగురు లాంటి ద్రవం కారడం", "మొక్కలు అకస్మాత్తుగా వాడిపోవడం", "వేర్లు కుళ్ళిపోవడం"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // Marathi
  if (language === 'Marathi') {
    return {
      immediateActions: [
        { step: 1, nativeAction: "शेतात साचलेले अतिरिक्त पाणी तात्काळ चर काढून बाहेर काढा.", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
        { step: 2, nativeAction: "रासायनिक युरिया खताचा वापर त्वरित थांबवा.", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
        { step: 3, nativeAction: "ताजे गाळलेले जीवामृत किंवा स्युडोमोनासची फवारणी करा.", englishAction: "Spray fresh filtered cow dung slurry or bio-control Pseudomonas.", urgency: "Next 24-48 Hours" }
      ],
      regenerativePractices: [
        {
          titleNative: "जीवामृत नैसर्गिक संवर्धन",
          practiceNative: "देशी गायीचे शेण, गोमूत्र, गूळ आणि डाळीच्या पिठाचे किण्वित द्रावण वापरा.",
          benefitNative: "जमिनीतील जिवाणू वाढवून पिकाची प्रतिकारशक्ती मजबूत करते.",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "पाणी निचरा", actionNative: "बांध फोडून साचलेले पाणी शेतातून बाहेर काढा.", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "सकाळची पाहणी", actionNative: "दव असताना पानांच्या खालच्या बाजूला किडींची तपासणी करा.", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "जैविक फवारणी", actionNative: "५% निंबोळी अर्क किंवा दशपर्णी अर्काची फवारणी करा.", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "नवीन फुटवे", actionNative: "नवीन आलेल्या पानांचा हिरवेगारपणा आणि वाढ तपासा.", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "जर ७२ तासांत ३०% पेक्षा जास्त पिकावर रोगाचा प्रादुर्भाव वाढला.",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["पानांच्या कडेवर चिकट स्त्राव दिसणे", "झाडे अचानक सुकणे किंवा कोलमडणे", "मुळे काळी पडून कुजणे"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // Tamil
  if (language === 'Tamil') {
    return {
      immediateActions: [
        { step: 1, nativeAction: "வயலில் தேங்கியுள்ள அதிகப்படியான தண்ணீரை உடனே வடிக்கவும்.", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
        { step: 2, nativeAction: "இரசாயன யூரியா உரம் இடுவதை உடனடியாக நிறுத்துங்கள்.", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
        { step: 3, nativeAction: "ஜீவாமிர்தம் அல்லது சூடோமோனாஸ் கரைசலைத் தெளிக்கவும்.", englishAction: "Spray fresh filtered cow dung slurry or bio-control Pseudomonas.", urgency: "Next 24-48 Hours" }
      ],
      regenerativePractices: [
        {
          titleNative: "ஜீவாமிர்த இயற்கை உரம்",
          practiceNative: "நாட்டு மாட்டு சாணம், கோமியம், வெல்லம் கலந்த நொதித்த கரைசல்.",
          benefitNative: "மண்ணின் நுண்ணுயிர்களைப் பெருக்கி நோய் எதிர்ப்புத் திறனைத் தரும்.",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "நீர் வடிகால்", actionNative: "வரப்புகளை வெட்டி தேங்கிய தண்ணீரை வெளியேற்றவும்.", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "இலை ஆய்வு", actionNative: "காலை பனி நேரத்தில் இலையின் அடிப்பகுதியை ஆய்வு செய்யுங்கள்.", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "வேப்பங்கொட்டை தெளிப்பு", actionNative: "5% வேப்பங்கொட்டை கரைசல் அல்லது இயற்கை பூஞ்சாணக்கொல்லி தெளிக்கவும்.", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "புதிய தளிர்கள்", actionNative: "புதிதாக வெளிவரும் தளிர்களின் பச்சை நிறத்தை உறுதி செய்யுங்கள்.", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "72 மணி நேரத்தில் 30% க்கும் அதிகமான பயிரில் நோய் பரவினால்.",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["இலை விளிம்புகளில் பாக்டீரியா திரவம் வழிதல்", "பயிர்கள் வேகமாக வாடுதல்", "வேர்கள் அழுகி துர்நாற்றம் வீசுதல்"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // Bengali
  if (language === 'Bengali') {
    return {
      immediateActions: [
        { step: 1, nativeAction: "জমি থেকে অতিরিক্ত জমে থাকা জল অবিলম্বে নিষ্কাশন করুন।", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
        { step: 2, nativeAction: "রাসায়নিক ইউরিয়া সারের ব্যবহার এখনই স্থগিত রাখুন।", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
        { step: 3, nativeAction: "তাজা জীবামৃত বা সিউডোমোনাস দ্রবণ গাছে স্প্রে করুন।", englishAction: "Spray fresh filtered cow dung slurry or bio-control Pseudomonas.", urgency: "Next 24-48 Hours" }
      ],
      regenerativePractices: [
        {
          titleNative: "জীবামৃত প্রাকৃতিক পুষ্টি",
          practiceNative: "দেশি গরুর গোবর, গোমূত্র, গুড় ও বেসনের গাঁজানো দ্রবণ ব্যবহার।",
          benefitNative: "মাটির উপকারী জীবাণু বাড়ায় এবং প্রাকৃতিক রোগ প্রতিরোধ শক্তি জোগায়।",
          titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
          practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
          benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
        }
      ],
      sevenDayPlan: [
        { day: "Day 1 (Today)", focusNative: "জল নিষ্কাশন", actionNative: "আইল কেটে জমির অতিরিক্ত জল বের করে দিন।", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
        { day: "+2 Days", focusNative: "পাতা পরীক্ষা", actionNative: "সকালের শিশির ভেজা পাতায় পোকা বা রোগের লক্ষণ পরীক্ষা করুন।", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
        { day: "+4 Days", focusNative: "জৈব স্প্রে", actionNative: "৫% নিম বীজের ক্বাথ বা জৈব ছত্রাকনাশক স্প্রে করুন।", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
        { day: "+7 Days", focusNative: "নতুন পাতার বৃদ্ধি", actionNative: "নতুন কুঁড়ি ও পাতার সতেজতা ও গাঢ় সবুজ রঙ লক্ষ্য করুন।", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
      ],
      expertEscalation: {
        thresholdNative: "যদি ৭২ ঘণ্টার মধ্যে ৩০% এর বেশি জমিতে লক্ষণ ছড়িয়ে পড়ে।",
        thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
        warningSignsNative: ["পাতার কিনারা দিয়ে ব্যাকটেরিয়াল রস বের হওয়া", "গাছ দ্রুত শুকিয়ে মাটিতে শুয়ে পড়া", "শিকড় পচে দুর্গন্ধ হওয়া"],
        warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
      }
    };
  }

  // English (Default)
  return {
    immediateActions: isCotton
      ? [
          { step: 1, nativeAction: "Spray 5% Neem Seed Kernel Extract (NSKE) or fermented Agniastra.", englishAction: "Spray 5% Neem Seed Kernel Extract (NSKE) or fermented Agniastra.", urgency: "Today" },
          { step: 2, nativeAction: "Install 10-12 yellow and blue sticky traps per acre to monitor sucking pests.", englishAction: "Install 10-12 yellow and blue sticky traps per acre to monitor sucking pests.", urgency: "Today" },
          { step: 3, nativeAction: "Halt excessive synthetic urea fertilizer to harden soft foliage tissue.", englishAction: "Halt excessive synthetic urea fertilizer to harden soft foliage tissue.", urgency: "Next 24-48 Hours" }
        ]
      : isTomato
      ? [
          { step: 1, nativeAction: "Prune and safely dispose of infected lower foliage to reduce spore load.", englishAction: "Prune and safely dispose of infected lower foliage to reduce spore load.", urgency: "Today" },
          { step: 2, nativeAction: "Switch from overhead splashing to direct root-zone basin irrigation.", englishAction: "Switch from overhead splashing to direct root-zone basin irrigation.", urgency: "Today" },
          { step: 3, nativeAction: "Spray bio-fungicide Pseudomonas fluorescens (5g/L) during late afternoon.", englishAction: "Spray bio-fungicide Pseudomonas fluorescens (5g/L) during late afternoon.", urgency: "Next 24-48 Hours" }
        ]
      : [
          { step: 1, nativeAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", englishAction: "Drain stagnant standing water immediately to aerate root rhizosphere.", urgency: "Today" },
          { step: 2, nativeAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", englishAction: "Halt synthetic urea top-dressing to prevent succulent tissue vulnerability.", urgency: "Today" },
          { step: 3, nativeAction: "Spray fresh filtered cow dung slurry (20kg/200L) or bio-slurry protectant.", englishAction: "Spray fresh filtered cow dung slurry (20kg/200L) or bio-slurry protectant.", urgency: "Next 24-48 Hours" }
        ],
    regenerativePractices: [
      {
        titleNative: "Fermented Bio-Stimulant (Jeevamrit)",
        practiceNative: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
        benefitNative: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi.",
        titleEnglish: "Fermented Bio-Stimulant (Jeevamrit)",
        practiceEnglish: "Apply fermented slurry of indigenous cow dung, urine, jaggery and pulse flour.",
        benefitEnglish: "Rebuilds rhizosphere microbiome and suppresses root zone pathogenic fungi."
      },
      {
        titleNative: "Microbial Antagonist Bio-Shield",
        practiceNative: "Foliar spray of beneficial bacteria (Pseudomonas or Trichoderma viride).",
        benefitNative: "Establishes living bio-barrier that outcompetes fungal and bacterial blights.",
        titleEnglish: "Microbial Antagonist Bio-Shield",
        practiceEnglish: "Foliar spray of beneficial bacteria (Pseudomonas or Trichoderma viride).",
        benefitEnglish: "Establishes living bio-barrier that outcompetes fungal and bacterial blights."
      }
    ],
    sevenDayPlan: [
      { day: "Day 1 (Today)", focusNative: "Drainage & Initial Check", actionNative: "Open field bund drainage cuts to let standing water recede.", focusEnglish: "Drainage & Initial Check", actionEnglish: "Open field bund drainage cuts to let standing water recede." },
      { day: "+2 Days", focusNative: "Dew-Hour Inspection", actionNative: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips.", focusEnglish: "Dew-Hour Inspection", actionEnglish: "Examine leaf undersides at morning dew for milky bacterial ooze or thrips." },
      { day: "+4 Days", focusNative: "Bio-Shield Spray", actionNative: "Spray fermented neem seed extract or bio-protective foliar filtrate.", focusEnglish: "Bio-Shield Spray", actionEnglish: "Spray fermented neem seed extract or bio-protective foliar filtrate." },
      { day: "+7 Days", focusNative: "Vigor Assessment", actionNative: "Inspect newly emerged crown tillers or shoots for dark green healthy growth.", focusEnglish: "Vigor Assessment", actionEnglish: "Inspect newly emerged crown tillers or shoots for dark green healthy growth." }
    ],
    expertEscalation: {
      thresholdNative: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
      thresholdEnglish: "If foliar damage spreads to >30% of canopy within 72 hours despite aeration.",
      warningSignsNative: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"],
      warningSignsEnglish: ["Milky bacterial exudate crusting on margins", "Rapid wilting and canopy lodging", "Dark, foul-smelling root rot"]
    }
  };
}
