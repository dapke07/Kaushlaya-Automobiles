import { createContext, useContext, useState, useMemo } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en"); // "en" | "mr"

  const value = useMemo(() => {
    const t = (key) => {
      const parts = key.split(".");
      let node = translations[lang];
      for (const p of parts) {
        node = node?.[p];
      }
      if (node === undefined) {
        // fallback to English if a Marathi string is missing
        let fallback = translations.en;
        for (const p of parts) {
          fallback = fallback?.[p];
        }
        return fallback ?? key;
      }
      return node;
    };

    const toggle = () => setLang((l) => (l === "en" ? "mr" : "en"));

    return { lang, setLang, toggle, t };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
