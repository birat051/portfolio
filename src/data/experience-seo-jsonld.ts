import type { ExperienceTimelineItem } from "@/components/types";

/**
 * Employer blurbs from **`sections.json`** — emitted as JSON-LD only (not rendered in the timeline UI).
 * Helps search engines associate past employers with short Organization descriptions.
 */
export function buildExperienceEmployersJsonLd(
  timeline: readonly ExperienceTimelineItem[] | null | undefined,
): Record<string, unknown> | null {
  if (!timeline?.length) {
    return null;
  }

  const rows = timeline
    .map((t) => {
      const description = t.companyDescription?.trim();
      return description
        ? { item: t, description }
        : null;
    })
    .filter(
      (row): row is { item: ExperienceTimelineItem; description: string } =>
        row !== null,
    );

  if (rows.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Work experience — employer context",
    description:
      "Organizations referenced on this portfolio; descriptions summarize each employer for search engines.",
    numberOfItems: rows.length,
    itemListElement: rows.map(({ item, description }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: item.company,
        ...(item.companyUrl ? { url: item.companyUrl } : {}),
        description,
      },
    })),
  };
}
