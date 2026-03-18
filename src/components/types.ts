export type SectionSwitcherItem = Readonly<{
  id: string;
  label: string;
}>;

export type ExperienceTimelineItem = {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
  skills: string[];
};

