import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{language.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md ${
              language.code === lang.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}