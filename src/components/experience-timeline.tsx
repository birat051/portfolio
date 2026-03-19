"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import healthplixLogo from "@/assets/images/healthplix_logo.jpeg";
import hitachiVantaraLogo from "@/assets/images/hitachi_vantara.jpeg";
import mpscLogo from "@/assets/images/mpsc_logo.png";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, useReducedMotion } from "@/lib/motion";

import type { ExperienceTimelineItem } from "@/components/types";

const COMPANY_LOGO_MAP: Record<string, { src: typeof healthplixLogo; alt: string }> = {
  "Healthplix Technologies": { src: healthplixLogo, alt: "Healthplix Technologies" },
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
  expandJobDetailsLabel: string;
  collapseJobDetailsLabel: string;
}>;

export function ExperienceTimeline({
  id: sectionId,
  headingId,
  title,
  timeline,
  expandJobDetailsLabel,
  collapseJobDetailsLabel,
}: ExperienceTimelineProps) {
  const reduceMotion = useReducedMotion();
  const hoverOff = reduceMotion === true;
  const motionInstant = reduceMotion === true;

  const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>(
    {},
  );

  const toggle = useCallback((key: string) => {
    setExpandedByKey((prev) => ({
      ...prev,
      [key]: !(prev[key] ?? true),
    }));
  }, []);

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

        <ol
          className="mt-8 list-none pl-0"
          aria-label="Work experience timeline"
        >
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1;
            const itemKey = `${item.role}-${item.company}-${item.dateRange}`;
            const stateKey = `${sectionId}-${index}-${itemKey}`;
            const logo = getLogo(item.company);
            const open = expandedByKey[stateKey] !== false;
            const panelId = `${sectionId}-details-${index}`;
            const buttonId = `${sectionId}-toggle-${index}`;

            return (
              <motion.li
                key={itemKey}
                className="relative flex gap-3 pb-6 last:pb-0 sm:gap-4 sm:pb-8"
                aria-label={`${item.role} at ${item.company}, ${item.dateRange}`}
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
                  className="min-w-0 flex-1 space-y-3 rounded-xl border border-transparent px-2 py-1 text-secondary-foreground -mx-2 transition-colors hover:border-secondary/80 hover:bg-secondary/20"
                  variants={hoverOff ? undefined : contentVariants}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 text-sm text-tertiary">
                      {item.dateRange}
                    </p>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      aria-label={
                        open
                          ? `${collapseJobDetailsLabel} — ${item.role}, ${item.company}`
                          : `${expandJobDetailsLabel} — ${item.role}, ${item.company}`
                      }
                      onClick={() => toggle(stateKey)}
                      className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-tertiary outline-none transition-colors hover:bg-secondary/60 hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    >
                      <motion.span
                        aria-hidden
                        className="inline-flex"
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={
                          motionInstant
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 320, damping: 24 }
                        }
                      >
                        {/* Chevron down = collapsed; rotated 180° = up when expanded */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </motion.span>
                    </button>
                  </div>
                  <p className="text-base">
                    <span className="font-semibold text-primary-foreground">
                      {item.role}
                    </span>
                    {" — "}
                    <span>{item.company}</span>
                  </p>
                  <p className="text-sm">{item.location}</p>

                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={
                      motionInstant
                        ? { duration: 0 }
                        : {
                            height: {
                              duration: 0.42,
                              ease: [0.33, 1, 0.68, 1],
                            },
                            opacity: { duration: 0.22 },
                          }
                    }
                    style={{ overflow: "hidden" }}
                    aria-hidden={!open}
                    className={open ? "" : "pointer-events-none"}
                  >
                    <div className="space-y-3 pb-1 pt-1">
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
                          <motion.li
                            key={`${itemKey}-${skill}`}
                            className="cursor-default rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground ring-2 ring-transparent transition-shadow hover:ring-tertiary/25"
                            whileHover={
                              hoverOff ? undefined : { scale: 1.06, y: -2 }
                            }
                            whileTap={hoverOff ? undefined : { scale: 0.97 }}
                            transition={springChip}
                          >
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </ScrollReveal>
    </section>
  );
}
