"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  HERO_CLI_SEQUENCE,
  type HeroCliSequence,
} from "@/data/hero-cli-lines";
import { useReducedMotion } from "@/lib/motion";

/** Default ms between graphemes (e.g. if a non-name CLI is used again). Task 22.3 baseline. */
const DEFAULT_CHAR_STEP_MS = 28;
/**
 * Hero **name** (`chromeBase="name"`): **+100 ms** per grapheme vs default (Task 22.11 + follow-ups: +300 → +150 → **+100**).
 */
const NAME_CHAR_STEP_MS = DEFAULT_CHAR_STEP_MS + 100;
/**
 * Pause after a full line finishes before the next language (Tasks 22.4 / 22.5 / **22.11**).
 * Task 22.11: **1000 ms** gap before the next language starts (applies to name CLI).
 * Task 22.4: sequence order from data; **loops** via `langIndex + 1 % length`.
 * Task 22.5: next language only after full line + this pause.
 *
 * **Task 22.14 (name / `chromeBase="name"` only):** run **one** full pass (en → … → bn), then a **final** English line and **hold** (no loop). **Hover** pauses; **mouse leave** restarts from English.
 */
const LINE_PAUSE_MS = 1000;

/** Fixed outer width for the terminal chrome — always this many CSS pixels. */
const CLI_BOX_WIDTH_PX = 325;

function toGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      const segmenter = new Intl.Segmenter(undefined, {
        granularity: "grapheme",
      });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    } catch {
      /* fall through */
    }
  }
  return Array.from(text);
}

type HeroCliTerminalProps = Readonly<{
  /**
   * When true, cycles through `sequence` with a typing animation.
   * When `prefers-reduced-motion` is set, falls back to `line` only.
   */
  animated?: boolean;
  /** Static text, or reduced-motion fallback when `animated` is true. */
  line: string;
  /** Tagline lines (`HERO_CLI_SEQUENCE`) or name lines (`HERO_CLI_NAME_SEQUENCE`). */
  sequence?: HeroCliSequence;
  /** Window title segment: `~/{chromeBase} — {code}`. */
  chromeBase?: "portfolio" | "name";
  ariaLabel?: string;
  /** Extra classes on the outer wrapper (e.g. `mt-0` for use inside `<h1>`). */
  className?: string;
}>;

/**
 * CLI / terminal shell for the hero (Tasks 22.2–22.5, 22.9, 22.11, **22.14**, **22.15**; width fixed at `CLI_BOX_WIDTH_PX`).
 * Theme-aware panel, monospace, **`>`** prompt, blinking **`_`** caret (including after name cycle **done** — Task 22.15), optional typing.
 *
 * **Task 22.7 — scripts:** typed line uses **`font-hero-cli`** in `globals.css` (Geist Mono +
 * Noto Sans Devanagari + Noto Sans Bengali from `layout.tsx`) so Hindi, Bengali, and Assamese
 * (Bengali script) render reliably.
 *
 * **Task 22.6 — accessibility**
 * - **`prefers-reduced-motion`:** when `animated` and `useReducedMotion()` is true, shows static `line` only (no typing loop).
 * - **Screen readers:** name CLI (`chromeBase="name"`) is **`aria-hidden`** with **`role="presentation"`** so assistive tech is not spammed by per-grapheme updates; pair with **`sr-only`** canonical heading text in the parent `<h1>`.
 * - **Do not** put **`aria-live`** on the typed output — it would announce every character or language tick.
 */
export function HeroCliTerminal({
  line,
  animated = false,
  sequence = HERO_CLI_SEQUENCE,
  chromeBase = "portfolio",
  ariaLabel = "Tagline",
  className,
}: HeroCliTerminalProps) {
  const reduceMotion = useReducedMotion();
  const runAnimation = Boolean(animated && reduceMotion !== true);
  const isNameTerminal = chromeBase === "name";

  const charStepMs =
    chromeBase === "name" ? NAME_CHAR_STEP_MS : DEFAULT_CHAR_STEP_MS;

  const [langIndex, setLangIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  /**
   * Name terminal only (Task 22.14): `cycling` = en→…→bn; `closing_en` = final English pass;
   * `done` = frozen on English (typing stopped; **`_` still blinks** — Task 22.15). Portfolio / default: unused (`cycling` only).
   */
  const [nameStage, setNameStage] = useState<
    "cycling" | "closing_en" | "done"
  >("cycling");
  const [hoverPaused, setHoverPaused] = useState(false);
  /** Task 22.14: only **restart** on mouse leave after a hover actually paused the name animation. */
  const pauseHoverActiveRef = useRef(false);

  const entry = sequence[langIndex];
  const graphemes = useMemo(
    () => (runAnimation ? toGraphemes(entry.line) : []),
    [runAnimation, entry.line],
  );

  const restartNameSequence = () => {
    setNameStage("cycling");
    setLangIndex(0);
    setVisibleCount(0);
  };

  /* Task 22.5 / 22.11: advance `langIndex` only after full line + `LINE_PAUSE_MS` (1s). */
  useEffect(() => {
    if (!runAnimation || graphemes.length === 0) {
      return;
    }
    if (hoverPaused) {
      return;
    }
    if (isNameTerminal && nameStage === "done") {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    if (visibleCount < graphemes.length) {
      timeoutId = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, charStepMs);
    } else {
      timeoutId = setTimeout(() => {
        if (isNameTerminal) {
          if (nameStage === "cycling") {
            if (langIndex < sequence.length - 1) {
              setLangIndex((i) => i + 1);
              setVisibleCount(0);
            } else {
              setNameStage("closing_en");
              setLangIndex(0);
              setVisibleCount(0);
            }
          } else if (nameStage === "closing_en") {
            setNameStage("done");
          }
        } else {
          setLangIndex((i) => (i + 1) % sequence.length);
          setVisibleCount(0);
        }
      }, LINE_PAUSE_MS);
    }
    return () => clearTimeout(timeoutId);
  }, [
    runAnimation,
    visibleCount,
    graphemes.length,
    langIndex,
    sequence.length,
    charStepMs,
    hoverPaused,
    isNameTerminal,
    nameStage,
  ]);

  const displayedText = runAnimation
    ? isNameTerminal && nameStage === "done"
      ? sequence[0].line
      : graphemes.slice(0, visibleCount).join("")
    : line;

  const titleSuffix = runAnimation
    ? isNameTerminal && nameStage === "done"
      ? sequence[0].code
      : entry.code
    : "sh";
  const chromePath = chromeBase === "name" ? "name" : "portfolio";

  const lineTypographyClass =
    chromeBase === "name"
      ? "font-hero-cli text-lg leading-relaxed text-primary-foreground sm:text-xl md:text-2xl"
      : "font-hero-cli text-sm leading-relaxed text-primary-foreground sm:text-base";

  return (
    <div
      className={["mt-2 w-full min-w-0 max-w-full", className ?? ""].join(" ")}
      role={isNameTerminal ? "presentation" : "region"}
      aria-label={isNameTerminal ? undefined : ariaLabel}
      aria-hidden={isNameTerminal ? true : undefined}
    >
      <div
        className="shrink-0 overflow-hidden rounded-lg border border-secondary bg-secondary/35 shadow-sm ring-1 ring-secondary/60 dark:bg-secondary/25 dark:ring-secondary/40"
        style={{ width: `${CLI_BOX_WIDTH_PX}px` }}
        onMouseEnter={() => {
          if (runAnimation && isNameTerminal) {
            pauseHoverActiveRef.current = true;
            setHoverPaused(true);
          }
        }}
        onMouseLeave={() => {
          if (!isNameTerminal) {
            return;
          }
          setHoverPaused(false);
          if (runAnimation && pauseHoverActiveRef.current) {
            pauseHoverActiveRef.current = false;
            restartNameSequence();
          }
        }}
      >
        <div className="flex items-center gap-2 border-b border-secondary/90 bg-secondary/55 px-3 py-1.5 text-xs font-mono text-secondary-foreground dark:border-secondary dark:bg-secondary/40">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-red-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </span>
          <span className="min-w-0 flex-1 truncate text-[11px] opacity-80 sm:text-xs">
            ~/{chromePath} — {titleSuffix}
          </span>
        </div>
        <div className="max-w-full overflow-x-auto px-3 py-2.5 sm:py-3">
          <p
            className={[
              "inline min-w-0 break-words",
              lineTypographyClass,
            ].join(" ")}
          >
            <span
              className="select-none font-semibold text-tertiary"
              aria-hidden
            >
              {">"}
            </span>{" "}
            <span>{displayedText}</span>
            <span
              className="cli-cursor-blink ml-0.5 inline-block translate-y-px align-baseline font-mono font-semibold text-tertiary"
              aria-hidden
            >
              _
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
