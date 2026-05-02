# Homepage implementation plan

Tasks and subtasks for the default landing page. Aligned with `PORTFOLIO_PLAN.md` and `PROJECT_GUIDELINES.md`.

**Agent / contributor workflow:** For **new or changed homepage work**, add or extend a **Task _N_** section with **numbered subtasks** in this file **before** writing implementation code. Check off subtasks as they ship. (See `.cursor/rules/homepage-plan-first.mdc`.)

---

## Checklist

Use this list to track progress. Mark items with `[x]` when done.

- [x] **Task 1: SEO and document structure**
  - [x] 1.1 Set page metadata (title, description with “Birat Bhattacharjee”)
  - [x] 1.2 Single `<main>`, one `<h1>`, logical `<h2>` per section
  - [x] 1.3 Semantic HTML for main structure
- [x] **Task 2: Accessibility**
  - [x] 2.1 Skip link (“Skip to main content”) → `#main-content`
  - [x] 2.2 Landmarks: header, main, footer, nav with accessible name **Done:** **`<header>`** banner via **`SitePreferencesHeader`** (outside **`<main>`**); **`main`** `#main-content`; **`<footer>`** **`contentinfo`** with **`aria-label`**; section **`<nav>`** in **`SectionSwitcher`** uses locale **`t.a11y`** strings (**`translations.ts`**).
  - [x] 2.3 Heading hierarchy (h1 → h2, no skips) **Done:** single **`h1`** in **`Hero`**; section **`h2`**s; **`h3`** for each experience job title (**`experience-timeline.tsx`**, was **`p`**) and each case-study card (**`case-studies-section.tsx`**); contract noted in **`home-content.tsx`**.
  - [x] 2.4 Visible focus styles on interactive elements **Done:** **`@layer base`** **`:focus-visible`** outline (**`var(--tertiary)`**) in **`globals.css`** for **`a[href]`**, **`button`**, **`input`**, **`textarea`**, **`select`**, **`summary`**; existing **`outline-none` + `focus-visible:ring-*`** on header, hero links, section nav, case-study links, experience toggle, theme/language, skip link ( **`focus:`** ring) unchanged and override outline where set.
  - [x] 2.5 Full keyboard flow; no focus traps **Done:** audited — no dialogs / Tab-capture; skip link → header controls → **`main`**; tab order noted in **`home-content.tsx`**. _(Experience jobs no longer use expand/collapse — **`Task 34`**.)_
  - [x] 2.6 Screen-reader friendly structure **Done:** **`document.documentElement.lang`** syncs with locale (**`locale-context.tsx`**); EN/SV **`a11y`** strings for skip link, hero socials, experience timeline/skills/row template, theme + language controls (**`translations.ts`**); **`articlesListAriaLabel`** on case-study list; removed duplicate **`sr-only`** inside social links (**`aria-label`** only); **`formatExperienceJobRowAriaLabel`** helper.
- [x] **Task 3: Header and navigation**
  - [x] 3.1 Header with site identity
  - [x] 3.2 Nav with in-page links (Hero, What problems I solve, main sections)
  - [x] 3.3 Static nav; keyboard accessible
- [x] **Task 4: Hero (short intro)**
  - [x] 4.1 Name (h1), tagline, short intro line
  - [x] 4.2 Profile photo on homepage (LinkedIn style); use/move photo for optimal delivery
  - [x] 4.3 Theme colours and responsive layout
  - [x] 4.4 GitHub and LinkedIn logos below profile photo, linking to profiles (github.com/birat051, linkedin.com/in/biratbhattacharjee)
- [x] **Task 5: “What problems I solve”**
  - [x] 5.1 Section with clear h2
  - [x] 5.2 Placeholder content only
  - [x] 5.3 Replace placeholder with About copy from `PORTFOLIO_PLAN.md`
  - [x] 5.4 Refresh body copy (frontend-focused positioning, stack breadth, team fit); EN + SV in `translations.ts`, parity in `sections.json`
- [ ] **Task 6: Main sections (placeholders)**
  - [x] 6.1 One block per section (7 sections)
  - [x] 6.2 Each: `<section>`, `<h2>`, placeholder
  - [x] 6.3 Nav links target section ids
  - [ ] 6.4 Replace placeholders with actual content (when copy/items are provided)
- [ ] **Task 7: Scroll animations**
  - [x] 7.1 Client scroll-reveal component (fade/slide on scroll)
  - [x] 7.2 Used only for section reveal; content stays server-rendered
  - [x] 7.3 Animations subtle and non-distracting
- [x] **Task 8: Footer**
  - [x] 8.1 Minimal footer (name, year)
  - [x] 8.2 `<footer>` landmark, theme styling
- [x] **Task 9: Theme, layout, and components**
  - [x] 9.1 Theme tokens only (primary, secondary, tertiary)
  - [x] 9.2 Responsive layout
  - [x] 9.3 Required components created; homepage assembles them
  - [x] 9.4 Server Components by default; client only for scroll-reveal
- [x] **Task 10: Quality and guidelines**
  - [x] 10.1 ESLint clean
  - [x] 10.2 No extra features or code
  - [x] 10.3 No regressions to existing behaviour

---

## Next iteration (requested changes)

- [x] **Task 11: Reduce horizontal margin**
  - [x] 11.1 Reduce overall horizontal padding to **3rem** on both sides (i.e. `px-12` equivalent) for main content containers.
  - [x] 11.2 Ensure the 3rem rule applies consistently across hero + all sections + header/footer (or validate removal where applicable).

- [x] **Task 12: Split layout (hero + main content side-by-side)**
  - [x] 12.1 Update layout so the hero is displayed side-by-side with the main content (desktop), stacked on small screens.
  - [x] 12.2 Confirm anchor scrolling and section reveal still work with the new layout. **Done:** verified **`section[id]`** targets in the main column; **`IntersectionObserver`** + **`ScrollReveal`** use viewport (document scroll); **`scroll-padding-top: 3.5rem`** + optional **`scroll-behavior: smooth`** (respects reduced motion) in **`globals.css`** so hash links clear the preferences header.

- [x] **Task 13: Remove header**
  - [x] 13.1 Remove the header completely.
  - [x] 13.2 Ensure the skip link still functions and focus order remains correct. **Done:** **`tabIndex={-1}`** on **`<main id="main-content">`**; skip link **`onClick`** focuses main after hash navigation; **`#main-content:focus`** outline in **`globals.css`**; DOM order unchanged (**`SkipLink`** → preferences header → **`main`** → **`Footer`**); removed unused **`header.tsx`**.

- [x] **Task 14: Brittany-style scroll “section switch” hero**
  - [x] 14.1 Redesign the hero interaction so scrolling up/down visually “switches” between sections.
  - [x] 14.2 Keep motion subtle, accessible, and respect reduced-motion settings.
  - [x] 14.3 Ensure this does not break static content/SEO (content still renders as HTML). **Done:** Main copy and `<section id="…">` blocks stay in the DOM as HTML (SSR); `SectionSwitcher` is anchor + `IntersectionObserver` only (see **`hero.tsx`**, **`section-switcher.tsx`**). **`src/data/site.ts`** + **`layout.tsx`** (`metadataBase`, Open Graph, Twitter, `robots`), **`page.tsx`** (canonical + Person **JSON-LD**).

- [x] **Task 15: Fixed social links at bottom**
  - [x] 15.1 Move GitHub + LinkedIn links to the bottom of the hero area and keep them **fixed at the bottom of the page**.
  - [x] 15.3 Fix GitHub + LinkedIn icons to the bottom of the **hero section only** (not the overall page layout).
  - [x] 15.2 Ensure they remain keyboard accessible, do not overlap content, and are responsive.

- [x] **Task 16: Responsive margins and padding (new spacing system)**
  - [x] 16.1 Desktop/tablet: keep only **page margins** at **3rem** while keeping **padding** at **2rem** for internal containers.
  - [x] 16.2 Mobile: reduce **page margins** to **1rem** and **padding** to **0.75rem**.
  - [x] 16.3 Apply consistently across hero, content sections, and footer; ensure no horizontal scroll.

- [x] **Task 17: Mobile refactor**
  - [x] 17.1 On mobile devices and ipad, hide the profile photo in the hero.
  - [x] 17.2 On mobile devices and ipad, hide the hero interaction.

- [x] **Task 18: CV-driven Experience timeline**
  - [x] 18.1 Review `src/assets/documents/Birat_Bhattacharjee_CV.pdf` and extract experience timeline entries (role, company, dates, summary/description).
  - [x] 18.2 For each experience entry, extract technologies/skills to display as tiles.
  - [x] 18.3 Update `src/data/sections.json` to add a new `experience` section (`id`, `headingId`, `title`) and the timeline payload (experiences + skills) **after the “What problems I solve” section**.
  - [x] 18.4 Extend the homepage rendering to support an `experience` section type (render timeline + skill tiles instead of paragraph placeholders).
  - [x] 18.5 Create `src/components/experience-timeline.tsx` to render a timeline UI and skill tiles beneath each experience (server component; integrate with existing theme + `ScrollReveal`).
  - [x] 18.6 Ensure accessibility for the timeline and tiles (semantic structure, keyboard/screen-reader friendly).
  - [x] 18.7 Ensure the “section switcher” includes `Experience` and anchor scrolling works for the new `experience` section.
  - [x] 18.8 Run `npm run lint` and `npm run build` to confirm no regressions.
  - [x] 18.9 Redesign the experience section into a **vertical timeline UI** similar to [Material UI Timeline](https://mui.com/material-ui/react-timeline/): a vertical axis with a node per item, connector line between nodes, and main content (role, company, dates, highlights, skills) beside the axis.
  - [x] 18.10 At each timeline node (where each company/entry starts), display the **company logo** from `src/assets/images/` — e.g. Healthplix: `healthplix_logo.jpeg`, MPSC: `mpsc_logo.png`, Hitachi Vantara: `hitachi_vantara.jpeg`. Follow the [MUI Timeline customization](https://mui.com/material-ui/react-timeline/#customization) pattern: logo in the separator/dot position (where the timeline node is), company heading and content in the content area.
  - [x] 18.11 Map each timeline entry to its logo asset (by company name or id), use `next/image` for logos with appropriate `alt` (company name), and keep layout responsive (e.g. stacked or smaller axis on mobile).
  - [x] 18.12 Ensure the new timeline layout remains accessible (semantic list/items, focus order, screen-reader friendly) and run `npm run lint` and `npm run build` to confirm no regressions.

- [x] **Task 19: Language switcher (English / Swedish)**
  - [x] 19.1 Add a UI control at the top of the page (above main content) to switch language between English and Swedish.
  - [x] 19.2 Show British flag icon and the word "English" for the English option; Swedish flag icon and the word "Svenska" for the Swedish option.
  - [x] 19.3 When the user switches to Swedish, all homepage content (hero, section headings, body copy, experience timeline, footer, nav labels) is displayed in Swedish translation.
  - [x] 19.4 Persist language choice (e.g. URL param, cookie, or localStorage) so the selected language is retained on reload/navigation.
  - [x] 19.5 Ensure the language switcher is keyboard accessible and screen-reader friendly (e.g. `aria-label`, current language announced).
  - [x] 19.6 Run `npm run lint` and `npm run build` to confirm no regressions.

- [x] **Task 20: Theme switcher (light / dark mode)**
  - [x] 20.1 Add or confirm Tailwind color schemes for **light theme** (ensure light mode variables are defined and used consistently in `globals.css`).
  - [x] 20.2 Create a **theme switcher UI** with **night** (moon) and **day** (sun) icons to switch between light and dark mode.
  - [x] 20.3 Place the theme switcher in the **left-hand corner** of the header bar, **opposite** the language switcher (language switcher remains on the right).
  - [x] 20.4 Persist the theme choice (e.g. localStorage or cookie) so the selected mode is retained on reload/navigation.
  - [ ] 20.5 Ensure the theme switcher is keyboard accessible and screen-reader friendly (e.g. `aria-label`, current theme announced).
  - [x] 20.6 Run `npm run lint` and `npm run build` to confirm no regressions.
  - [x] 20.7 Show the light and dark mode options in a **toggle button** with a **switching animation**.

- [x] **Task 21: Framer Motion (homepage interactions)**
  - [x] 21.1 Add the **Framer Motion** library (`motion` / `framer-motion`) to the project and wire it for use in Next.js (App Router) where needed.
  - [x] 21.2 Build **interactive scroll-based animations** on the homepage (e.g. scroll-linked or in-view motion) while keeping content discoverable and aligned with `PROJECT_GUIDELINES.md` (e.g. respect `prefers-reduced-motion` where applicable).
  - [x] 21.3 Add **hover interactions and animations** for hero section elements (e.g. photo, links, headings, or key UI) without hurting keyboard focus or readability.
  - [x] 21.4 Add **hover interactions and animations** for experience timeline items (e.g. entries, nodes, or skill tiles) so motion reinforces hierarchy without breaking accessibility.
  - [x] 21.5 Run `npm run lint` and `npm run build` to confirm no regressions.
  - [x] 21.6 Remove the **extra line** below the header (theme / language bar) so the top bar does not show redundant dividers or stray UI chrome.
  - [x] 21.7 In the **experience timeline**, add a control to **show or hide** each job’s **description body** (highlights, extended copy, or the collapsible block you define) with a **fluid open/close animation** (e.g. Framer Motion height/opacity or `AnimatePresence`); keep it **keyboard accessible** (`button` or disclosure pattern, `aria-expanded`, focus styles) and respect **`prefers-reduced-motion`**.
  - [x] 21.8 Replace the **Show/Hide details** row with an **up/down arrow** at the **far end of the date line** (date on one side, arrow on the other): **down** when details are **collapsed**, **up** when **expanded**; keep the same **fluid animation**, **`aria-expanded` / `aria-label`**, keyboard focus, and **`prefers-reduced-motion`**.
  - [x] 21.9 **Default collapsed:** Each job’s detail panel **starts collapsed** on load; only **`expandedByKey[stateKey] === true`** after the user toggles (**`experience-timeline.tsx`**).

- [x] **Task 22: Hero CLI-style multilingual “spell-out”**
  - [x] 22.1 Add **copy for the hero line(s)** to spell out in **five languages**: **English**, **Swedish**, **Hindi**, **Assamese**, and **Bengali** (same intent as the current tagline/intro or a dedicated CLI phrase — store in data, e.g. extend translations or a small `hero-cli` strings module).
  - [x] 22.2 Style a **CLI / terminal block** in the hero (e.g. monospace, dark-on-light or theme-aware panel, optional **prompt** `$` / `>` and cursor affordance) without hurting layout on mobile.
  - [x] 22.3 Implement **character-by-character (or word-by-word) “typing” animation** in CLI style (timing, cursor blink, optional line breaks); prefer a **client component** and reuse **Framer Motion** or `requestAnimationFrame` as appropriate.
  - [x] 22.4 **Sequence all five languages** in the hero (define order, pause between lines, and whether the animation **loops**); keep behaviour predictable and not distracting per `PROJECT_GUIDELINES.md`.
  - [x] 22.5 **Chain typing per language:** Only after the **full line** in the **current** language has been typed out and that step’s animation is **complete** (including any end-of-line pause), **start typing** the line in the **next** language; continue through **all five** in order, then **loop** or **stop** (document the chosen behaviour in code or comments).
  - [x] 22.6 **Accessibility:** respect **`prefers-reduced-motion`** (show final text or static fallback), provide a **clear screen-reader experience** (e.g. `aria-live` used carefully or **sr-only** full text so assistive tech is not spammed).
  - [x] 22.7 **Fonts / scripts:** ensure **Devanagari and Bengali** (and Assamese, typically Bengali script) **render reliably** (system stack and/or `next/font` / subsetted webfont).
  - [x] 22.8 Run **`npm run lint`** and **`npm run build`** to confirm no regressions.
  - [x] 22.9 Apply the **same CLI terminal + grapheme typing + five-language chain** pattern to the **hero name** (`<h1>` / visible name), **not** the tagline/description: add **name strings** for **English, Swedish, Hindi, Assamese, and Bengali** in data (Latin, transliteration, or native script as you choose), wire a **second terminal row** (or dedicated name block) that **loops independently** or in sync per your UX choice, keep **`prefers-reduced-motion`** fallback to a **single static name**, and preserve a **correct accessible heading** (e.g. one stable `<h1>` for SEO with visually animated content, or an equivalent pattern per guidelines).
  - [x] 22.10 **Remove** the **CLI terminal / multilingual typing** from the **hero tagline / description** — show the tagline as **normal text** (or existing typography) again; keep the CLI spell-out **only** for the **hero heading / name** (unless product choice says otherwise).
  - [x] 22.11 For the **hero heading (name)** CLI only: **slow typing** by **+300 ms** per step vs the current default (e.g. dedicated `CHAR_DELAY_MS` or name-only timing), and use a **1 second** gap after a language finishes (before the **next** language starts typing) — set **`LINE_PAUSE_MS` (or name-only equivalent) to 1000 ms** and document in code.
  - [x] 22.12 Use an **underscore (`_`)** as the CLI “caret” for the typing animation (instead of a pipe-style block / `|`), and **speed up** name typing by **50 ms** per grapheme vs the prior step (document in `hero-cli-terminal.tsx`).
  - [x] 22.13 **CLI width:** hero CLI panel is **fixed to 325 px** (`CLI_BOX_WIDTH_PX` + inline `width` in `hero-cli-terminal.tsx`); long lines use **horizontal scroll** inside the content row.
  - [x] 22.14 **Name CLI — one cycle then English:** hero **name** terminal types **all five** names in order once (same timing/chain as before), then types **English** a **final** time and **stays** on English (no infinite loop). **Pointer enters** the CLI box → **pause**; **pointer leaves** (after a hover that paused) → **restart** from English (document in `hero-cli-terminal.tsx`).
  - [x] 22.15 After the **name** CLI cycle **finishes** (resting on English), keep the **`_` caret blinking** with the same **`cli-cursor-blink`** animation as during typing (`prefers-reduced-motion` still disables blink in `globals.css`).

- [x] **Task 23: Engineering case studies — JSON-driven external articles (e.g. Medium)**

  **Planning note:** This task was defined _before_ implementation (see project rule **homepage plan first**). Subtasks below are tracked as work completes.
  - [x] 23.1 Add **`src/data/case-studies-blogs.json`** listing external write-ups (`id`, `title`, `url`, `source`, `publishedAt`, optional `summary` / `tags`); document the schema in **`src/data/case-studies-blogs.ts`**.
  - [x] 23.2 Export **`getCaseStudyBlogs()`** (or equivalent) returning entries sorted **newest `publishedAt` first** so new JSON rows render without further code changes.
  - [x] 23.3 Add **`CaseStudiesSection`** (cards, accessible external links, `ScrollReveal`, empty state) and wire **`case-studies`** in **`home-content.tsx`** instead of the generic placeholder.
  - [x] 23.4 Add **`caseStudiesUi`** strings to **`translations.ts`** (EN + SV) for section intro, “Read on {source}”, published label, new-tab hints, and tag list **`aria-label`**.
  - [x] 23.5 Populate JSON with real article(s) (e.g. Medium); run **`npm run lint`** and **`npm run build`**.

- [ ] **Task 24: Glass hover + external-link icon (case studies & experience)**
  - [x] 24.1 **Case studies:** remove **“Read on {source}”** button; show a **redirect / external-link icon** beside the **title** (same link as the article).
  - [ ] 24.2 **Case studies:** ~~on **hover** / **`focus-within`**, show an **Apple-style glass** panel~~ **Reverted** — no hover glass; **summary** is shown **in the card** again (`case-studies-section.tsx`).
  - [ ] 24.3 **Experience timeline:** ~~same **glass hover** on each job row~~ **Reverted** — no glass overlay; inline content + expand/collapse only (`experience-timeline.tsx`). Removed unused **`.glass-apple-panel`** from **`globals.css`**.
  - [x] 24.4 Add any new **EN + SV** strings in **`translations.ts`**; run **`npm run lint`** and **`npm run build`**.
  - [x] 24.5 **Case studies:** show the **card box** (border / rounded panel / shadow ring currently always on each article card) **only on hover** — and on **`focus-within`** when the title link or any focusable control inside the card is focused — so the default state is flatter/cleaner (`case-studies-section.tsx`).
  - [x] 24.6 **Case studies:** remove the **published details** line from each blog card (e.g. **Published** label, formatted date, **`{source}`**). Keep **`publishedAt`** (and **`source`** if still useful) in **`case-studies-blogs.json`** for sorting / future use; drop **`published`** from **`caseStudiesUi`** in **`translations.ts`** if unused after removal (`case-studies-section.tsx`).

- [x] **Task 25: Pointer cursor on links and buttons (site-wide)**
  - [x] 25.1 Show **`cursor: pointer`** for all **hyperlinks** (`<a href>`) and **`<button>`** elements across the project. Prefer a **global baseline** in **`globals.css`** (e.g. `a[href], button { cursor: pointer; }`) and add **`cursor-pointer`** in components only where needed for non-standard interactive nodes; use **`cursor: not-allowed`** (or equivalent) for **`disabled`** buttons where appropriate. Audit **header**, **hero**, **footer**, **case studies**, **experience**, **theme / language** controls, and **skip link**; run **`npm run lint`** and **`npm run build`**. **Done:** global rules in **`globals.css`** (includes **`input[type=button|submit|reset]`**); **`cursor-default`** skill chips in **`experience-timeline.tsx`** unchanged (not links/buttons).

- [x] **Task 26: Swedish language support — Engineering Case Studies section**

  **Context:** Section chrome (**`caseStudiesUi`**) already has EN/SV in **`translations.ts`**, but **per-article** **`title`**, **`summary`**, and **`tags`** in **`case-studies-blogs.json`** are English-only. When the site locale is **Swedish**, cards should show **Swedish** titles/summaries (and tags if translated) where available, while **`url`** / **`source`** / **`publishedAt`** stay shared.
  - [x] 26.1 **Data model:** extend the case-study schema (JSON + **`case-studies-blogs.ts`**) with optional Swedish fields (e.g. **`titleSv`**, **`summarySv`**, optional **`tagsSv`**) or an equivalent locale map; document fallbacks (**English** when Swedish is missing). **Done:** optional **`titleSv`**, **`summarySv`**, **`tagsSv`** on **`CaseStudyBlogEntry`** + JSDoc table in **`case-studies-blogs.ts`** (existing JSON rows valid with no SV keys until **26.4**).
  - [x] 26.2 **Data access:** update **`getCaseStudyBlogs()`** (or add **`getCaseStudyBlogsForLocale(locale)`**) so the UI receives entries with **resolved display fields** for the active locale. **Done:** **`CaseStudyBlogDisplay`**, **`resolveCaseStudyBlogForLocale`**, **`getCaseStudyBlogsForLocale`** in **`case-studies-blogs.ts`**; **`home-content`** memoizes on **`locale`**; **`CaseStudiesSection`** typed with **`CaseStudyBlogDisplay[]`**.
  - [x] 26.3 **UI:** wire **`CaseStudiesSection`** / **`home-content.tsx`** to pass **`locale`** (or pre-resolved entries) so Swedish users see Swedish copy; keep **`opensInNewTab`**, **`emptyPlaceholder`**, **`tagsListAriaLabel`**, etc. from existing **`caseStudiesUi`**. **Done:** **`locale`** + **`getCaseStudyBlogsForLocale(locale)`** from **`home-content`**; **`caseStudiesUi`** from **`t`**; **`lang`** on **`<section>`** (`en` / `sv`).
  - [x] 26.4 **Content:** add **Swedish** strings for existing articles in **`case-studies-blogs.json`** (titles/summaries; translate or adapt tags only if desired). **Done:** **`titleSv`**, **`summarySv`**, **`tagsSv`** for WebRTC- och Next.js-artiklarna (tekniska etiketter delvis oförändrade).
  - [x] 26.5 Run **`npm run lint`** and **`npm run build`**. **Done:** run after **26.4** (same verification).

- [x] **Task 27: Fix section switcher active state when scrolling back to the top**

  **Context / bug (resolved):** Scrolling **down** (e.g. from **What problems I solve** → **Engineering case studies**) updates the hero section switcher correctly. Scrolling **back up** to the **top of the page** used to leave the switcher on **Engineering case studies**; **27.3** fixed stale **`activeId`**; **27.4** covered hash / short viewport / reduced motion.
  - [x] 27.1 **Reproduce** consistently (desktop layout with sticky hero + main column scroll); note viewport height, scroll position at “top”, and which section ids are observed (**`section-switcher.tsx`** + **`sections.json`** / **`home-content.tsx`**). **Done — reproduction notes:**
    - **When:** **`lg` breakpoint and up** (side-by-side layout). **`home-content.tsx`:** hero column **`lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)]`**; main column scrolls with **document** (`window` / root scroll; not a nested scroll container).
    - **Steps:** (1) Load `/`. (2) Scroll **down** until **Engineering case studies** is highlighted in the hero section nav. (3) Scroll **back up** until **`window.scrollY`** is **0** (or visually the top of the page / first section in view). **Expected:** active nav matches **What problems I solve** (or whichever section occupies the observer “focus” band). **Actual:** active nav can **remain** **Engineering case studies**.
    - **Observed section ids** (order from **`sections.json`**, wired via **`home-content.tsx`** → **`sectionItems`** → **`SectionSwitcher`):** **`problems`** → **`experience`** → **`case-studies`** → **`demos`** → **`ai`**. Each maps to **`<section id="…">`** (or equivalent) in the main column via **`ContentSection`** / **`ExperienceTimeline`** / **`CaseStudiesSection`**.
    - **Observer setup (**`section-switcher.tsx`**):** **`root: null`** (viewport), **`rootMargin: "-10% 0px -70% 0px"`** (effective intersection band ≈ middle **20%** of viewport height), **`threshold: [0, 0.1, …, 1]`**.
    - **At “top”:** **`scrollY ≈ 0`**; first sections are in the upper viewport; the sticky hero occupies the **left** column only — **does not** change the fact that **`IntersectionObserver`** uses the **viewport** as root.
    - **Hypothesis for 27.2:** Callback uses **`let bestId = activeId`** and **`bestId !== activeId`** to decide whether to **`setActiveId`**, but **`useEffect`** only depends on **`ids.join("|")`**, so **`activeId` inside the observer callback is a stale closure** (typically the **initial** **`items[0].id`** = **`problems`**). After state has moved to **`case-studies`**, scrolling back can compute **`bestId === "problems"`** while comparing to **stale `activeId === "problems"`**, so **`setActiveId`** is **skipped** and the UI stays on **`case-studies`**. **27.2** should confirm (e.g. logging or deps fix spike).
  - [x] 27.2 **Identify root cause** (e.g. **`IntersectionObserver`** thresholds / **`rootMargin`** vs sticky hero; sections no longer crossing observer thresholds when scrolling up; “highest visibility” tie-break or ratio map not resetting for upper sections). **Done — root cause:**
    - **Primary (confirmed):** **`activeId` stale closure** in **`section-switcher.tsx`**. The **`IntersectionObserver`** callback reads **`activeId`** from the render that ran when the effect last executed (`useEffect` deps: **`[ids.join("|")]`** only; **`eslint-disable-next-line react-hooks/exhaustive-deps`**). With stable **`ids`**, the effect runs **once on mount**, so **`activeId` inside the callback is frozen** at **`items[0]?.id`** (e.g. **`problems`**). The loop still computes the correct **`bestId`** from intersection ratios, but **`if (bestId && bestId !== activeId)`** compares **`bestId`** to that **frozen** value. After React state has updated to **`case-studies`**, scrolling back yields **`bestId === "problems"`** and **`stale activeId === "problems"`** → condition is **false** → **`setActiveId`** never runs → UI stuck on **`case-studies`**.
    - **Not primary:** Sticky hero does **not** change **`IntersectionObserver`**’s root (still **viewport** / **`null`**). **`rootMargin`** / thresholds shape _which_ section wins the ratio race but do **not** explain “correct **`bestId`** yet no state update”; that mismatch is explained by the closure bug alone.
    - **Secondary (optional hardening in 27.3):** The **`ratios`** **`Map`** is only updated for targets present in each **`entries`** batch; other ids keep prior ratios until their next event. Unlikely to be the main “scroll to top” failure once the closure is fixed; revisit only if odd ties remain.
  - [x] 27.3 **Implement fix** in **`section-switcher.tsx`** (or related layout/observer setup) so the active id always reflects the **main-column section most in view**, including when the user returns to **scrollY ≈ 0** / first sections — without breaking anchor clicks or keyboard focus. **Done:** Functional updater **`setActiveId((prev) => (prev === bestId ? prev : bestId))`** so the guard uses **live** React state, not the observer’s stale **`activeId`**. **`bestId`** seed is **`ids[0]`** (not closure **`activeId`**). Effect deps **`[ids]`**; removed **`eslint-disable`** for **`exhaustive-deps`**.
  - [x] 27.4 **Edge cases:** hash / **`#section-id`** navigation, very short viewports, and **`prefers-reduced-motion`** (behaviour should stay correct; motion is separate). **Done:** **`hashchange`** + double **`requestAnimationFrame`** after mount sync **`activeId`** when **`location.hash`** matches a known **`ids`** entry (direct links, in-page anchors, back/forward). **`innerHeight < 480`** uses a milder **`rootMargin`** (`-8% 0px -52% 0px`) so the intersection band stays ~40% of viewport; **`resize`** + **`visualViewport`** **`resize`** reconnect the observer. **`prefers-reduced-motion`:** already disables Framer hover/tap on nav links; highlight is IO/hash-driven only — documented in **`section-switcher.tsx`** JSDoc. **Note:** manual scroll does not rewrite the URL hash; highlight can differ from **`#hash`** until the user follows a hash link again (expected).
  - [x] 27.5 Run **`npm run lint`** and **`npm run build`**; manually verify scroll down → scroll up to top. **Done:** **`npm run lint`** and **`npm run build`** pass (Next.js **16.1.6**, **`/`** static). **Manual QA (repeat anytime):** at **`lg+`**, scroll until **Engineering case studies** is active in the hero nav → scroll back to **`scrollY ≈ 0`** → active nav should match the top/main band (**e.g. What problems I solve**). Optionally: open **`/#case-studies`**, confirm highlight, scroll away and confirm IO updates; resize / short height sanity check.

- [x] **Task 28: Experience timeline — company links + related-work chips**

  **Context (shipped):** Under each job in the **Experience** timeline, **related work** chips link out with **`ExternalLinkIcon`**; **company** names link to employer sites. Data in **`sections.json`**, locale merge in **`home-content`**, UI in **`experience-timeline.tsx`**.

  **Reference URLs (use in data + verify live):**
  - **HealthPlix Technologies** — company: [healthplix.com](https://www.healthplix.com/). Related works: [H.A.L.O product](https://www.healthplix.com/halo), [npm: `hplx-react-elements-dev`](https://www.npmjs.com/package/hplx-react-elements-dev).
  - **MPSC Inc.** — company: [mpsc.io](https://mpsc.io/). Related work: [HooT (hoot.mx)](https://hoot.mx/).
  - **Hitachi Vantara** — company: [Hitachi Vantara home](https://www.hitachivantara.com/en-us/home). _(No specific “related work” URLs provided; chips optional, empty, or filled later.)_

  - [x] 28.1 **Data model:** extend each experience entry in **`sections.json`** (or typed module alongside timeline data) with **`companyUrl`** (canonical employer homepage) and **`relatedWorks`**: ordered list of **`{ label: string, url: string }`** (labels for chip text; URLs must be absolute **https**). Seed **Healthplix** and **MPSC** with the links above; **Hitachi** may use **`relatedWorks: []`** until links exist. **Done:** **`sections.json`** — Healthplix **`companyUrl`** + **H.A.L.O** + **npm** chips; MPSC **`companyUrl`** + **HooT**; Hitachi **`companyUrl`** + **`relatedWorks: []`**. Types **`ExperienceRelatedWorkLink`**, optional **`companyUrl`** / **`relatedWorks`** on **`ExperienceTimelineItem`** in **`components/types.ts`**. Schema note + re-exports: **`src/data/experience-timeline-schema.ts`**. _(UI still uses **`t.experienceTimeline`** only — merge from JSON in **28.6**.)_
  - [x] 28.2 **Types:** update **`SectionEntry`** / timeline types in **`src/app/types.ts`** (and any loaders) so **`ExperienceTimeline`** receives **`companyUrl`** + **`relatedWorks`** per job without breaking existing **`timeline`** shape. **Done:** **`SectionEntry.timeline`** JSDoc; **`ExperienceSectionEntry`** + **`isExperienceSection()`** guard; loader **`mergeExperienceTimelineWithLinks(locale, json)`** in **`src/data/experience-timeline-merge.ts`** (merge by **`company`**); re-export from **`experience-timeline-schema.ts`**. **`ExperienceTimelineItem`** / **`ExperienceRelatedWorkLink`** unchanged from **28.1**. **`home-content`** wiring → **28.6**.
  - [x] 28.3 **Translations:** add EN + SV strings in **`translations.ts`** for a **“Related work”** (or equivalent) subheading, **opens in new tab** / external hints if needed, and optional **`aria-label`** templates for chip links — follow existing **`experienceUi`** / **`a11y`** patterns. **Done:** **`experienceUi.relatedWorkHeading`**, **`experienceUi.opensInNewTab`**; **`a11y.experienceRelatedWorkListAriaLabel`**, **`experienceRelatedWorkLinkAriaTemplate`** (`{label}`), **`experienceCompanySiteAriaTemplate`** (`{company}`); helpers **`formatExperienceRelatedWorkLinkAriaLabel`**, **`formatExperienceCompanySiteAriaLabel`** in **`translations.ts`**.
  - [x] 28.4 **Company heading as link:** in **`experience-timeline.tsx`**, render the **company name** as **`<a href={companyUrl}>`** (or **`next/link`** only if internal — here **external**), **`target="_blank"`** + **`rel="noopener noreferrer"`**, with **accessible name** (company + external hint per **`PROJECT_GUIDELINES.md`**). Keep **logo** + **role** layout and **keyboard focus** styles consistent with the rest of the timeline. **Done:** External **`<a>`** when **`item.companyUrl`**; **`aria-label`** via **`formatExperienceCompanySiteAriaLabel`** + **`companySiteAriaTemplate`** prop; **`ExternalLinkIcon`** (`aria-hidden`); **`focus-visible:ring`** matches site pattern. **`home-content`** uses **`mergeExperienceTimelineWithLinks`** so **`companyUrl`** is present (**28.6** chip copy/strings only).
  - [x] 28.5 **Related-work chips UI:** below each job’s main content (e.g. under highlights / skills area, before next timeline node), render a **horizontal wrap row** of **chips**: pill shape, theme tokens (**`secondary`** / **`tertiary`** border or fill per guidelines), each chip is a single **link** spanning **label + external icon** (reuse **`ExternalLinkIcon`** or shared atom). **Do not** nest interactive elements; respect **`prefers-reduced-motion`** on any chip hover (match case-study / site patterns). **Done:** Inside expanded job panel, after skills; **`relatedWorkHeading`** + **`ul`** **`aria-labelledby`**; **`motion.a`** chip with **`formatExperienceRelatedWorkLinkAriaLabel`**; **`whileHover`/`whileTap`** off when reduced motion; border **`secondary`**, hover **`tertiary`**; **`home-content`** passes **`relatedWorkHeading`** + **`relatedWorkLinkAriaTemplate`**.
  - [x] 28.6 **Wire `home-content.tsx`:** pass new fields from **`sections.json`** into **`ExperienceTimeline`**; ensure **`getTranslations(locale)`** supplies UI copy; **Hitachi** row shows company link + zero chips if **`relatedWorks`** is empty (no placeholder noise unless product wants “Coming soon”). _(Timeline merge for **`companyUrl`** / **`relatedWorks`** already in **`home-content`** from **28.4**; **28.6** completes chip UI + any remaining props.)_ **Done:** Merge + **28.5** translation props; **Hitachi** **`relatedWorks: []`** → no related-work block.
  - [x] 28.7 **Quality:** run **`npm run lint`** and **`npm run build`**; quick keyboard + screen-reader pass on new links (focus order, **`aria-current`** N/A for external; **`aria-label`** where icon-only risk). **Done:** **`npm run lint`** clean; **`npm run build`** OK (Next **16.1.6**, **`/`** static). **Code audit:** company **`a`** and chip **`motion.a`** use **`aria-label`** templates (icons **`aria-hidden`** — not icon-only links); **`focus-visible:ring-tertiary`** on both; expand/collapse **`button`** stays before panel in DOM → Tab reaches toggle before in-panel links when open. **`aria-current`** not used on external links (correct). **Manual (recommended):** Tab through **Experience** with a row expanded — focus company link + each related-work chip; spot-check VoiceOver/NVDA EN/SV announcement for **`aria-label`** strings.

- [x] **Task 29: Engineering case study — “Scaling UI Delivery” (Medium, design-system CI/CD)**
  - [x] 29.1 **What the article is about (card teaser / context):** A React UI library published only as npm **`latest`** meant a small dev fix could ship to **every** consumer and cause real prod impact (e.g. unintended **`useEffect`** loops → API spikes). The post walks through **environment-aware release**: Jenkins pipelines per branch (**`qa`** / **`preprod`** / **`prod`**), a **Node semver script** (registry + **`breaking:`** / **`feature:`** commit conventions), **npm distribution tags** instead of a single **`latest`**, and **app pre-build installs** pinned to the matching tag so each environment pulls a controlled version.
  - [x] 29.2 Add a row to **`src/data/case-studies-blogs.json`** with **`title`**, **`url`** ([Scaling UI Delivery on Medium](https://biratbhattacharjee.medium.com/scaling-ui-delivery-ci-cd-for-a-react-design-system-across-environments-c16e9f419950)), **`publishedAt`**, **`summary`** / **`summarySv`**, **`tags`** / **`tagsSv`** aligned with **29.1**; run **`npm run lint`** and **`npm run build`**.

- [ ] **Task 30: Center hero profile image horizontally in the hero column**

  **Context:** In **`hero.tsx`**, the hero column is a **`flex flex-col`** with **`items-center`** on small viewports but **`md:items-start`** from **`md+`**, which **left-aligns** all flex children—including the **round profile `Image`**—inside the sticky sidebar at **`lg`**. The avatar’s inner wrapper uses **`items-center`**, but the **block itself** sits on the **start** edge of the column, so it is **not** centered horizontally in the column on tablet/desktop.
  - [ ] 30.1 **Layout audit:** Confirm desired alignment for **headline / tagline / intro** (**`md:text-left`**) vs **photo** (centered in column); avoid unintentionally centering text if only the image should move.
  - [ ] 30.2 **Implement:** Keep text and below-the-fold hero controls as today; **horizontally center** only the profile image row (e.g. **`self-center`** on the photo’s outer wrapper, or **`w-full flex justify-center`** around the **`Image`** / **`motion.div`** block) so the avatar is centered in the **full width** of the hero column at **`md`** and **`lg`**.
  - [ ] 30.3 **Verify:** Resize **`sm` → `md` → `lg`**; check sticky hero column still looks balanced; run **`npm run lint`** and **`npm run build`**.

- [x] **Task 31: Hide Demos + AI sections (temporary)**
  - [x] 31.1 Filter **`demos`** and **`ai`** out in **`home-content.tsx`** (**`SECTION_IDS_DISABLED_FOR_NOW`**) so they disappear from **SectionSwitcher** and the main column; keep entries in **`sections.json`** — remove ids from the Set to show them again.

- [x] **Task 32: Experience copy aligned with resume (PDF)**
  - [x] 32.1 Refresh **`sections.json`** timeline **`highlights`** / **`skills`** and matching **`translations.ts`** (**EN + SV**) for **Healthplix**, **MPSC**, and **Hitachi Vantara** from the current resume (roles, bullets, and **Technologies/Tools** lines). **`companyDescription`** in JSON unchanged (SEO JSON-LD source).

- [x] **Task 33: Problems + experience copy refresh**
  - [x] 33.1 Update **`problemsContent`** closing paragraph (idea → production, codebase hygiene); **`sections.json`** parity.
  - [x] 33.2 Refresh experience roles, employer blurbs, highlights, and skills in **`sections.json`** and **`translations.ts`** (EN + SV); use **`company`** **`Healthplix`** for timeline + link merge; update **`experience-timeline.tsx`** logo map.

- [x] **Task 34: Experience timeline — remove expand/collapse**
  - [x] 34.1 Always show highlights, skills, and related-work links per job; drop toggle **`button`**, height animation, and **`inert`** wrapper (**`experience-timeline.tsx`**).
  - [x] 34.2 Remove **`expandJobDetails`** / **`collapseJobDetails`** from **`translations.ts`** and props on **`ExperienceTimeline`** / **`home-content.tsx`**.
  - [x] 34.3 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 35: Experience highlights — read more / less**
  - [x] 35.1 When a job has **one or more** highlight bullets, **collapsed** shows **`intro`** (**description**) only plus **Read more**; **skills** and **related work** stay visible. **Expanded** adds **all bullets** and **Read less** (above skills). Jobs with **no** highlight bullets show **intro**, skills, and related work with no toggle.
  - [x] 35.2 Add **`readMoreHighlights`** / **`readLessHighlights`** to **`translations.ts`** (EN + SV); wire from **`home-content.tsx`**.
  - [x] 35.3 **`aria-expanded`** / **`aria-controls`** on the toggle(s); details panel uses **`hidden`** when collapsed; run **`npm run lint`** and **`npm run build`**.

- [x] **Task 36: Experience job intro (under location)**
  - [x] 36.1 Add **`intro`** to **`ExperienceTimelineItem`**; English in **`sections.json`**, EN + SV in **`translations.ts`**; render between location and highlight bullets (**`experience-timeline.tsx`**).
  - [x] 36.2 Document in **`experience-timeline-schema.ts`**; run **`npm run lint`** and **`npm run build`**.

- [x] **Task 38: Skill / tag chips — brand icons**
  - [x] 38.1 Add **`react-icons`**; map labels in **`experience-skill-icon.tsx`** (`TECH_CHIP_ICONS`); experience **`skills`** and case-study **`tags`** use **`ExperienceSkillIcon`** before text (`aria-hidden`); unknown labels → terminal fallback icon.
  - [x] 38.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 39: Projects section — Ekko**
  - [x] 39.1 Add a **Projects** section row to **`sections.json`** so it appears in the main column and hero section navigation before case studies.
  - [x] 39.2 Add locale-aware project copy in **`translations.ts`** for **Ekko** (open-source E2EE messaging platform, URL, scalability, encryption, and load-test bullets).
  - [x] 39.3 Create and wire a **`ProjectsSection`** component from **`home-content.tsx`**, with accessible external project link behavior and a project list label.
  - [x] 39.4 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 40: Ekko try-it-out iframes**
  - [x] 40.1 Extend project data/types with optional iframe demo instances for **Ekko**.
  - [x] 40.2 Render a **Try it out** area in **`ProjectsSection`** with two horizontally separated iframe instances on wider screens and accessible iframe titles.
  - [x] 40.3 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 41: Ekko playground route**
  - [x] 41.1 Replace same-page Ekko iframe rendering with a **Try it out** link from the Projects card.
  - [x] 41.2 Add a dedicated playground route that renders two Ekko iframe instances horizontally, each covering its half of the full viewport height and width.
  - [x] 41.3 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 42: Ekko external actions**
  - [x] 42.1 Replace the local Ekko playground link with an external new-tab link to the live Ekko website.
  - [x] 42.2 Add a GitHub source-code link for **`birat051/messaging-system`**.
  - [x] 42.3 Render project actions as icon-only links with accessible labels, and remove the unused playground route.
  - [x] 42.4 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 43: Ekko actions — remove duplicate live link**
  - [x] 43.1 Remove the extra live-site icon/button from the Ekko project card because the project title already links to the live website.
  - [x] 43.2 Keep the GitHub source-code icon link and remove unused live-demo aria-label copy.
  - [x] 43.3 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 44: Experience — Read less scrolls to next job**
  - [x] 44.1 When the user clicks **Read less** on a timeline job (collapsing highlights), scroll the viewport to the **next** experience row if one exists.
  - [x] 44.2 If the job is the **last** in the timeline, collapse only — no scroll.
  - [x] 44.3 Use **`prefers-reduced-motion`** / existing **`useReducedMotion`** for smooth vs instant scroll.
  - [x] 44.4 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 45: Hero — location line**
  - [x] 45.1 Show a location pin icon and locale-aware place name (**`Gothenburg, Sweden`**) below the hero role (**`intro`**); EN + SV in **`translations.ts`**, wire from **`home-content.tsx`** / **`hero.tsx`**.
  - [x] 45.2 Icon decorative (**`aria-hidden`**); run **`npm run lint`** and **`npm run build`**.

- [x] **Task 46: Hero — visa / permit line**
  - [x] 46.1 Below location, show an ID-style icon and locale-aware visa/permit copy (**dependant visa**, residence + work permit, valid through **Jan-2028**); EN + SV in **`translations.ts`**, wire **`hero.tsx`** / **`home-content.tsx`**.
  - [x] 46.2 Icon decorative (**`aria-hidden`**); run **`npm run lint`** and **`npm run build`**.

- [x] **Task 48: Hero — visa expiry month**
  - [x] 48.1 Update **`hero.visaStatus`** EN + SV so the permit expiry reads **Jan-2028** (month + year); keep **`DEFAULT_VISA_STATUS`** in **`hero.tsx`** aligned with English.
  - [x] 48.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 49: Hero — social links under visa**
  - [x] 49.1 Move GitHub / Medium / LinkedIn icon links to sit **below** the work-permit (**`visaStatus`**) row; order **LinkedIn → GitHub → Medium**; keep existing **`aria-label`**s and motion/hover behavior.
  - [x] 49.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 50: Experience copy — MPSC highlight wording**
  - [x] 50.1 In the **MPSC Inc.** timeline highlight, replace **unblocked** with **unlocked** in English (**`translations.ts`**, **`sections.json`**); update Swedish (**`translations.ts`**) to match the same meaning.
  - [x] 50.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 51: SEO — senior developer + Gothenburg / Sweden**

  - [x] 51.1 Refresh global **`SITE_TITLE`**, **`SITE_DESCRIPTION`**, **`keywords`**, and Open Graph / Twitter fields in **`layout.tsx`** (sourced from **`site.ts`**) to cover **senior**, **full-stack**, **frontend**, **Gothenburg**, and **Sweden** without stuffing.
  - [x] 51.2 Extend **`Person` JSON-LD** (**`site.ts`**) with **`jobTitle`**, **`description`**, **`address`**, and **`knowsAbout`** aligned to that positioning.
  - [x] 51.3 Align visible hero **`intro`** and the first **About** paragraph (**`translations.ts`**, **`hero.tsx`** default) with the same terms where natural (**EN + SV**).
  - [x] 51.4 Add **`app/sitemap.ts`** and **`app/robots.ts`** using **`SITE_URL`**.
  - [x] 51.5 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 52: SEO — senior frontend-focused full-stack + Gothenburg / Sweden**

  - [x] 52.1 Tighten **`SITE_TITLE`**, **`SITE_DESCRIPTION`**, **`SITE_KEYWORDS`**, and **`Person` JSON-LD** (**`site.ts`**) so **senior**, **frontend-focused** (or **focus**), **full-stack**, **developer**, **Gothenburg**, and **Sweden** read naturally in titles and body copy.
  - [x] 52.2 Align hero **`intro`** and the first About paragraph (**`translations.ts`**, **`hero.tsx`** default) in **EN + SV**.
  - [x] 52.3 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 53: Positioning wording — “Frontend focused full-stack developer”**

  - [x] 53.1 Use **Frontend focused full-stack developer** (space, no hyphen on *focused* in English hero role) in **`translations.ts`**, **`hero.tsx`** default, About lead (**EN + SV** parity), **`site.ts`** title/description/JSON-LD/**keywords**, and **`sections.json`** problems **`content`** where it duplicates copy.
  - [x] 53.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 54: About lead — years of experience**
  - [x] 54.1 Replace the opening *based in Gothenburg* clause in the first “What problems I solve” paragraph with **6 years of experience** (**`translations.ts`** EN + SV, **`sections.json`** EN parity).
  - [x] 54.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 55: About lead — engineer + real-time positioning**
  - [x] 55.1 Replace the opening sentences of the first problems/About paragraph with the **Frontend-focused full-stack engineer**, **performant real-time web**, and **beyond the UI / system-level** copy (**`translations.ts`** EN + SV, **`sections.json`** EN).
  - [x] 55.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 56: Projects — Ekko highlights refresh**
  - [x] 56.1 Update **Ekko** **`projectItems`**.**`highlights`** in **`translations.ts`** (**EN + SV**) to match the latest real-time scale, E2EE, and load-test / Redis caching bullets.
  - [x] 56.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 57: Projects — Ekko architecture bullet**
  - [x] 57.1 Prepend **Designed for horizontal scaling using stateless services and message fan-out architecture** to **Ekko** highlights (**EN + SV** in **`translations.ts`**); keep existing bullets unchanged.
  - [x] 57.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 58: Projects — Ekko load-test bullet wording**
  - [x] 58.1 Replace the **Scalable real-time system…Socket.IO** Ekko highlight with **Load tested at 10k concurrent users on AWS…** (**`translations.ts`** EN + SV).
  - [x] 58.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 59: Projects — Ekko MongoDB / Redis bullet removed**
  - [x] 59.1 Remove the **Load tested at scale; … Redis-based auth caching (p99: 231ms)** Ekko highlight (**`translations.ts`** EN + SV).
  - [x] 59.2 Run **`npm run lint`** and **`npm run build`**.

- [x] **Task 60: Projects — Ekko core skills (icon chips)**
  - [x] 60.1 Extend **`ProjectItem`** with optional **`skills`**; add **Ekko** stack (**React**, **Node.js**, **Express**, **TypeScript**, **Mongo**, **AWS**, **Redis**, **RabbitMQ**) in **`translations.ts`** (**EN + SV** parity on labels where needed).
  - [x] 60.2 Map any missing labels in **`experience-skill-icon.tsx`** (**Express**, **Mongo**, **Redis**, **RabbitMQ**; **Typescript** alias).
  - [x] 60.3 Render a **Core skills** chip row in **`projects-section.tsx`** (same icon + pill pattern as **`experience-timeline`**); add **`projectsUi.coreSkillsHeading`** (**EN + SV**).
  - [x] 60.4 Run **`npm run lint`** and **`npm run build`**.

---

## File and route summary

- **Route:** `src/app/page.tsx` (default landing).
- **Components:** `src/components/skip-link.tsx`, `site-preferences-header.tsx`, `hero.tsx`, `section-switcher.tsx` (Task **27** — active section on scroll-up), `projects-section.tsx`, `case-studies-section.tsx`, `external-link-icon.tsx`, `experience-skill-icon.tsx`, `section-value-prop.tsx`, `section-placeholder.tsx`, `scroll-reveal.tsx` (client), `footer.tsx`, `experience-timeline.tsx` (Task **28** — company URLs + related-work chips).
- **Case studies (Task 23; Task 26 SV copy; Task 29 design-system CI/CD article; Task 38 tag icons):** `src/data/case-studies-blogs.json`, `src/data/case-studies-blogs.ts`, `case-studies-section.tsx`, `experience-skill-icon.tsx`, `home-content.tsx`.
- **Experience timeline (Task 18; Task 28 links + chips; Task 38 skill icons):** `src/data/sections.json`, `src/data/experience-timeline-schema.ts`, `src/data/experience-timeline-merge.ts`, `experience-timeline.tsx`, `experience-skill-icon.tsx`, `home-content.tsx`, `translations.ts`, `src/app/types.ts`, `src/components/types.ts`.
- **Profile photo:** `public/birat_professional.png` (or `src/assets/images/birat_professional.png` if moved for optimization).
