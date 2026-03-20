/**
 * Canonical site strings for metadata and JSON-LD (Task 14.3 — SEO / static HTML).
 * Set `NEXT_PUBLIC_SITE_URL` in env for staging; default matches `DEPLOYMENT.md`.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biratbhattacharjee.com";

export const SITE_TITLE = "Birat Bhattacharjee | Senior Software Engineer";

/** Initial used in generated **`/icon`** and **`/apple-icon`** (favicon / home-screen). */
export const SITE_ICON_INITIAL = "B";

/** Favicon / app-icon colors — dark primary + dark-mode teal accent (`globals.css`). */
export const SITE_ICON_BG = "#0f172a";
export const SITE_ICON_FOREGROUND = "#5eead4";

export const SITE_DESCRIPTION =
  "Birat Bhattacharjee — Senior Software Engineer building real-time web experiences that scale. React, TypeScript, Node.js, Go. Scalable frontend architecture, real-time systems, performance optimisation.";

export const SITE_PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Birat Bhattacharjee",
  jobTitle: "Senior Software Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/birat051",
    "https://www.linkedin.com/in/biratbhattacharjee/",
  ],
} as const;
