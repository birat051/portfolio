"use client";

import Image from "next/image";

import heroPhoto from "@/assets/images/photo_op.jpeg";
import { HeroCliTerminal } from "@/components/hero-cli-terminal";
import { SectionSwitcher } from "@/components/section-switcher";
import { HERO_CLI_NAME_SEQUENCE } from "@/data/hero-cli-lines";
import { motion, useReducedMotion } from "@/lib/motion";

type HeroProps = Readonly<{
  sectionItems: readonly { id: string; label: string }[];
  tagline?: string;
  intro?: string;
  /** Task 22.6 — SR-only sentence after the name in `<h1>` (locale-specific). */
  nameHeadingSrNote?: string;
}>;

const DEFAULT_TAGLINE = "Real-time web experiences that scale.";
const DEFAULT_INTRO = "Full-stack developer";
/** Canonical page title / h1 for SEO and screen readers (Task 22.9). */
const HERO_DISPLAY_NAME = "Birat Bhattacharjee";
/** Fallback if `nameHeadingSrNote` is omitted (matches English copy). */
const DEFAULT_NAME_HEADING_SR_NOTE =
  " Decorative terminal: the animated name cycles through English, Swedish, Hindi, Assamese, and Bengali once, then stays in English. Hover pauses; moving the pointer away replays. With reduced motion, only a static name is shown.";

const springSoft = { type: "spring" as const, stiffness: 380, damping: 26 };
const springSnappy = { type: "spring" as const, stiffness: 450, damping: 22 };

export function Hero({
  sectionItems,
  tagline = DEFAULT_TAGLINE,
  intro = DEFAULT_INTRO,
  nameHeadingSrNote = DEFAULT_NAME_HEADING_SR_NOTE,
}: HeroProps) {
  const reduceMotion = useReducedMotion();
  const hoverOff = reduceMotion === true;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-16 md:py-20"
    >
      <div className="flex flex-col items-center gap-8 md:items-start lg:h-full">
        <div className="hidden shrink-0 flex-col items-center gap-3 md:flex">
          <motion.div
            className="rounded-full ring-2 ring-transparent transition-shadow will-change-transform hover:ring-tertiary/25"
            whileHover={hoverOff ? undefined : { scale: 1.04 }}
            whileTap={hoverOff ? undefined : { scale: 0.98 }}
            transition={springSoft}
          >
            <Image
              src={heroPhoto}
              alt="Birat Bhattacharjee"
              width={192}
              height={192}
              priority
              className="h-48 w-48 rounded-full object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          className="min-w-0 text-center md:text-left"
          whileHover={hoverOff ? undefined : { y: -2 }}
          transition={springSoft}
        >
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl"
          >
            {/* Task 22.9 / 22.6: full h1 text for SR/SEO; animated CLI is decorative (`aria-hidden`). */}
            <span className="sr-only">
              {HERO_DISPLAY_NAME}
              {nameHeadingSrNote}
            </span>
            <span className="block">
              <HeroCliTerminal
                animated
                sequence={HERO_CLI_NAME_SEQUENCE}
                chromeBase="name"
                line={HERO_DISPLAY_NAME}
                ariaLabel="Name (animated display)"
                className="mt-0"
              />
            </span>
          </h1>
          <p className="mt-2 text-lg text-tertiary">{tagline}</p>
          <p className="mt-1 text-secondary-foreground">{intro}</p>
        </motion.div>
        <div className="hidden w-full lg:block">
          <SectionSwitcher items={sectionItems} />
        </div>
        <div className="hidden w-full md:block md:pt-6 lg:mt-auto">
          <div className="flex items-center gap-4" aria-label="Social links">
            <motion.a
              href="https://github.com/birat051"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded text-secondary-foreground outline-none transition-colors hover:text-tertiary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              whileHover={hoverOff ? undefined : { scale: 1.12, y: -2 }}
              whileTap={hoverOff ? undefined : { scale: 0.94 }}
              transition={springSnappy}
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/biratbhattacharjee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded text-secondary-foreground outline-none transition-colors hover:text-tertiary focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              whileHover={hoverOff ? undefined : { scale: 1.12, y: -2 }}
              whileTap={hoverOff ? undefined : { scale: 0.94 }}
              transition={springSnappy}
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
