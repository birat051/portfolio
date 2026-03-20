import type { ExperienceTimelineItem } from "@/components/types";

/** One row from **`sections.json`** / homepage section list. */
export type SectionEntry = {
  id: string;
  headingId: string;
  title: string;
  content: string[] | null;
  /**
   * Present when **`id === "experience"`**. Shape matches **`ExperienceTimelineItem`** (Task **28.1**):
   * JSON may include **`companyUrl`** and **`relatedWorks`**; merge with locale copy via
   * **`mergeExperienceTimelineWithLinks`** (**`experience-timeline-merge.ts`**) before **`ExperienceTimeline`**.
   */
  timeline?: ExperienceTimelineItem[] | null;
};

/**
 * Task **28.2** — Narrow type for the experience block from **`sections.json`** (non-null **`timeline`**).
 */
export type ExperienceSectionEntry = SectionEntry & {
  id: "experience";
  timeline: ExperienceTimelineItem[];
};

/** Task **28.2** — Type guard for experience section + timeline array. */
export function isExperienceSection(
  section: SectionEntry,
): section is ExperienceSectionEntry {
  return section.id === "experience" && Array.isArray(section.timeline);
}

