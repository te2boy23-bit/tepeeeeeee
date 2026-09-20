"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ja" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (ja: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  setLang: () => {},
  toggleLang: () => {},
  t: (ja) => ja,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Language>("ja");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang") as Language | null;
      if (saved === "ja" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // localStorage is not available
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const next = lang === "ja" ? "en" : "ja";
    setLang(next);
  };

  const t = (ja: string, en: string) => (lang === "en" ? en : ja);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
