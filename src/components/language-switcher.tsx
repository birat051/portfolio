"use client";

import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

const FLAG_UK = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    className="h-4 w-6 shrink-0"
    aria-hidden
  >
    <clipPath id="uk">
      <path d="M0 0v30h60V0z" />
    </clipPath>
    <clipPath id="uk2">
      <path d="M30 15h30v15zv15h-30zh-30v-15zv-15h30z" />
    </clipPath>
    <g clipPath="url(#uk)">
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk2)" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const FLAG_SE = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 16"
    className="h-4 w-6 shrink-0"
    aria-hidden
  >
    <path d="M0 0h22v16H0z" fill="#006AA7" />
    <path d="M6 0h4v16H6zM0 6h22v4H0z" fill="#FECC00" />
  </svg>
);

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div
      className="flex items-center justify-end gap-1"
      role="group"
      aria-label={t.a11y.languageSelection}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        aria-label={
          locale === "en" ? t.a11y.languageEnCurrent : t.a11y.languageEnSwitch
        }
        className="flex items-center gap-2 rounded px-3 py-1.5 text-sm text-secondary-foreground outline-none transition-colors hover:bg-secondary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary aria-pressed:bg-secondary aria-pressed:text-primary-foreground"
      >
        {FLAG_UK}
        <span>English</span>
      </button>
      <button
        type="button"
        onClick={() => setLocale("sv")}
        aria-pressed={locale === "sv"}
        aria-label={
          locale === "sv" ? t.a11y.languageSvCurrent : t.a11y.languageSvSwitch
        }
        className="flex items-center gap-2 rounded px-3 py-1.5 text-sm text-secondary-foreground outline-none transition-colors hover:bg-secondary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary aria-pressed:bg-secondary aria-pressed:text-primary-foreground"
      >
        {FLAG_SE}
        <span>Svenska</span>
      </button>
    </div>
  );
}
