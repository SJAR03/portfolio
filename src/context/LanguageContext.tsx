import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

// Map languages to ther JSON
const translationsMap: Record<Language, Record<string, any>> = {
  en,
  es,
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return saved || "en";
  });

  const [translations, setTranslations] = useState(translationsMap[language]);

  // Update translations when language changes
  useEffect(() => {
    setTranslations(translationsMap[language]);
  }, [language]);

  const toggleLanguage = () => {
    const newLang: Language = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  // Function that translates a key using the current language
  const t = (key: string): any => {
    const value = key
      .split(".")
      .reduce((obj, k) => (obj ? obj[k] : null), translations);
    return value !== null && value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
