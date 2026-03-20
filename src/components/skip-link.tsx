"use client";

import { useCallback } from "react";

import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

/**
 * Task 2.6 — Skip target `#main-content`; copy follows locale.
 * Task 13.2 — After activate, move focus into `<main tabIndex={-1}>` (hash scroll + programmatic focus).
 */
export function SkipLink() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const moveFocusToMain = useCallback(() => {
    requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
  }, []);

  return (
    <a
      href="#main-content"
      onClick={moveFocusToMain}
      className="fixed left-4 top-0 z-[9999] -translate-y-full rounded-b-md bg-tertiary px-4 py-3 font-medium text-tertiary-foreground outline-none transition-transform focus:translate-y-0 focus:ring-2 focus:ring-tertiary-foreground focus:ring-offset-2 focus:ring-offset-primary"
    >
      {t.a11y.skipToMainContent}
    </a>
  );
}
