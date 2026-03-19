"use client";

import { ContentSection } from "@/components/content-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { useLocale } from "@/contexts/locale-context";
import { getTranslations } from "@/data/translations";

import type { SectionEntry } from "@/app/types";

type HomeContentProps = Readonly<{
  sections: SectionEntry[];
}>;

export function HomeContent({ sections }: HomeContentProps) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const sectionItems = sections.map((s) => ({
    id: s.id,
    label: t.sectionTitles[s.id] ?? s.title,
  }));

  return (
    <div className="mx-4 md:mx-12">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] lg:w-[24rem] lg:shrink-0">
            <Hero
              sectionItems={sectionItems}
              tagline={t.hero.tagline}
              intro={t.hero.intro}
              nameHeadingSrNote={t.hero.nameHeadingSrNote}
            />
          </div>
          <div className="lg:min-w-0 lg:flex-1">
            {sections.map((section) =>
              section.id === "experience" ? (
                <ExperienceTimeline
                  key={section.id}
                  id={section.id}
                  headingId={section.headingId}
                  title={t.sectionTitles[section.id] ?? section.title}
                  timeline={t.experienceTimeline}
                  expandJobDetailsLabel={t.experienceUi.expandJobDetails}
                  collapseJobDetailsLabel={t.experienceUi.collapseJobDetails}
                />
              ) : (
                <ContentSection
                  key={section.id}
                  id={section.id}
                  headingId={section.headingId}
                  title={t.sectionTitles[section.id] ?? section.title}
                  content={
                    section.id === "problems" ? t.problemsContent : null
                  }
                  placeholderText={t.comingSoon}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
