"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import healthplixLogo from "@/assets/images/healthplix_logo.jpeg";
import hitachiVantaraLogo from "@/assets/images/hitachi_vantara.jpeg";
import mpscLogo from "@/assets/images/mpsc_logo.png";
import { ExperienceSkillIcon } from "@/components/experience-skill-icon";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  formatExperienceCompanySiteAriaLabel,
  formatExperienceJobRowAriaLabel,
  formatExperienceRelatedWorkLinkAriaLabel,
} from "@/data/translations";
import { motion, useReducedMotion } from "@/lib/motion";

import type { ExperienceTimelineItem } from "@/components/types";

/**
 * Task **2.6** — Timeline / skills list labels and per-row `aria-label` from locale templates.
 * Task **28.4** — Company name links out when **`companyUrl`** is set.
 * Task **28.5** — **`relatedWorks`** pill links + **`ExternalLinkIcon`**; motion off when reduced motion.
 * Read more / less: when a job has highlight bullets, **collapsed** shows **`intro`** only + **Read more**;
 * **skills** and **related work** stay visible; **expanded** adds **all bullets** and **Read less** above skills.
 */

const COMPANY_LOGO_MAP: Record<
  string,
  { src: typeof healthplixLogo; alt: string }
> = {
  Healthplix: { src: healthplixLogo, alt: "Healthplix" },
  "MPSC Inc.": { src: mpscLogo, alt: "MPSC Inc." },
  "Hitachi Vantara": { src: hitachiVantaraLogo, alt: "Hitachi Vantara" },
};

function getLogo(company: string) {
  return COMPANY_LOGO_MAP[company] ?? null;
}

const springRow = { type: "spring" as const, stiffness: 380, damping: 28 };
const springChip = { type: "spring" as const, stiffness: 500, damping: 24 };

const rowVariants = {
  rest: { y: 0 },
  hover: {
    y: -3,
    transition: springRow,
  },
};

const logoVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: springRow,
  },
};

const contentVariants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: springRow,
  },
};

type ExperienceTimelineProps = Readonly<{
  id: string;
  headingId: string;
  title: string;
  timeline: ExperienceTimelineItem[];
  timelineListAriaLabel: string;
  skillsListAriaLabel: string;
  jobRowAriaTemplate: string;
  /** Task **28.3** / **28.4** — `{company}` template for employer homepage link `aria-label`. */
  companySiteAriaTemplate: string;
  /** Task **28.3** / **28.5** — Visible subheading above related-work chips. */
  relatedWorkHeading: string;
  /** Task **28.3** / **28.5** — `{label}` template for each chip link `aria-label`. */
  relatedWorkLinkAriaTemplate: string;
  readMoreHighlights: string;
  readLessHighlights: string;
}>;

export function ExperienceTimeline({
  id: sectionId,
  headingId,
  title,
  timeline,
  timelineListAriaLabel,
  skillsListAriaLabel,
  jobRowAriaTemplate,
  companySiteAriaTemplate,
  relatedWorkHeading,
  relatedWorkLinkAriaTemplate,
  readMoreHighlights,
  readLessHighlights,
}: ExperienceTimelineProps) {
  const reduceMotion = useReducedMotion();
  const hoverOff = reduceMotion === true;

  const [highlightsExpandedByKey, setHighlightsExpandedByKey] = useState<
    Record<string, boolean>
  >({});

  const toggleJobDetails = useCallback((key: string) => {
    setHighlightsExpandedByKey((prev) => ({
      ...prev,
      [key]: !(prev[key] ?? false),
    }));
  }, []);

  const collapseJobDetailsAndScrollToNext = useCallback(
    (key: string, jobIndex: number, isLastJob: boolean) => {
      setHighlightsExpandedByKey((prev) => ({ ...prev, [key]: false }));
      if (isLastJob) {
        return;
      }
      const nextId = `${sectionId}-job-${jobIndex + 1}`;
      requestAnimationFrame(() => {
        document.getElementById(nextId)?.scrollIntoView({
          // behavior: reduceMotion === true ? "auto" : "smooth",
          behavior: "smooth",

          block: "center",
        });
      });
    },
    [sectionId, reduceMotion],
  );

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className="border-t border-secondary py-12"
    >
      <ScrollReveal className="mx-auto max-w-5xl">
        <h2
          id={headingId}
          className="text-xl font-semibold text-primary-foreground sm:text-2xl"
        >
          {title}
        </h2>

        <ol className="mt-8 list-none pl-0" aria-label={timelineListAriaLabel}>
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1;
            const itemKey = `${item.role}-${item.company}-${item.dateRange}`;
            const logo = getLogo(item.company);
            const jobHeadingId = `${sectionId}-job-heading-${index}`;
            const relatedWorkHeadingId = `${sectionId}-related-work-heading-${index}`;
            const detailsStateKey = `${sectionId}-${index}-${itemKey}`;
            const detailsPanelId = `${sectionId}-job-details-${index}`;
            const highlightsListId = `${sectionId}-highlights-${index}`;
            const readMoreToggleId = `${sectionId}-read-more-${index}`;
            const readLessToggleId = `${sectionId}-read-less-${index}`;
            const highlightCount = item.highlights.length;
            const hasDetailsToggle = highlightCount > 0;
            const detailsExpanded =
              highlightsExpandedByKey[detailsStateKey] === true;

            const highlightsList =
              highlightCount > 0 ? (
                <ul
                  id={highlightsListId}
                  className="list-disc space-y-1 pl-5"
                  aria-labelledby={jobHeadingId}
                >
                  {item.highlights.map((h) => (
                    <li key={`${itemKey}-${h}`}>{h}</li>
                  ))}
                </ul>
              ) : null;

            const skillsAndRelated = (
              <>
                <ul
                  aria-label={skillsListAriaLabel}
                  className="flex flex-wrap gap-2"
                >
                  {item.skills.map((skill) => (
                    <motion.li
                      key={`${itemKey}-${skill}`}
                      className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground ring-2 ring-transparent transition-shadow hover:ring-tertiary/25"
                      whileHover={hoverOff ? undefined : { scale: 1.06, y: -2 }}
                      whileTap={hoverOff ? undefined : { scale: 0.97 }}
                      transition={springChip}
                    >
                      <ExperienceSkillIcon
                        skill={skill}
                        className="h-3.5 w-3.5 shrink-0 opacity-90"
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                {item.relatedWorks && item.relatedWorks.length > 0 ? (
                  <div className="border-t border-secondary/60 pt-3">
                    <p
                      id={relatedWorkHeadingId}
                      className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
                    >
                      {relatedWorkHeading}
                    </p>
                    <ul
                      className="m-0 flex list-none flex-wrap gap-2 p-0"
                      aria-labelledby={relatedWorkHeadingId}
                    >
                      {item.relatedWorks.map((work) => (
                        <li key={`${itemKey}-work-${work.url}`}>
                          <motion.a
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/chip inline-flex max-w-full items-center gap-1.5 rounded-full border border-secondary bg-secondary/40 px-3 py-1.5 text-xs font-medium text-primary-foreground outline-none transition-colors hover:border-tertiary/50 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary dark:hover:bg-secondary/60"
                            aria-label={formatExperienceRelatedWorkLinkAriaLabel(
                              relatedWorkLinkAriaTemplate,
                              work.label,
                            )}
                            whileHover={
                              hoverOff ? undefined : { scale: 1.04, y: -1 }
                            }
                            whileTap={hoverOff ? undefined : { scale: 0.98 }}
                            transition={springChip}
                          >
                            <span className="min-w-0 break-words">
                              {work.label}
                            </span>
                            <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-tertiary opacity-80 group-hover/chip:opacity-100" />
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );

            return (
              <motion.li
                key={itemKey}
                id={`${sectionId}-job-${index}`}
                className="relative flex gap-3 pb-6 last:pb-0 sm:gap-4 sm:pb-8"
                aria-label={formatExperienceJobRowAriaLabel(
                  jobRowAriaTemplate,
                  item,
                )}
                initial="rest"
                whileHover={hoverOff ? undefined : "hover"}
                animate="rest"
                variants={hoverOff ? undefined : rowVariants}
              >
                <div
                  className="relative flex shrink-0 flex-col items-center pt-0.5"
                  aria-hidden
                >
                  {logo ? (
                    <motion.span
                      className="z-10 flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-secondary bg-primary shadow-sm sm:h-12 sm:w-12"
                      variants={hoverOff ? undefined : logoVariants}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={48}
                        height={48}
                        sizes="(max-width: 640px) 40px, 48px"
                        className="h-full w-full object-cover"
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-tertiary bg-primary"
                      variants={
                        hoverOff
                          ? undefined
                          : {
                              rest: { scale: 1 },
                              hover: { scale: 1.25, transition: springRow },
                            }
                      }
                    />
                  )}
                  {!isLast && (
                    <span className="mt-1.5 w-px flex-1 min-h-[1.5rem] bg-secondary" />
                  )}
                </div>

                <motion.div
                  className="relative min-w-0 flex-1 rounded-xl border border-transparent text-secondary-foreground -mx-2 transition-colors hover:border-secondary/80 hover:bg-secondary/20"
                  variants={hoverOff ? undefined : contentVariants}
                >
                  <div className="relative z-0 space-y-3 px-2 py-1">
                    <p className="text-sm text-tertiary">{item.dateRange}</p>
                    {/* Task 2.3 — h3 under section h2; keeps outline h1 → h2 → h3 (no level skips). */}
                    <h3
                      id={jobHeadingId}
                      className="m-0 text-base font-normal text-secondary-foreground"
                    >
                      <span className="font-semibold text-primary-foreground">
                        {item.role}
                      </span>
                      {" — "}
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/company inline-flex max-w-full items-center gap-1 rounded-sm text-primary-foreground underline decoration-tertiary/50 underline-offset-2 outline-none transition-colors hover:text-tertiary hover:decoration-tertiary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                          aria-label={formatExperienceCompanySiteAriaLabel(
                            companySiteAriaTemplate,
                            item.company,
                          )}
                        >
                          <span className="min-w-0 break-words">
                            {item.company}
                          </span>
                          <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-tertiary opacity-80 group-hover/company:opacity-100" />
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </h3>
                    <p className="text-sm">{item.location}</p>

                    <p className="text-sm leading-relaxed text-secondary-foreground">
                      {item.intro}
                    </p>

                    <div className="space-y-3 pb-1 pt-1">
                      {hasDetailsToggle && !detailsExpanded ? (
                        <button
                          id={readMoreToggleId}
                          type="button"
                          aria-expanded={false}
                          aria-controls={detailsPanelId}
                          onClick={() => toggleJobDetails(detailsStateKey)}
                          className="text-left text-sm font-medium text-tertiary underline decoration-tertiary/50 underline-offset-2 outline-none transition-colors hover:text-primary-foreground hover:decoration-tertiary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                          {readMoreHighlights}
                        </button>
                      ) : null}

                      {hasDetailsToggle ? (
                        <div
                          id={detailsPanelId}
                          hidden={!detailsExpanded}
                          className="space-y-3"
                        >
                          {highlightsList}
                          {detailsExpanded ? (
                            <button
                              id={readLessToggleId}
                              type="button"
                              aria-expanded={true}
                              aria-controls={detailsPanelId}
                              onClick={() =>
                                collapseJobDetailsAndScrollToNext(
                                  detailsStateKey,
                                  index,
                                  isLast,
                                )
                              }
                              className="text-left text-sm font-medium text-tertiary underline decoration-tertiary/50 underline-offset-2 outline-none transition-colors hover:text-primary-foreground hover:decoration-tertiary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                            >
                              {readLessHighlights}
                            </button>
                          ) : null}
                        </div>
                      ) : (
                        highlightsList
                      )}

                      {skillsAndRelated}
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </ScrollReveal>
    </section>
  );
}
