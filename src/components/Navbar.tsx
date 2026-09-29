import React from 'react';
import { Sprout, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/demoData';
import { TranslationStrings } from '../locales/translations';

interface NavbarProps {
  t: TranslationStrings;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  onTryDemo?: () => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  currentLanguage,
  onLanguageChange,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => setActiveTab('diagnosis')}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
            <Sprout className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-zinc-900 sm:text-base">{t.appName}</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{t.appSubtitle}</div>
          </div>
        </button>

        <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-1.5">
          <Globe className="h-3.5 w-3.5 text-zinc-600" />
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-transparent pr-1 text-xs font-medium text-zinc-800 outline-none"
            aria-label="Select language"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code} className="bg-white text-zinc-900">
                {lang.native}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};
