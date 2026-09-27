import React from 'react';
import { Camera, MapPin, Sparkles, ArrowRight, Zap, CheckCircle2, Leaf, Image as ImageIcon } from 'lucide-react';
import { DEMO_SCENARIOS, DemoScenario } from '../data/demoData';

interface HowToUseGuideProps {
  language: string;
  onTryDemo: () => void;
  onScrollToUpload: () => void;
  onSelectScenario?: (scenario: DemoScenario) => void;
}

interface StepContent {
  guideTitle: string;
  guideSubtitle: string;
  step1Num: string;
  step1Title: string;
  step1Desc: string;
  step2Num: string;
  step2Title: string;
  step2Desc: string;
  step3Num: string;
  step3Title: string;
  step3Desc: string;
  demoHint: string;
  demoBtn: string;
}

const GUIDE_TRANSLATIONS: Record<string, StepContent> = {
  Odia: {
    guideTitle: "କିଷାନଭିଜନ କିପରି ବ୍ୟବହାର କରିବେ · ସରଳ ୩-ପଦକ୍ଷେପ ପ୍ରଣାଳୀ",
    guideSubtitle: "ଯେକୌଣସି ଚାଷୀ ମାତ୍ର ୩ଟି ସହଜ ପଦକ୍ଷେପରେ ଫସଲର ରୋଗ ଚିହ୍ନଟ କରି ପ୍ରାକୃତିକ ଉପଚାର ପାଇପାରିବେ:",
    step1Num: "୧",
    step1Title: "ପତ୍ରର ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ",
    step1Desc: "ରୋଗାକ୍ରାନ୍ତ ପତ୍ରର ଫଟୋ ଉଠାନ୍ତୁ କିମ୍ବା ଡେମୋ ଫଟୋ ଚୟନ କରନ୍ତୁ",
    step2Num: "୨",
    step2Title: "ଫସଲ ଓ ଜିଲ୍ଲା ନିଶ୍ଚିତ କରନ୍ତୁ",
    step2Desc: "ଫସଲ (ଧାନ, କପା) ଏବଂ ଜିଲ୍ଲା (ପୁରୀ, ଗୁଣ୍ଟୁର) ବାଛନ୍ତୁ",
    step3Num: "୩",
    step3Title: "ତୁରନ୍ତ AI ଚିକିତ୍ସା ପରାମର୍ଶ ପାଆନ୍ତୁ",
    step3Desc: "ଜୈବିକ ଉପଚାର, ୭ ଦିନିଆ ଯୋଜନା ଓ ଓଡ଼ିଆରେ ଧ୍ୱନି ପରାମର୍ଶ ଶୁଣନ୍ତୁ",
    demoHint: "ଶୀଘ୍ର ଦେଖିବାକୁ ଚାହାଁନ୍ତି କି? ଏକ କ୍ଲିକରେ ପୁରୀ ଧାନ ଡେମୋ ଚଲାନ୍ତୁ:",
    demoBtn: "⚡ ପୁରୀ ଧାନ ଡେମୋ ଦେଖନ୍ତୁ",
  },
  Hindi: {
    guideTitle: "किसानविज़न का उपयोग कैसे करें · सरल 3-चरणीय प्रक्रिया",
    guideSubtitle: "कोई भी किसान केवल 3 आसान चरणों में फसल रोग की पहचान और जैविक उपचार पा सकता है:",
    step1Num: "1",
    step1Title: "पत्ती की फोटो अपलोड करें",
    step1Desc: "रोगग्रस्त पत्ती का फोटो लें या बना-बनाया डेमो फोटो चुनें",
    step2Num: "2",
    step2Title: "फसल और जिला चुनें",
    step2Desc: "अपनी फसल (धान, कपास) और जिला (पुरी, गुंटूर) तय करें",
    step3Num: "3",
    step3Title: "तुरंत AI उपचार व सलाह पाएं",
    step3Desc: "जैविक उपचार, 7-दिवसीय कार्ययोजना और बोलकर सलाह सुनें",
    demoHint: "तुरंत अनुभव करना चाहते हैं? एक क्लिक में पुरी धान डेमो देखें:",
    demoBtn: "⚡ पुरी धान डेमो चलाएं",
  },
  Telugu: {
    guideTitle: "కిసాన్‌విజన్ ఎలా ఉపయోగించాలి · సరళమైన 3 దశల ప్రక్రియ",
    guideSubtitle: "ఏ రైతు అయినా కేవలం 3 సాధారణ దశల్లో పంట వ్యాధిని గుర్తించి సహజ చికిత్స పొందవచ్చు:",
    step1Num: "1",
    step1Title: "ఆకు ఫోటోను అప్‌లోడ్ చేయండి",
    step1Desc: "సమస్య ఉన్న ఆకు ఫోటో తీయండి లేదా డెమో ఫోటోను ఎంచుకోండి",
    step2Num: "2",
    step2Title: "పంట మరియు జిల్లాను ఎంచుకోండి",
    step2Desc: "మీ పంట (వరి, పత్తి) మరియు మీ జిల్లాను ఎంచుకోండి",
    step3Num: "3",
    step3Title: "తక్షణ AI సంరక్షణ ప్రణాళిక పొందండి",
    step3Desc: "సేంద్రీయ చికిత్స, 7 రోజుల ప్రణాళిక మరియు వాయిస్ సలహా వినండి",
    demoHint: "వెంటనే చూడాలనుకుంటున్నారా? ఒకే క్లిక్‌తో పూరి వరి డెమో చూడండి:",
    demoBtn: "⚡ పూరి వరి డెమో ప్రారంభించండి",
  },
  Marathi: {
    guideTitle: "किसानव्हिजन कसे वापरावे · सोपी 3-टप्प्यांची पद्धत",
    guideSubtitle: "कोणताही शेतकरी फक्त 3 सोप्या टप्प्यांत पिकाचे रोग ओळखून सेंद्रिय उपाय मिळवू शकतो:",
    step1Num: "1",
    step1Title: "पानाचे छायाचित्र अपलोड करा",
    step1Desc: "रोगट पानाचा फोटो काढा किंवा नमुना फोटो निवडा",
    step2Num: "2",
    step2Title: "पीक आणि जिल्हा निवडा",
    step2Desc: "तुमचे पीक (भात, कापूस) आणि जिल्हा निश्चित करा",
    step3Num: "3",
    step3Title: "झटपट AI सल्ला आणि उपचार मिळवा",
    step3Desc: "सेंद्रिय उपाय, 7 दिवसांचे नियोजन आणि आवाजात सल्ला ऐका",
    demoHint: "त्वरित पाहायचे आहे का? एका क्लिकमध्ये पुरी भात डेमो पहा:",
    demoBtn: "⚡ पुरी भात डेमो चालवा",
  },
  Tamil: {
    guideTitle: "கிசான்விஷனை எவ்வாறு பயன்படுத்துவது · 3 எளிய படிகள்",
    guideSubtitle: "எந்தவொரு விவசாயியும் 3 எளிய படிகளில் பயிர் நோயைக் கண்டறிந்து இயற்கை தீர்வைப் பெறலாம்:",
    step1Num: "1",
    step1Title: "இலை புகைப்படத்தைப் பதிவேற்றவும்",
    step1Desc: "பாதிக்கப்பட்ட இலையின் புகைப்படத்தை எடுக்கவும் அல்லது டெமோவைத் தேர்ந்தெடுக்கவும்",
    step2Num: "2",
    step2Title: "பயிர் மற்றும் மாவட்டத்தை உறுதிப்படுத்தவும்",
    step2Desc: "உங்கள் பயிர் (நெல், பருத்தி) மற்றும் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
    step3Num: "3",
    step3Title: "உடனடி AI சிகிச்சைத் திட்டத்தைப் பெறுங்கள்",
    step3Desc: "இயற்கை உரங்கள், 7 நாள் திட்டம் மற்றும் குரல் ஆலோசனையைக் கேளுங்கள்",
    demoHint: "உடனே பார்க்க வேண்டுமா? பூரி நெல் டெமோவை முயற்சிக்கவும்:",
    demoBtn: "⚡ பூரி நெல் டெமோவை இயக்கவும்",
  },
  Bengali: {
    guideTitle: "কিষাণভিশন কীভাবে ব্যবহার করবেন · সহজ ৩-ধাপের প্রক্রিয়া",
    guideSubtitle: "যেকোনো কৃষক মাত্র ৩টি সহজ ধাপে ফসলের রোগ সনাক্ত করে প্রাকৃতিক প্রতিকার পেতে পারেন:",
    step1Num: "১",
    step1Title: "পাতার ছবি আপলোড করুন",
    step1Desc: "আক্রান্ত পাতার ছবি তুলুন বা নমুনা ডেমো ছবি নির্বাচন করুন",
    step2Num: "২",
    step2Title: "ফসল ও জেলা নির্বাচন করুন",
    step2Desc: "আপনার ফসল (ধান, তুলা) এবং জেলা (পুরী) নিশ্চিত করুন",
    step3Num: "৩",
    step3Title: "তাত্ক্ষণিক AI পরামর্শ ও যত্ন নিন",
    step3Desc: "জৈব প্রতিকার, ৭ দিনের পরিকল্পনা এবং বাংলায় ভয়েস পরামর্শ শুনুন",
    demoHint: "দ্রুত দেখতে চান? এক ক্লিকে পুরী ধান ডেমো চালান:",
    demoBtn: "⚡ পুরী ধান ডেমো দেখুন",
  },
  English: {
    guideTitle: "How KisanVision AI Works · 3 Simple Steps",
    guideSubtitle: "Any farmer or visitor can diagnose crop health and get regenerative remedies in 3 easy steps:",
    step1Num: "1",
    step1Title: "Upload Leaf Photo",
    step1Desc: "Snap a clear picture of any yellowing or damaged leaf, or tap 'Try Demo'",
    step2Num: "2",
    step2Title: "Confirm Crop & Location",
    step2Desc: "Select your crop (Rice, Cotton) & district (Puri, Guntur) for local soil & climate context",
    step3Num: "3",
    step3Title: "Get Instant AI Care Plan",
    step3Desc: "Receive practical non-chemical remedies, a 7-day field timeline & audio read-aloud",
    demoHint: "Want to test instantly in 10 seconds? Tap here to run the live Puri Rice demo:",
    demoBtn: "⚡ Run 60-Second Demo",
  },
};

export const HowToUseGuide: React.FC<HowToUseGuideProps> = ({
  language,
  onTryDemo,
  onScrollToUpload,
  onSelectScenario,
}) => {
  const content = GUIDE_TRANSLATIONS[language] || GUIDE_TRANSLATIONS.English;

  return (
    <div className="bg-gradient-to-br from-[#F5FAF5] via-[#EEF7EE] to-[#E5F2E5] border-2 border-[#B8D8B8] rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
      {/* Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332] text-white text-[11px] font-bold shadow-2xs">
          <span>🌱</span>
          <span>HOW IT WORKS · 3 SIMPLE STEPS</span>
        </div>
        <h2 className="text-base sm:text-xl font-extrabold text-[#143021] tracking-tight">
          {content.guideTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#3E5C49] leading-relaxed">
          {content.guideSubtitle}
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {/* Step 1 */}
        <div 
          onClick={onScrollToUpload}
          className="bg-white rounded-xl p-4 border-2 border-[#CDE3CD] shadow-2xs hover:border-[#2D6A4F] transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center text-sm font-extrabold shadow-2xs">
                {content.step1Num}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-sm font-bold text-[#143021] group-hover:text-[#2D6A4F] transition-colors">
              {content.step1Title}
            </h3>
            <p className="text-xs text-[#52796F] leading-relaxed">
              {content.step1Desc}
            </p>
          </div>

          <div className="pt-2 text-[11px] text-[#2D6A4F] font-bold flex items-center gap-1">
            <span>Tap to upload or take photo</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Step 2 */}
        <div 
          onClick={onScrollToUpload}
          className="bg-white rounded-xl p-4 border-2 border-[#CDE3CD] shadow-2xs hover:border-[#2D6A4F] transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-sm font-extrabold shadow-2xs">
                {content.step2Num}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                <MapPin className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-sm font-bold text-[#143021] group-hover:text-[#2D6A4F] transition-colors">
              {content.step2Title}
            </h3>
            <p className="text-xs text-[#52796F] leading-relaxed">
              {content.step2Desc}
            </p>
          </div>

          <div className="pt-2 text-[11px] text-[#2D6A4F] font-bold flex items-center gap-1">
            <span>Tap to set crop & district</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl p-4 border-2 border-[#CDE3CD] shadow-2xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#EAB308] text-[#143021] flex items-center justify-center text-sm font-extrabold shadow-2xs">
                {content.step3Num}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-[#D97706]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-sm font-bold text-[#143021]">
              {content.step3Title}
            </h3>
            <p className="text-xs text-[#52796F] leading-relaxed">
              {content.step3Desc}
            </p>
          </div>

          <div className="pt-2 text-[11px] text-[#D97706] font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Multi-language Audio + 7-Day Care</span>
          </div>
        </div>
      </div>

      {/* 🌟 1-Click Interactive Sample Field Cases */}
      {onSelectScenario && (
        <div className="pt-2 border-t border-[#CCE0CC] space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-1 text-xs">
            <span className="font-bold text-[#1E3A2F] flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Tap any sample below to test immediately (No photo required):</span>
            </span>
            <span className="text-[11px] text-[#52796F]">1-Click Instant Preload</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {DEMO_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => onSelectScenario(sc)}
                className="p-2.5 rounded-xl bg-white hover:bg-[#F2FAF2] border-2 border-[#B8D8B8] hover:border-[#2D6A4F] text-left transition-all shadow-2xs group flex items-center gap-2.5 min-h-[58px]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF5EB] border border-[#C2DEC2] flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={sc.imageDataUri}
                    alt={sc.crop}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#143021]">
                    <span className="truncate group-hover:text-[#1B4332]">{sc.crop} Leaf</span>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-[#DCFCE7] px-1.5 py-0.5 rounded shrink-0">
                      {sc.language}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#52796F] truncate flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2D6A4F] shrink-0" />
                    <span>{sc.district}, {sc.state}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Instant Demo Bar */}
      <div className="bg-white/95 rounded-xl p-3 sm:p-3.5 border-2 border-[#BCE0BC] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="text-xs text-[#1E3A2F]">
          <span className="font-bold">{content.demoHint} </span>
          <span className="text-[#52796F]">Puri, Odisha · Rice leaf with tip yellowing · Odia language</span>
        </div>

        <button
          onClick={onTryDemo}
          className="w-full sm:w-auto px-4 py-2.5 bg-[#1B4332] hover:bg-[#14261B] text-white text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0 min-h-[42px]"
        >
          <Zap className="w-3.5 h-3.5 text-[#FDE047] fill-[#FDE047]" />
          <span>{content.demoBtn}</span>
        </button>
      </div>
    </div>
  );
};
