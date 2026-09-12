import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (enText: string, arText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('isr_lang') as Language;
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }
    // 2. Check browser language preference
    const browserLang = navigator.language || navigator.languages?.[0] || '';
    if (browserLang.toLowerCase().startsWith('ar')) {
      return 'ar';
    }
    // 3. Default to English
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('isr_lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Helper translation mapper
  const t = (enText: string, arText: string) => {
    return language === 'ar' ? arText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
