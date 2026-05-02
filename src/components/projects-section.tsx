"use client";

import { SiGithub } from "react-icons/si";

import { ExperienceSkillIcon } from "@/components/experience-skill-icon";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, useReducedMotion } from "@/lib/motion";

import type { ProjectItem } from "@/components/types";

const sectionClass = "border-t border-secondary py-12";
const headingClass =
  "text-xl font-semibold text-primary-foreground sm:text-2xl";

const springChip = { type: "spring" as const, stiffness: 500, damping: 24 };

function projectSlug(title: string): string {
  const s = title
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return s.length > 0 ? s : "project";
}

export type ProjectsSectionUi = Readonly<{
  opensInNewTab: string;
  projectsListAriaLabel: string;
  sourceCodeAriaLabel: string;
  coreSkillsHeading: string;
}>;

type ProjectsSectionProps = Readonly<{
  id: string;
  headingId: string;
  title: string;
  locale: "en" | "sv";
  projects: readonly ProjectItem[];
  ui: ProjectsSectionUi;
}>;

export function ProjectsSection({
  id,
  headingId,
  title,
  locale,
  projects,
  ui,
}: ProjectsSectionProps) {
  const reduceMotion = useReducedMotion();
  const hoverOff = reduceMotion === true;

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

        <ul
          className="mt-8 list-none space-y-5 p-0"
          aria-label={ui.projectsListAriaLabel}
        >
          {projects.map((project) => {
            const slug = projectSlug(project.title);
            const coreSkillsLabelId = `${id}-core-skills-label-${slug}`;

            return (
              <li key={project.title}>
                <article className="rounded-xl border border-transparent bg-transparent p-4 shadow-none ring-0 transition-[background-color,box-shadow,border-color,ring-color] duration-200 ease-out hover:border-secondary hover:bg-secondary/30 hover:shadow-sm hover:ring-1 hover:ring-secondary/40 focus-within:border-secondary focus-within:bg-secondary/30 focus-within:shadow-sm focus-within:ring-1 focus-within:ring-secondary/40 dark:hover:bg-secondary/25 dark:hover:ring-secondary/30 dark:focus-within:bg-secondary/25 dark:focus-within:ring-secondary/30 sm:p-5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-primary-foreground sm:text-lg">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex max-w-full items-start gap-2 rounded-md text-tertiary underline-offset-2 outline-none transition-colors hover:text-tertiary/90 hover:underline focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                          <span className="min-w-0">{project.title}</span>
                          <ExternalLinkIcon className="mt-0.5 h-4 w-4 shrink-0 opacity-85 sm:h-[1.125rem] sm:w-[1.125rem]" />
                          <span className="sr-only">{ui.opensInNewTab}</span>
                        </a>
                      </h3>
                      <p className="text-sm font-medium text-secondary-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-secondary-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    {project.skills && project.skills.length > 0 ? (
                      <div className="border-t border-secondary/60 pt-3">
                        <p
                          id={coreSkillsLabelId}
                          className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
                        >
                          {ui.coreSkillsHeading}
                        </p>
                        <ul
                          aria-labelledby={coreSkillsLabelId}
                          className="m-0 flex list-none flex-wrap gap-2 p-0"
                        >
                          {project.skills.map((skill) => (
                            <motion.li
                              key={`${project.title}-${skill}`}
                              className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground ring-2 ring-transparent transition-shadow hover:ring-tertiary/25"
                              whileHover={
                                hoverOff ? undefined : { scale: 1.06, y: -2 }
                              }
                              whileTap={
                                hoverOff ? undefined : { scale: 0.97 }
                              }
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
                      </div>
                    ) : null}

                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ui.sourceCodeAriaLabel}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-tertiary/60 text-tertiary outline-none transition-colors hover:bg-tertiary hover:text-tertiary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      >
                        <SiGithub aria-hidden className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </ScrollReveal>
    </section>
  );
}
