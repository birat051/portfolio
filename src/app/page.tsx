import { ContentSection } from "@/components/content-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import sectionsData from "@/data/sections.json";

import type { SectionEntry } from "@/app/types";

/** Homepage: semantic structure only — main + sections, no wrapper divs. */
export default function Home() {
  const sections = sectionsData as SectionEntry[];
  const sectionItems = sections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <main
      id="main-content"
      className="min-h-screen bg-primary text-primary-foreground"
    >
      <div className="mx-4 md:mx-12">
        <div className="mx-auto max-w-7xl px-3 md:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            <div className="lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] lg:w-[24rem] lg:shrink-0">
              <Hero sectionItems={sectionItems} />
            </div>
            <div className="lg:min-w-0 lg:flex-1">
              {sections.map((section) =>
                section.id === "experience" ? (
                <ExperienceTimeline
                  key={section.id}
                  id={section.id}
                  headingId={section.headingId}
                  title={section.title}
                  timeline={section.timeline ?? []}
                />
                ) : (
                  <ContentSection key={section.id} {...section} />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
