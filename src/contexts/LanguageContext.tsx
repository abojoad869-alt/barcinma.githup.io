import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = language.dir;
    document.documentElement.lang = language.code;
  }, [language]);

  const t = (key: string): string => {
    return translations[language.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: (lang) => setLanguage(lang), t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { languages };