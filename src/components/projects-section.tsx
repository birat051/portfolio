import { SiGithub } from "react-icons/si";

import { ExternalLinkIcon } from "@/components/external-link-icon";
import { ScrollReveal } from "@/components/scroll-reveal";

import type { ProjectItem } from "@/components/types";

const sectionClass = "border-t border-secondary py-12";
const headingClass =
  "text-xl font-semibold text-primary-foreground sm:text-2xl";

export type ProjectsSectionUi = Readonly<{
  opensInNewTab: string;
  projectsListAriaLabel: string;
  sourceCodeAriaLabel: string;
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
          {projects.map((project) => (
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
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
