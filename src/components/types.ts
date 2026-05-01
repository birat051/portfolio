export type SectionSwitcherItem = Readonly<{
  id: string;
  label: string;
}>;

/** Task **28.1** — Related-work chip; `url` must be absolute **https**. */
export type ExperienceRelatedWorkLink = Readonly<{
  label: string;
  url: string;
}>;

export type ExperienceTimelineItem = {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  /**
   * Short employer / product context for **SEO** (`sections.json` → JSON-LD `Organization`); **not**
   * shown in the timeline UI. Personal accomplishments stay in **`highlights`**.
   */
  companyDescription?: string;
  /**
   * Visible context under location and above highlight bullets; locale-specific copy in **`translations.ts`**.
   */
  intro: string;
  highlights: string[];
  skills: string[];
  /** Task **28.1** — Employer homepage (company heading link). Canonical in **`sections.json`**. */
  companyUrl?: string;
  /** Task **28.1** — Outbound related-work links (chip row); order preserved. */
  relatedWorks?: ExperienceRelatedWorkLink[];
};

export type ProjectItem = Readonly<{
  title: string;
  subtitle: string;
  url: string;
  sourceUrl?: string;
  highlights: readonly string[];
}>;

