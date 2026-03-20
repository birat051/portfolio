"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

/**
 * Task **2.2** — Top **banner** landmark (`<header>`) outside `<main>` so it exposes a document-level
 * banner; theme and language controls live here. **`aria-label`** follows active locale.
 */
export function SitePreferencesHeader() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <header
      className="flex items-center justify-between border-b border-secondary bg-primary px-4 py-2"
      aria-label={t.a11y.sitePreferencesHeaderAriaLabel}
    >
      <ThemeSwitcher />
      <LanguageSwitcher />
    </header>
  );
}
