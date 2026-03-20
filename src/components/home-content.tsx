"use client";

/**
 * Homepage main column — Task 2.3 heading outline: Hero has the sole `h1`; each section uses
 * `h2` (ContentSection, ExperienceTimeline, CaseStudiesSection); `h3` only for experience job
 * titles and case-study card titles.
 *
 * Task **2.5** — Tab order: `LayoutWithLocale` renders skip link first, then page (`SitePreferencesHeader`
 * + `main`). No in-page focus traps; hash links use native focus behavior.
 *
 * Task **2.6** — Screen-reader strings and `html lang` come from **`getTranslations(locale)`** /
 * **`LocaleProvider`** (see **`skip-link`**, **`hero`**, **`experience-timeline`**, **`case-studies`**).
 */

import { useMemo } from "react";

import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContentSection } from "@/components/content-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { useLocale } from "@/contexts/locale-context";
import { getCaseStudyBlogsForLocale } from "@/data/case-studies-blogs";
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

  const caseStudyBlogs = useMemo(
    () => getCaseStudyBlogsForLocale(locale),
    [locale],
  );

  return (
    <div className="mx-4 md:mx-12">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        {/* Task 12.2 — Side-by-side on `lg+`; anchor `#id` + ScrollReveal + SectionSwitcher use viewport/root document scroll. */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] lg:w-[24rem] lg:shrink-0">
            <Hero
              sectionItems={sectionItems}
              sectionNavAriaLabel={t.a11y.sectionNavigationAriaLabel}
              socialLinksAriaLabel={t.a11y.socialLinks}
              githubProfileAriaLabel={t.a11y.githubProfile}
              linkedInProfileAriaLabel={t.a11y.linkedInProfile}
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
                  timelineListAriaLabel={t.a11y.experienceTimelineList}
                  skillsListAriaLabel={t.a11y.experienceSkillsList}
                  jobRowAriaTemplate={t.a11y.experienceJobRowAriaTemplate}
                />
              ) : section.id === "case-studies" ? (
                <CaseStudiesSection
                  key={section.id}
                  id={section.id}
                  headingId={section.headingId}
                  title={t.sectionTitles[section.id] ?? section.title}
                  locale={locale}
                  blogs={caseStudyBlogs}
                  ui={t.caseStudiesUi}
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
