import type { ExperienceTimelineItem } from "@/components/types";

/**
 * Task **28.2** — Merge locale-specific timeline rows (**`translations.experienceTimeline`**) with
 * link metadata from **`sections.json`** (**`experience.timeline`**), keyed by **`company`**.
 * Preserves locale copy; attaches **`companyUrl`** and **`relatedWorks`** when present in JSON.
 */
export function mergeExperienceTimelineWithLinks(
  localeTimeline: readonly ExperienceTimelineItem[],
  jsonTimeline: readonly ExperienceTimelineItem[] | null | undefined,
): ExperienceTimelineItem[] {
  if (!jsonTimeline?.length) {
    return localeTimeline.map((item) => ({ ...item }));
  }

  const metaByCompany = new Map<
    string,
    Pick<ExperienceTimelineItem, "companyUrl" | "relatedWorks">
  >();

  for (const row of jsonTimeline) {
    metaByCompany.set(row.company, {
      companyUrl: row.companyUrl,
      relatedWorks: row.relatedWorks,
    });
  }

  return localeTimeline.map((item) => {
    const meta = metaByCompany.get(item.company);
    if (!meta) {
      return { ...item };
    }

    return {
      ...item,
      ...(meta.companyUrl !== undefined ? { companyUrl: meta.companyUrl } : {}),
      ...(meta.relatedWorks !== undefined ? { relatedWorks: meta.relatedWorks } : {}),
    };
  });
}
