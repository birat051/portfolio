import { HomeContent } from "@/components/home-content";
import { SitePreferencesHeader } from "@/components/site-preferences-header";
import sectionsData from "@/data/sections.json";
import { SITE_PERSON_JSON_LD } from "@/data/site";

import type { SectionEntry } from "@/app/types";
import type { Metadata } from "next";

/** Task 14.3 — Canonical URL for the landing route (pairs with `metadataBase` in `layout.tsx`). */
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

/** Homepage: semantic structure only — main + sections. Language-aware content via HomeContent. */
export default function Home() {
  const sections = sectionsData as SectionEntry[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SITE_PERSON_JSON_LD),
        }}
      />
      <SitePreferencesHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-primary text-primary-foreground"
      >
        <HomeContent sections={sections} />
      </main>
    </>
  );
}
