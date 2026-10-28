"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Read localStorage synchronously during initialisation so no second render occurs.
  // This runs only on the client (inside useState initialiser).
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "fr";
    try {
      const saved = localStorage.getItem("delice_lang") as Language | null;
      if (saved === "fr" || saved === "en") return saved;
    } catch {
      // ignore sandboxed-context errors
    }
    return "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("delice_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === "fr" ? "en" : "fr";
    setLanguage(next);
  };

  const t = (fr: string, en: string) => (language === "en" ? en : fr);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
