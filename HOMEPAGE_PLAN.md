# Homepage implementation plan

Tasks and subtasks for the default landing page. Aligned with `PORTFOLIO_PLAN.md` and `PROJECT_GUIDELINES.md`.

---

## Checklist

Use this list to track progress. Mark items with `[x]` when done.

- [x] **Task 1: SEO and document structure**
  - [x] 1.1 Set page metadata (title, description with “Birat Bhattacharjee”)
  - [x] 1.2 Single `<main>`, one `<h1>`, logical `<h2>` per section
  - [x] 1.3 Semantic HTML for main structure
- [ ] **Task 2: Accessibility**
  - [x] 2.1 Skip link (“Skip to main content”) → `#main-content`
  - [ ] 2.2 Landmarks: header, main, footer, nav with accessible name
  - [ ] 2.3 Heading hierarchy (h1 → h2, no skips)
  - [ ] 2.4 Visible focus styles on interactive elements
  - [ ] 2.5 Full keyboard flow; no focus traps
  - [ ] 2.6 Screen-reader friendly structure
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

- [ ] **Task 12: Split layout (hero + main content side-by-side)**
  - [x] 12.1 Update layout so the hero is displayed side-by-side with the main content (desktop), stacked on small screens.
  - [ ] 12.2 Confirm anchor scrolling and section reveal still work with the new layout.

- [ ] **Task 13: Remove header**
  - [x] 13.1 Remove the header completely.
  - [ ] 13.2 Ensure the skip link still functions and focus order remains correct.

- [ ] **Task 14: Brittany-style scroll “section switch” hero**
  - [x] 14.1 Redesign the hero interaction so scrolling up/down visually “switches” between sections.
  - [x] 14.2 Keep motion subtle, accessible, and respect reduced-motion settings.
  - [ ] 14.3 Ensure this does not break static content/SEO (content still renders as HTML).

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

---

## File and route summary

- **Route:** `src/app/page.tsx` (default landing).
- **Components:** `src/components/skip-link.tsx`, `header.tsx`, `hero.tsx`, `section-value-prop.tsx`, `section-placeholder.tsx`, `scroll-reveal.tsx` (client), `footer.tsx`.
- **Profile photo:** `public/photo_op.jpeg` (or `src/assets/images/photo_op.jpeg` if moved for optimization).
