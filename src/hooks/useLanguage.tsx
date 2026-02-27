"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { ResumeData } from "@/types/portfolio";
import { resumeEn } from "@/data/resume-en";
import { resumeVn } from "@/data/resume-vn";

type Language = "en" | "vn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resumeData: ResumeData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Language | null;
    if (stored === "en" || stored === "vn") {
      setLanguage(stored);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-lang", lang);
  };

  const resumeData = language === "en" ? resumeEn : resumeVn;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, resumeData }}
    >
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
