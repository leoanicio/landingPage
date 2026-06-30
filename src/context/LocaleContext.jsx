import React, { createContext, useContext, useState } from 'react';

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en'); // default to English

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  // Translate helper for localized object { en: '...', pt: '...' }
  const t = (localizedObj) => {
    if (localizedObj == null) return '';
    if (typeof localizedObj === 'string') return localizedObj;
    return localizedObj[locale] || localizedObj['en'] || '';
  };

  // Translate helper for localized list of items
  const tList = (localizedListObj) => {
    if (!localizedListObj) return [];
    return localizedListObj[locale] || localizedListObj['en'] || [];
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t, tList }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
