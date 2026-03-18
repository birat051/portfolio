import { ScrollReveal } from "@/components/scroll-reveal";

import type { ExperienceTimelineItem } from "@/components/types";

type ExperienceTimelineProps = Readonly<{
  id: string;
  headingId: string;
  title: string;
  timeline: ExperienceTimelineItem[];
}>;

export function ExperienceTimeline({
  id,
  headingId,
  title,
  timeline,
}: ExperienceTimelineProps) {
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-secondary py-12">
      <ScrollReveal className="mx-auto max-w-5xl">
        <h2
          id={headingId}
          className="text-xl font-semibold text-primary-foreground sm:text-2xl"
        >
          {title}
        </h2>

        <ol className="mt-8 space-y-8 text-secondary-foreground">
          {timeline.map((item) => (
            <li key={`${item.role}-${item.company}-${item.dateRange}`}>
              <div className="space-y-3">
                <p className="text-sm text-tertiary">{item.dateRange}</p>
                <p className="text-base">
                  <span className="font-semibold">{item.role}</span> —{" "}
                  <span>{item.company}</span>
                </p>
                <p className="text-sm">{item.location}</p>

                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {item.highlights.map((h) => (
                    <li key={`${item.role}-${item.company}-${item.dateRange}-${h}`}>
                      {h}
                    </li>
                  ))}
                </ul>

                <ul
                  aria-label="Technologies and skills"
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {item.skills.map((skill) => (
                    <li
                      key={`${item.role}-${skill}`}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}

