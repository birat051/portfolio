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

- [ ] **Task 15: Fixed social links at bottom**
  - [ ] 15.1 Move GitHub + LinkedIn links to the bottom of the hero area and keep them **fixed at the bottom of the page**.
  - [ ] 15.2 Ensure they remain keyboard accessible, do not overlap content, and are responsive.

- [ ] **Task 16: Responsive margins and padding (new spacing system)**
  - [ ] 16.1 Desktop/tablet: keep only **page margins** at **3rem** while keeping **padding** at **2rem** for internal containers.
  - [ ] 16.2 Mobile: reduce **page margins** to **1rem** and **padding** to **0.75rem**.
  - [ ] 16.3 Apply consistently across hero, content sections, and footer; ensure no horizontal scroll.

- [ ] **Task 17: Mobile refactor**
  - [ ] 17.1 On mobile devices, hide the profile photo in the hero.
  - [ ] 17.2 On mobile devices, hide the hero interaction.

---

## Task 1: SEO and document structure

| #   | Subtask                                                                                                                                                    | Done |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 1.1 | Set page metadata: `<title>` and `<meta name="description">` including “Birat Bhattacharjee” and “Senior Software Engineer” / “real-time web experiences”. |      |
| 1.2 | Use a single `<main>` and one `<h1>` (name) on the page; each section has a logical `<h2>`.                                                                |      |
| 1.3 | Use semantic HTML only for main structure (no div soup).                                                                                                   |      |

---

## Task 2: Accessibility

| #   | Subtask                                                                                                                                   | Done |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 2.1 | Add a skip link at the top (“Skip to main content”), first focusable element, linking to `#main-content`.                                 |      |
| 2.2 | Use landmarks: `<header>`, `<main id="main-content">`, `<footer>`, `<nav>` with an accessible name (e.g. `aria-label="Main navigation"`). |      |
| 2.3 | Ensure heading hierarchy: one h1, then h2 per section; no skipped levels.                                                                 |      |
| 2.4 | Apply visible focus styles (e.g. theme tertiary) on all interactive elements.                                                             |      |
| 2.5 | Ensure full keyboard flow: skip link → nav → main → footer; no focus traps.                                                               |      |
| 2.6 | Keep structure screen-reader friendly: semantic HTML, no misleading or missing labels.                                                    |      |

---

## Task 3: Header and navigation

| #   | Subtask                                                                                            | Done |
| --- | -------------------------------------------------------------------------------------------------- | ---- |
| 3.1 | Add a header with site identity (e.g. “Birat Bhattacharjee” or logo text).                         |      |
| 3.2 | Add a nav with in-page links to Hero, What problems I solve, and each main section (anchor links). |      |
| 3.3 | Use a static nav (no dropdowns); ensure it’s keyboard accessible and has visible focus.            |      |

---

## Task 4: Hero (short intro)

| #   | Subtask                                                                                                                                                                                                                                                                                                                               | Done |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 4.1 | Hero section: name as `<h1>`, tagline “Real-time web experiences that scale”, one short intro line (e.g. Senior Software Engineer).                                                                                                                                                                                                   |      |
| 4.2 | **Include profile photo on the homepage in LinkedIn fashion:** professional, clear, well-framed (e.g. head/shoulders or upper body). Use `public/photo_op.jpeg`; if moving the image into `src` (e.g. `src/assets/images/`) improves asset delivery (e.g. with `next/image` and build-time optimization), move it and use from there. |      |
| 4.3 | Use theme colours (primary, secondary, tertiary) and existing typography; keep layout responsive.                                                                                                                                                                                                                                     |      |
| 4.4 | Add GitHub and LinkedIn logos below profile photo, linking to https://github.com/birat051 and https://www.linkedin.com/in/biratbhattacharjee/                                                                                                                                                                                         |      |

---

## Task 5: “What problems I solve” section

| #   | Subtask                                                                                         | Done |
| --- | ----------------------------------------------------------------------------------------------- | ---- |
| 5.1 | Add a section with a clear `<h2>` (e.g. “What problems I solve”).                               |      |
| 5.2 | Use placeholder content only (e.g. “Content coming soon” or empty list) until copy is provided. |      |

---

## Task 6: Main sections (placeholders)

| #   | Subtask                                                                                                                             | Done |
| --- | ----------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 6.1 | Add one block per main section: Engineering case studies, Systems I designed, OSS/Experiments, Small tools, Demos, Playgrounds, AI. |      |
| 6.2 | Each block: semantic `<section>`, `<h2>`, and empty or “Content coming soon” placeholder.                                           |      |
| 6.3 | Ensure nav links target each section via `id` (e.g. `#case-studies`, `#systems`, etc.).                                             |      |
| 6.4 | Replace placeholders with actual content (when copy/items are provided).                                                            |      |

---

## Task 7: Scroll animations

| #   | Subtask                                                                                                                                            | Done |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 7.1 | Introduce a single client component (e.g. scroll-reveal wrapper) that applies “reveal on scroll” (fade/slide up) when sections enter the viewport. |      |
| 7.2 | Use it only for section reveal; keep all content as server-rendered and static.                                                                    |      |
| 7.3 | Keep animations subtle and non-distracting (per guidelines).                                                                                       |      |

---

## Task 8: Footer

| #   | Subtask                                               | Done |
| --- | ----------------------------------------------------- | ---- |
| 8.1 | Add a minimal footer (e.g. name, current year).       |      |
| 8.2 | Use `<footer>` landmark and theme-consistent styling. |      |

---

## Task 9: Theme, layout, and components

| #   | Subtask                                                                                                                                                                    | Done |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 9.1 | Use only existing Tailwind theme tokens (primary, secondary, tertiary) for background, text, and accents.                                                                  |      |
| 9.2 | Responsive layout: comfortable max-width and stacking on small screens.                                                                                                    |      |
| 9.3 | Create only the components needed: skip-link, header, hero (with photo), section-value-prop, section-placeholder, scroll-reveal (client), footer; homepage assembles them. |      |
| 9.4 | Default to Server Components; client only for scroll-reveal (and any future interactive nav if added).                                                                     |      |

---

## Task 10: Quality and guidelines

| #    | Subtask                                                                                             | Done |
| ---- | --------------------------------------------------------------------------------------------------- | ---- |
| 10.1 | Run ESLint and fix any violations.                                                                  |      |
| 10.2 | Confirm no extra features or code beyond this plan.                                                 |      |
| 10.3 | Confirm existing behaviour (e.g. layout, globals) is unchanged except as required for the homepage. |      |

---

## File and route summary

- **Route:** `src/app/page.tsx` (default landing).
- **Components:** `src/components/skip-link.tsx`, `header.tsx`, `hero.tsx`, `section-value-prop.tsx`, `section-placeholder.tsx`, `scroll-reveal.tsx` (client), `footer.tsx`.
- **Profile photo:** `public/photo_op.jpeg` (or `src/assets/images/photo_op.jpeg` if moved for optimization).
