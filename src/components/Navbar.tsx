import React from 'react';
import { Sprout, Globe, Zap, ShieldAlert } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/demoData';
import { TranslationStrings } from '../locales/translations';

interface NavbarProps {
  t: TranslationStrings;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  onTryDemo: () => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  currentLanguage,
  onLanguageChange,
  onTryDemo,
  activeTab,
  setActiveTab,
}) => {
  const getGuideLabel = () => {
    switch (currentLanguage) {
      case 'Odia': return '📖 ବ୍ୟବହାର ପ୍ରଣାଳୀ';
      case 'Hindi': return '📖 उपयोग विधि';
      case 'Telugu': return '📖 ఎలా ఉపయోగించాలి';
      case 'Marathi': return '📖 वापर मार्गदर्शक';
      case 'Tamil': return '📖 வழிகாட்டி';
      case 'Bengali': return '📖 নির্দেশিকা';
      default: return '📖 How to Use';
    }
  };

  const tabsList = [
    { id: 'diagnosis', label: t.tabs.diagnosis },
    { id: 'guide', label: getGuideLabel() },
    { id: 'copilot', label: t.tabs.copilot },
    { id: 'overview', label: t.tabs.overview },
    { id: 'architecture', label: t.tabs.architecture },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E3E8E3] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group shrink-0"
            onClick={() => setActiveTab('diagnosis')}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1B4332] flex items-center justify-center shadow-xs text-white group-hover:bg-[#2D6A4F] transition-colors">
              <Sprout className="w-4 h-4 sm:w-6 sm:h-6 text-[#A7F3D0]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-lg font-black tracking-tight text-[#143021] truncate max-w-[130px] sm:max-w-none">{t.appName}</span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#DCFCE7] text-[#166534] rounded">
                  Copilot
                </span>
              </div>
              <p className="text-[10px] text-[#4F6D59] font-medium leading-none hidden md:block">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {tabsList.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all min-h-[40px] flex items-center ${
                  activeTab === tab.id
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#3E5C49] hover:text-[#143021] hover:bg-[#EBF2EB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Action Island */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Selector Dropdown */}
            <div className="relative flex items-center bg-[#F0F5F0] hover:bg-[#E6EFE6] border border-[#D5E2D5] rounded-xl px-2 py-1 sm:py-1.5 text-xs font-medium text-[#1E3A2F] transition-colors shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#2D6A4F] mr-1 shrink-0" />
              <select
                value={currentLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="bg-transparent border-none text-xs font-bold text-[#1B4332] focus:outline-none cursor-pointer pr-1"
                aria-label="Select Language"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-gray-900 bg-white">
                    {lang.native}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Demo Button */}
            <button
              onClick={onTryDemo}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-extrabold shadow-xs transition-all active:scale-95 min-h-[38px] sm:min-h-[40px]"
              title="Run 60-Second Demo: Puri Rice with Yellowing Leaf"
            >
              <Zap className="w-3.5 h-3.5 text-[#FDE047] fill-[#FDE047] shrink-0" />
              <span className="hidden sm:inline">{t.tryDemoBtn}</span>
              <span className="sm:hidden font-black">Demo</span>
            </button>
          </div>
        </div>

        {/* Mobile Responsive Tab Navigation */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 border-t border-[#E3E8E3] scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0 touch-pan-x">
          {tabsList.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-xs font-bold whitespace-nowrap rounded-xl min-h-[44px] flex items-center shrink-0 transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1B4332] text-white shadow-xs'
                  : 'text-[#3E5C49] bg-[#EBF2EB] hover:bg-[#DEE8DE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
