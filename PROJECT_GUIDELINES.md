# Project Guidelines

Rules and conventions for building and maintaining this portfolio.

---

## 1. Static generation by default

- Components that are **description-only or static** (no user interaction, no client state) must be **statically generated**.
- Prefer static rendering and static data so pages can be pre-rendered at build time where possible.

---

## 2. SEO is top priority

- SEO rules take **highest priority**.
- Content and code must work **together** to support SEO.
- Optimise for search when someone searches by **your name** (Birat Bhattacharjee): titles, meta descriptions, headings, and semantic structure should reflect that.

---

## 3. ESLint (including React rules)

- **Always** follow ESLint rules.
- React-specific ESLint rules must be enabled and adhered to.
- Fix or explicitly justify any ESLint violations before merging.

---

## 4. JavaScript only for interactivity

- Ship JavaScript **only** for components that need **interactivity** (e.g. client state, event handlers, dynamic behaviour).
- Keep purely static or server-rendered content free of client-side JS where possible (e.g. use server components by default in Next.js).

---

## 5. No extra code

- Do **not** write code beyond what is requested in the prompt.
- Avoid speculative features, unused components, or “nice to have” code unless explicitly asked for.

---

## 6. Preserve existing behaviour

- When adding a **new page or feature**, do **not** break existing functionality.
- Changes should be additive or refactors that keep current behaviour intact; verify existing pages and flows still work.

---

## 7. One clear ask per prompt

- Request one feature, page, or change at a time so the AI can implement it fully and correctly.

---

## 8. Reference the plan and guidelines

- When asking for work, point to `PORTFOLIO_PLAN.md` (structure, copy) and `PROJECT_GUIDELINES.md` so the AI follows them.

---

## 9. Specify client vs server

- Say whether a component or page should be a Server Component (default) or a Client Component (e.g. “needs `'use client'` for interactivity”) to avoid unnecessary JS.

---

## 10. Describe desired outcome, not implementation

- Describe what the page/section should do and how it should look (and any SEO/meta needs); let the AI choose patterns (e.g. App Router, `generateMetadata`).

---

## 11. Request incremental changes

- Prefer “add X to the existing Y” or “change only the Z section” over “rebuild the homepage” so changes stay small and existing behaviour is preserved.

---

## 12. Confirm before large or structural changes

- For new sections (e.g. Engineering case studies, Systems), agree on structure (URLs, data shape, static vs dynamic) in the plan first, then implement in follow-up prompts.

---

## 13. Validate output against guidelines

- After generation, quickly check: static where possible, SEO (titles/meta/headings), ESLint clean, no extra features, and no regressions on existing pages.

---

## 14. Pixel-perfect UI and soothing theme

- As a frontend developer, the UI must be **pixel-perfect** and the theme **soothing to the eyes** (colour, contrast, spacing, typography).
- Layout and visuals should feel intentional and polished.

---

## 15. Flawless scroll animations between sections

- Use **smooth, flawless animations** when scrolling between sections (e.g. reveal, fade, or subtle motion).
- Animations should feel natural and not distract from content.

---

## 16. Accessibility (keyboard and screen readers)

- Every component must be built with **accessibility in mind**.
- The **entire site** must be **keyboard accessible** (focus order, visible focus, no keyboard traps).
- The site must be **screen-reader compatible** (semantic HTML, ARIA where needed, alt text, landmarks, readable order).

---

## 17. Mind-blowing visuals with UI/UX in mind

- Visuals should be **mind-blowing** while staying grounded in **UI/UX best practices** (clarity, hierarchy, consistency, usability).
- Prioritise user experience; avoid flashy effects that harm readability or interaction.

---

## 18. Avoid code repeatability

- Avoid repeating the same UI structure across multiple sections/components.
- Prefer small, reusable components or mapping over data structures where it improves clarity and reduces duplication (without adding unnecessary abstraction).
