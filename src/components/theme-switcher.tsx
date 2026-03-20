"use client";

import { useEffect, useState } from "react";

import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

const ICON_CLASS = "h-4 w-4 shrink-0";
const THEME_STORAGE_KEY = "theme";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS}
    aria-hidden
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS}
    aria-hidden
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

function getResolvedTheme(): "light" | "dark" {
  if (typeof document === "undefined") {
    return "light";
  }
  const { classList } = document.documentElement;
  if (classList.contains("dark")) {
    return "dark";
  }
  if (classList.contains("light")) {
    return "light";
  }
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setThemeClass(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function ThemeSwitcher() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const resolved = getResolvedTheme();
    const id = requestAnimationFrame(() => {
      setTheme(resolved);
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const handleLight = () => {
    setThemeClass("light");
    setTheme("light");
  };

  const handleDark = () => {
    setThemeClass("dark");
    setTheme("dark");
  };

  if (!mounted) {
    return (
      <div
        className="flex items-center gap-1"
        aria-label={t.a11y.themeSelection}
      >
        <span className="h-9 w-24" aria-hidden />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-start"
      role="group"
      aria-label={t.a11y.themeSelection}
    >
      <div
        className="relative grid w-24 grid-cols-2 rounded-full border border-secondary bg-secondary/50 p-0.5"
        role="presentation"
      >
        {/* Sliding indicator with switching animation */}
        <div
          className="absolute top-0.5 bottom-0.5 rounded-full bg-primary shadow-sm transition-[transform] duration-300 ease-in-out"
          style={{
            left: "2px",
            width: "calc(50% - 4px)",
            transform: theme === "dark" ? "translateX(calc(100% + 4px))" : "translateX(0)",
          }}
          aria-hidden
        />
        <button
          type="button"
          onClick={handleLight}
          aria-pressed={theme === "light"}
          aria-label={
            theme === "light"
              ? t.a11y.themeLightCurrent
              : t.a11y.themeLightSwitch
          }
          className="relative z-10 col-start-1 row-start-1 flex items-center justify-center rounded-full py-2 text-secondary-foreground outline-none transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary aria-pressed:text-primary-foreground"
        >
          <SunIcon />
        </button>
        <button
          type="button"
          onClick={handleDark}
          aria-pressed={theme === "dark"}
          aria-label={
            theme === "dark"
              ? t.a11y.themeDarkCurrent
              : t.a11y.themeDarkSwitch
          }
          className="relative z-10 col-start-2 row-start-1 flex items-center justify-center rounded-full py-2 text-secondary-foreground outline-none transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary aria-pressed:text-primary-foreground"
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  );
}
