import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../i18n/en';
import { km } from '../i18n/km';

const LanguageContext = createContext();

const translations = { en, km };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'km')) {
      return savedLang;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Add language attribute to html element for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'km' : 'en'));
  };

  const setLang = (lang) => {
    if (lang === 'en' || lang === 'km') {
      setLanguage(lang);
    }
  };

  // Helper function to resolve nested keys like t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English if key missing
        let fallback = translations.en;
        for (const fKey of keys) {
          if (fallback[fKey] === undefined) return path;
          fallback = fallback[fKey];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLang, t, dict: translations[language] }}>
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
