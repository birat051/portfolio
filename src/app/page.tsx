import { HomeContent } from "@/components/home-content";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import sectionsData from "@/data/sections.json";

import type { SectionEntry } from "@/app/types";

/** Homepage: semantic structure only — main + sections. Language-aware content via HomeContent. */
export default function Home() {
  const sections = sectionsData as SectionEntry[];

  return (
    <main
      id="main-content"
      className="min-h-screen bg-primary text-primary-foreground"
    >
      <div className="flex items-center justify-between border-b border-secondary bg-primary px-4 py-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <HomeContent sections={sections} />
    </main>
  );
}
