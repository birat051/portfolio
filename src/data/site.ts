/**
 * Canonical site strings for metadata and JSON-LD (Task 14.3 — SEO / static HTML).
 * Set `NEXT_PUBLIC_SITE_URL` in env for staging; default matches `DEPLOYMENT.md`.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biratbhattacharjee.com";

/** Task 51–53 — Title: role + geography (hero uses “Frontend focused full-stack developer”). */
export const SITE_TITLE =
  "Birat Bhattacharjee | Frontend Focused Full-Stack Developer, Gothenburg, Sweden";

/** Initial used in generated **`/icon`** and **`/apple-icon`** (favicon / home-screen). */
export const SITE_ICON_INITIAL = "B";

/** Favicon / app-icon colors — dark primary + dark-mode teal accent (`globals.css`). */
export const SITE_ICON_BG = "#0f172a";
export const SITE_ICON_FOREGROUND = "#5eead4";

/** Task 51–53 — Meta description (matches visible positioning phrase + geography + stack). */
export const SITE_DESCRIPTION =
  "Frontend focused full-stack developer based in Gothenburg, Sweden. Real-time products, React, TypeScript, Node.js, and Go — scalable UI, performance, and reliability.";

/** Task 51–53 — Supplemental keywords (title/description primary). */
export const SITE_KEYWORDS: readonly string[] = [
  "Birat Bhattacharjee",
  "senior full-stack developer",
  "senior frontend developer",
  "frontend focused full-stack developer",
  "frontend focused developer",
  "full-stack developer Gothenburg",
  "frontend developer Gothenburg",
  "full-stack developer Sweden",
  "frontend developer Sweden",
  "Gothenburg",
  "Göteborg",
  "Sweden",
  "Sverige",
  "React developer",
  "TypeScript developer",
];

export const SITE_PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Birat Bhattacharjee",
  jobTitle: "Frontend Focused Full-Stack Developer — Gothenburg, Sweden",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gothenburg",
    addressCountry: "SE",
  },
  knowsAbout: [
    "Frontend focused full-stack development",
    "Full-stack web development",
    "Frontend development",
    "React",
    "TypeScript",
    "Node.js",
    "Go",
    "Real-time web applications",
    "Web performance",
  ],
  sameAs: [
    "https://github.com/birat051",
    "https://medium.com/@biratbhattacharjee",
    "https://www.linkedin.com/in/biratbhattacharjee/",
  ],
} as const;
