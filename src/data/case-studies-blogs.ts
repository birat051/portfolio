/**
 * **Task 23.1** — Schema for `case-studies-blogs.json` (same folder).
 *
 * Each object is one external write-up (e.g. Medium). Add rows to the JSON file only;
 * use **`getCaseStudyBlogs()`** for raw sorted rows or **`getCaseStudyBlogsForLocale(locale)`** for UI (Task **23.2** sort; Task **26.2** locale resolution).
 *
 * **Task 26.1** — Optional **Swedish** copy per entry (`titleSv`, `summarySv`, `tagsSv`).
 * When the site locale is **`sv`**, the UI should prefer Swedish fields when present; otherwise
 * fall back to **`title`**, **`summary`**, and **`tags`** (English). **`url`**, **`source`**, and
 * **`publishedAt`** are locale-agnostic.
 *
 * | Field | Required | Description |
 * | ----- | -------- | ----------- |
 * | `id` | yes | Stable unique id (React `key`, no spaces). |
 * | `title` | yes | Headline on the card (**English** baseline; fallback when `titleSv` absent). |
 * | `url` | yes | Full HTTPS URL to the article. |
 * | `source` | yes | Short label (e.g. `"Medium"`); kept for data / future use; not shown on the card after Task **24.6**. |
 * | `publishedAt` | yes | ISO date `YYYY-MM-DD` for **sort order** (newest first); not shown on the card after Task **24.6**. |
 * | `summary` | no | Teaser under the title (**English** baseline; fallback when `summarySv` absent). |
 * | `tags` | no | String chips (**English** baseline; fallback when `tagsSv` absent or empty). |
 * | `titleSv` | no | Swedish headline; if omitted or empty string, use **`title`**. |
 * | `summarySv` | no | Swedish teaser; if omitted or empty string, use **`summary`**. |
 * | `tagsSv` | no | Swedish tags; if omitted or empty array, use **`tags`**. |
 */
import raw from "@/data/case-studies-blogs.json";

export type CaseStudyBlogEntry = {
  readonly id: string;
  /** English (default) card title; fallback when `titleSv` is missing or empty. */
  readonly title: string;
  readonly url: string;
  readonly source: string;
  readonly publishedAt: string;
  /** English (default) summary; fallback when `summarySv` is missing or empty. */
  readonly summary?: string;
  /** English (default) tags; fallback when `tagsSv` is missing or empty. */
  readonly tags?: readonly string[];
  /** Swedish title for locale `sv`; omit or use `""` to fall back to `title`. */
  readonly titleSv?: string;
  /** Swedish summary for locale `sv`; omit or use `""` to fall back to `summary`. */
  readonly summarySv?: string;
  /** Swedish tags for locale `sv`; omit or `[]` to fall back to `tags`. */
  readonly tagsSv?: readonly string[];
};

/**
 * **Task 26.2** — One case-study row after resolving **`title`**, **`summary`**, and **`tags`**
 * for the active locale (no `titleSv` / `summarySv` / `tagsSv` on this type).
 */
export type CaseStudyBlogDisplay = {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly source: string;
  readonly publishedAt: string;
  readonly summary?: string;
  readonly tags?: readonly string[];
};

/** Raw list from JSON, in file order. Prefer {@link getCaseStudyBlogs} or {@link getCaseStudyBlogsForLocale}. */
export const caseStudyBlogsRaw: readonly CaseStudyBlogEntry[] =
  raw as readonly CaseStudyBlogEntry[];

/**
 * **Task 23.2** — Entries sorted **newest `publishedAt` first** (`YYYY-MM-DD` string compare).
 * New rows in `case-studies-blogs.json` appear in the correct order without code changes.
 */
export function getCaseStudyBlogs(): readonly CaseStudyBlogEntry[] {
  return [...caseStudyBlogsRaw].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

/**
 * **Task 26.2** — Map a raw JSON entry to display fields for **`en`** or **`sv`**.
 * - **`en`:** always **`title`**, **`summary`**, **`tags`** (baseline English).
 * - **`sv`:** use **`titleSv`** / **`summarySv`** / **`tagsSv`** when non-empty; else fall back to English fields.
 */
export function resolveCaseStudyBlogForLocale(
  entry: CaseStudyBlogEntry,
  locale: "en" | "sv",
): CaseStudyBlogDisplay {
  if (locale === "en") {
    return toDisplayFromEnglish(entry);
  }

  const titleSv = entry.titleSv?.trim();
  const title = titleSv || entry.title;

  const summarySv = entry.summarySv?.trim();
  const summary =
    summarySv !== undefined && summarySv !== ""
      ? summarySv
      : entry.summary;

  const tags =
    entry.tagsSv !== undefined && entry.tagsSv.length > 0
      ? entry.tagsSv
      : entry.tags?.length
        ? entry.tags
        : undefined;

  return buildDisplay(entry, title, summary, tags);
}

function toDisplayFromEnglish(entry: CaseStudyBlogEntry): CaseStudyBlogDisplay {
  return buildDisplay(
    entry,
    entry.title,
    entry.summary,
    entry.tags?.length ? entry.tags : undefined,
  );
}

function buildDisplay(
  entry: CaseStudyBlogEntry,
  title: string,
  summary: string | undefined,
  tags: readonly string[] | undefined,
): CaseStudyBlogDisplay {
  return {
    id: entry.id,
    title,
    url: entry.url,
    source: entry.source,
    publishedAt: entry.publishedAt,
    ...(summary !== undefined && summary !== "" ? { summary } : {}),
    ...(tags !== undefined && tags.length > 0 ? { tags } : {}),
  };
}

/**
 * **Task 26.2** — Sorted case studies with **locale-resolved** `title`, `summary`, and `tags`
 * for **`CaseStudiesSection`** (or other UI).
 */
export function getCaseStudyBlogsForLocale(
  locale: "en" | "sv",
): readonly CaseStudyBlogDisplay[] {
  return getCaseStudyBlogs().map((entry) =>
    resolveCaseStudyBlogForLocale(entry, locale),
  );
}
