import { ExperienceSkillIcon } from "@/components/experience-skill-icon";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { ScrollReveal } from "@/components/scroll-reveal";

import type { CaseStudyBlogDisplay } from "@/data/case-studies-blogs";

const sectionClass = "border-t border-secondary py-12";
const headingClass =
  "text-xl font-semibold text-primary-foreground sm:text-2xl";

/** Task 23 / 24.1 — copy from `translations.ts` `caseStudiesUi` (no section intro paragraph). */
export type CaseStudiesSectionUi = Readonly<{
  opensInNewTab: string;
  emptyPlaceholder: string;
  tagsListAriaLabel: string;
  articlesListAriaLabel: string;
}>;

type CaseStudiesSectionProps = Readonly<{
  id: string;
  headingId: string;
  title: string;
  /** Active site locale — drives `lang` on the section (Task **26.3**). */
  locale: "en" | "sv";
  blogs: readonly CaseStudyBlogDisplay[];
  ui: CaseStudiesSectionUi;
}>;

/**
 * Engineering case studies: JSON-driven cards, external-link icon by title (Task 24.1).
 * Task **24.2** hover glass on case studies was **reverted** — summary stays in-card.
 * Task **24.5** — card border / shadow / ring only on **hover** and **`focus-within`**.
 * Task **24.6** — no per-card **published** line; **`publishedAt`** / **`source`** stay in JSON for sort / future use.
 * Task **26.2** — **`blogs`** are **`CaseStudyBlogDisplay`** (locale-resolved via **`getCaseStudyBlogsForLocale`** in **`home-content`**).
 * Task **26.3** — **`locale`** is passed from **`home-content`**; **`caseStudiesUi`** from **`getTranslations(locale)`**; section **`lang`** matches locale for assistive tech.
 * Task **38** — Tag chips use **`ExperienceSkillIcon`** (same map as experience skills + case-study tag keys).
 * Task **2.6** — Article **`ul`** **`aria-label`** from **`articlesListAriaLabel`**.
 */
export function CaseStudiesSection({
  id,
  headingId,
  title,
  locale,
  blogs,
  ui,
}: CaseStudiesSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      lang={locale === "sv" ? "sv" : "en"}
      className={sectionClass}
    >
      <ScrollReveal className="mx-auto max-w-5xl">
        <h2 id={headingId} className={headingClass}>
          {title}
        </h2>

        {blogs.length === 0 ? (
          <p className="mt-6 break-words text-secondary-foreground">
            {ui.emptyPlaceholder}
          </p>
        ) : (
          <ul
            className="mt-8 list-none space-y-5 p-0"
            aria-label={ui.articlesListAriaLabel}
          >
            {blogs.map((entry) => (
              <li key={entry.id}>
                <article
                  className="rounded-xl border border-transparent bg-transparent p-4 shadow-none ring-0 transition-[background-color,box-shadow,border-color,ring-color] duration-200 ease-out hover:border-secondary hover:bg-secondary/30 hover:shadow-sm hover:ring-1 hover:ring-secondary/40 focus-within:border-secondary focus-within:bg-secondary/30 focus-within:shadow-sm focus-within:ring-1 focus-within:ring-secondary/40 dark:hover:bg-secondary/25 dark:hover:ring-secondary/30 dark:focus-within:bg-secondary/25 dark:focus-within:ring-secondary/30 sm:p-5"
                >
                  <div className="space-y-3">
                    {/* Task 2.3 — h3 under section h2 (article title). */}
                    <h3 className="text-base font-semibold text-primary-foreground sm:text-lg">
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex max-w-full items-start gap-2 rounded-md text-tertiary underline-offset-2 outline-none transition-colors hover:text-tertiary/90 hover:underline focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      >
                        <span className="min-w-0">{entry.title}</span>
                        <ExternalLinkIcon className="mt-0.5 h-4 w-4 shrink-0 opacity-85 sm:h-[1.125rem] sm:w-[1.125rem]" />
                        <span className="sr-only">{ui.opensInNewTab}</span>
                      </a>
                    </h3>
                    {entry.summary ? (
                      <p className="text-sm leading-relaxed text-secondary-foreground">
                        {entry.summary}
                      </p>
                    ) : null}
                    {entry.tags && entry.tags.length > 0 ? (
                      <ul
                        className="flex list-none flex-wrap gap-2 p-0"
                        aria-label={ui.tagsListAriaLabel}
                      >
                        {entry.tags.map((tag) => (
                          <li key={tag}>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/80 bg-primary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                              <ExperienceSkillIcon
                                skill={tag}
                                className="h-3.5 w-3.5 shrink-0 opacity-90"
                              />
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </ScrollReveal>
    </section>
  );
}
