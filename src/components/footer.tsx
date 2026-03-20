"use client";

import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

export function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-secondary py-4 text-sm text-secondary-foreground"
      aria-label={t.a11y.siteFooterAriaLabel}
    >
      <div className="mx-4 md:mx-12">
        <div className="mx-auto max-w-7xl px-3 text-center md:px-8">
          <span>
            {t.footer}
            {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
