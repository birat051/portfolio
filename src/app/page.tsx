import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import sectionsData from "@/data/sections.json";

type SectionEntry = {
  id: string;
  headingId: string;
  title: string;
  content: string[] | null;
};

/** Homepage: semantic structure only — main + sections, no wrapper divs. */
export default function Home() {
  const sections = sectionsData as SectionEntry[];
  const sectionItems = sections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <main
      id="main-content"
      className="min-h-screen bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-12">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] lg:w-[24rem] lg:shrink-0">
            <Hero sectionItems={sectionItems} />
          </div>
          <div className="lg:min-w-0 lg:flex-1">
            {sections.map((section) => (
              <ContentSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
