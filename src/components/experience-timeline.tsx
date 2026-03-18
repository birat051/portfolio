import Image from "next/image";

import healthplixLogo from "@/assets/images/healthplix_logo.jpeg";
import hitachiVantaraLogo from "@/assets/images/hitachi_vantara.jpeg";
import mpscLogo from "@/assets/images/mpsc_logo.png";
import { ScrollReveal } from "@/components/scroll-reveal";

import type { ExperienceTimelineItem } from "@/components/types";

const COMPANY_LOGO_MAP: Record<string, { src: typeof healthplixLogo; alt: string }> = {
  "Healthplix Technologies": { src: healthplixLogo, alt: "Healthplix Technologies" },
  "MPSC Inc.": { src: mpscLogo, alt: "MPSC Inc." },
  "Hitachi Vantara": { src: hitachiVantaraLogo, alt: "Hitachi Vantara" },
};

function getLogo(company: string) {
  return COMPANY_LOGO_MAP[company] ?? null;
}

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
    <section
      id={id}
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

        <ol
          className="mt-8 list-none pl-0"
          aria-label="Work experience timeline"
        >
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1;
            const itemKey = `${item.role}-${item.company}-${item.dateRange}`;
            const logo = getLogo(item.company);
            return (
              <li
                key={itemKey}
                className="relative flex gap-3 pb-6 last:pb-0 sm:gap-4 sm:pb-8"
                aria-label={`${item.role} at ${item.company}, ${item.dateRange}`}
              >
                {/* Timeline axis: company logo (or dot) + connector line — smaller on mobile */}
                <div
                  className="relative flex shrink-0 flex-col items-center pt-0.5"
                  aria-hidden
                >
                  {logo ? (
                    <span className="z-10 flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-secondary bg-primary sm:h-12 sm:w-12">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={48}
                        height={48}
                        sizes="(max-width: 640px) 40px, 48px"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  ) : (
                    <span className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-tertiary bg-primary" />
                  )}
                  {!isLast && (
                    <span className="mt-1.5 w-px flex-1 min-h-[1.5rem] bg-secondary" />
                  )}
                </div>

                {/* Main content beside the axis */}
                <div className="min-w-0 flex-1 space-y-3 text-secondary-foreground">
                  <p className="text-sm text-tertiary">{item.dateRange}</p>
                  <p className="text-base">
                    <span className="font-semibold">{item.role}</span>
                    {" — "}
                    <span>{item.company}</span>
                  </p>
                  <p className="text-sm">{item.location}</p>

                  <ul className="list-disc space-y-1 pl-5">
                    {item.highlights.map((h) => (
                      <li key={`${itemKey}-${h}`}>{h}</li>
                    ))}
                  </ul>

                  <ul
                    aria-label="Technologies and skills"
                    className="flex flex-wrap gap-2"
                  >
                    {item.skills.map((skill) => (
                      <li
                        key={`${itemKey}-${skill}`}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </ScrollReveal>
    </section>
  );
}
