/**
 * Lines for the hero CLI “spell-out” animation (Task 22).
 * **Task 22.7:** Devanagari (hi) and Bengali script (as, bn) render via `font-hero-cli` + Noto webfonts in `layout.tsx` / `globals.css`.
 * English + Swedish match `translations.ts` hero.tagline intent; other locales are equivalent taglines.
 *
 * **Task 22.4 — order:** array index defines playback order (en → sv → hi → as → bn).
 * The hero typewriter loops forever; pause between lines is `LINE_PAUSE_MS` in `hero-cli-terminal.tsx`.
 */
export const HERO_CLI_SEQUENCE = [
  {
    code: "en",
    label: "English",
    line: "Real-time web experiences that scale.",
  },
  {
    code: "sv",
    label: "Svenska",
    line: "Realtidswebbupplevelser som skalar.",
  },
  {
    code: "hi",
    label: "हिन्दी",
    line: "रियल-टाइम वेब अनुभव जो स्केल होते हैं।",
  },
  {
    code: "as",
    label: "অসমীয়া",
    line: "ৰিয়েল-টাইম ৱেব অভিজ্ঞতা যিবোৱে স্কেল হয়।",
  },
  {
    code: "bn",
    label: "বাংলা",
    line: "রিয়েল-টাইম ওয়েব অভিজ্ঞতা যা স্কেল করে।",
  },
] as const;

/**
 * **Task 22.9** — same five-language order as `HERO_CLI_SEQUENCE`; each `line` is the display name
 * (Latin or localized script / transliteration).
 */
export const HERO_CLI_NAME_SEQUENCE = [
  {
    code: "en",
    label: "English",
    line: "Birat Bhattacharjee",
  },
  {
    code: "sv",
    label: "Svenska",
    line: "Birat Bhattacharjee",
  },
  {
    code: "hi",
    label: "हिन्दी",
    line: "बिराट भट्टाचार्य",
  },
  {
    code: "as",
    label: "অসমীয়া",
    line: "বিৰাট ভট্টাচাৰ্য",
  },
  {
    code: "bn",
    label: "বাংলা",
    line: "বিরাট ভট্টাচার্য",
  },
] as const;

export type HeroCliLangCode = (typeof HERO_CLI_SEQUENCE)[number]["code"];

export type HeroCliLine = (typeof HERO_CLI_SEQUENCE)[number];

/** One row (tagline or name) — `HeroCliTerminal` accepts any sequence of these. */
export type HeroCliEntry = {
  readonly code: string;
  readonly label: string;
  readonly line: string;
};

export type HeroCliSequence = readonly HeroCliEntry[];
