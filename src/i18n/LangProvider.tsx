import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang, type LocList, type LocStr } from "./dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (s: LocStr) => string;
  tl: (s: LocList) => readonly string[];
  d: typeof dict;
};

const LangContext = createContext<Ctx | null>(null);

function readInitial(): Lang {
  if (typeof window === "undefined") return "fr";
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;
  return "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "fr" ? "en" : "fr")), []);
  const t = useCallback((s: LocStr) => s[lang], [lang]);
  const tl = useCallback((s: LocList) => s[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, tl, d: dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
