import type { ExperienceTimelineItem } from "@/components/types";

export type SectionEntry = {
  id: string;
  headingId: string;
  title: string;
  content: string[] | null;
  timeline?: ExperienceTimelineItem[] | null;
};

