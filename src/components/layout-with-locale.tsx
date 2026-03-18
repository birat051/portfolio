"use client";

import { Footer } from "@/components/footer";
import { SkipLink } from "@/components/skip-link";
import { LocaleProvider } from "@/contexts/locale-context";

export function LayoutWithLocale({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SkipLink />
      {children}
      <Footer />
    </LocaleProvider>
  );
}
