"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Locale = "en" | "sv";

const STORAGE_KEY = "portfolio-locale";

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "sv" ? stored : null;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = getStoredLocale();
    if (stored) {
      queueMicrotask(() => setLocale(stored));
    }
  }, []);

  const setLocaleAndPersist = useCallback((next: Locale) => {
    setLocale(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const value: LocaleContextValue = { locale, setLocale: setLocaleAndPersist };
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
