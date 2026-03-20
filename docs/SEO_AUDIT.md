# SEO audit — birat-portfolio (homepage)

**Scope:** Next.js 16 App Router, static prerender of `/`.  
**Review date:** March 2026 (codebase snapshot).  
**Canonical domain:** `https://www.biratbhattacharjee.com` (see `src/data/site.ts`, `DEPLOYMENT.md`).

---

## Executive summary

The site has a **solid technical SEO baseline**: static HTML for main content, one clear `<h1>`, semantic sections with `id` anchors, `metadataBase` + Open Graph + Twitter metadata, canonical `/`, `robots` index/follow, and **Person** JSON-LD. Body copy (especially “What problems I solve”) naturally targets **React**, **real-time systems**, and **your name**.

**Main gaps:** no **`sitemap.xml` / `robots.txt`** via Next conventions, **no dedicated Open Graph / Twitter image**, **`Next.js` is barely mentioned** in machine-readable summary fields, and **`full-stack` / `frontend developer`** could be reinforced in title/description without sounding spammy. International SEO is **English-first** with client-side Swedish (`<html lang>` updates in JS)—fine for a portfolio, but not ideal if you want Swedish SERP pages.

---

## What you’re doing well

| Area | Implementation |
|------|----------------|
| **Title & description** | `SITE_TITLE` / `SITE_DESCRIPTION` in `src/data/site.ts`; used in `layout.tsx` metadata. Name + real-time + React + stack mentioned. |
| **Canonical URL** | `metadataBase` + `page.tsx` `alternates.canonical: "/"`. |
| **Structured data** | `SITE_PERSON_JSON_LD` (Person + `sameAs` GitHub/LinkedIn) on homepage. |
| **Semantic HTML** | `<main id="main-content">`, section `id`s, single `<h1>` with crawlable name (`sr-only` + decorative CLI per `hero.tsx`). |
| **Crawlable anchors** | In-page `#problems`, `#experience`, etc. via `SectionSwitcher`. |
| **Images** | Hero photo `alt="Birat Bhattacharjee"`, `priority` for LCP. |
| **Indexability** | `robots: { index: true, follow: true }`. |
| **Rendering** | Static generation of `/` — good for TTFB and crawl efficiency. |
| **Social metadata** | Open Graph + Twitter card fields populated (title/description/url). |

---

## Gaps & risks

| Issue | Detail |
|-------|--------|
| **No sitemap** | No `app/sitemap.ts` (or static `sitemap.xml`). For a single-page site it’s minor but helps Search Console and future routes. |
| **No `robots.txt` route** | No `app/robots.ts`. Next can generate this to point at sitemap and confirm host. |
| **`summary_large_image` without image** | `twitter.card` is `summary_large_image` but there is no `openGraph.images` / `twitter.images`. Cards may look plain or inconsistent. |
| **`Next.js` underrepresented in “head” copy** | You use Next in the stack; **`SITE_DESCRIPTION` and `SITE_TITLE` do not say “Next.js”**. Crawlers weight title/description heavily. |
| **Job title vs keywords** | JSON-LD `jobTitle` is “Senior Software Engineer” — accurate, but doesn’t surface **frontend** / **full-stack** as phrases searchers use. |
| **Locale & hreflang** | Swedish is client-only; no `hreflang`, no separate URLs. Expected for this setup; limits SV-specific ranking. |
| **Thin placeholder sections** | Demos / AI (and similar) may dilute perceived depth if indexed as sparse—acceptable if you’ll fill or `noindex` later. |

---

## Keyword coverage (current vs opportunity)

| Keyword / phrase | Where it shows today | Opportunity |
|------------------|----------------------|-------------|
| **Birat Bhattacharjee** | Title, meta description, `h1` (incl. sr-only), image alt, JSON-LD `name`, OG/Twitter text | Keep; ensure LinkedIn/GitHub profiles also use consistent spelling. |
| **Real-time systems** | Meta description; strong in body (WebRTC, WebSockets, SSE, “real-time” in highlights) | Add to JSON-LD `knowsAbout` or a one-line `description` on Person; optional FAQ or a short “Focus” blurb with H2. |
| **React** | Meta description; very strong in experience + problems copy | Same as above; consider `knowsAbout: ["React", ...]`. |
| **Next.js** | Mostly **missing** from title/description/JSON-LD | Add naturally to `SITE_DESCRIPTION` and/or hero tagline variant; mention in opening paragraph once. |
| **Full-stack developer** | Hero `intro` (EN: “Full-stack developer”) | Also weave into meta description or subtitle once if you want that query. |
| **Frontend developer** | “frontend” appears in body copy; not in title | Optional: “Senior Software Engineer (frontend & full-stack)” in `jobTitle` or a second sentence in description—**avoid stuffing**. |

---

## Recommended next steps (prioritized)

### 1. High impact, low effort (metadata & schema)

1. **Extend `SITE_DESCRIPTION`** in `src/data/site.ts` to include **Next.js** once (e.g. “…portfolio built with Next.js” or “…React and Next.js”). Keep under ~155–160 characters if possible for SERP display.
2. **Optional title tweak** — e.g. append a short qualifier: `Birat Bhattacharjee | Senior Software Engineer · React & real-time systems` — test length in SERP preview tools.
3. **Enrich JSON-LD** (`SITE_PERSON_JSON_LD`):
   - Add **`knowsAbout`** array: e.g. `["React", "Next.js", "TypeScript", "Real-time systems", "WebRTC"]`.
   - Optionally **`description`** (1–2 sentences) aligned with meta description.
4. **OG / Twitter image**
   - Add **`openGraph.images`** and **`twitter.images`** (e.g. 1200×630) — static asset in `public/` or dynamic OG route. Reuse hero photo or a simple branded card with name + role.

### 2. Medium impact (Next.js App Router conventions)

5. **Add `src/app/sitemap.ts`** — export `default function sitemap()` returning at least `{ url: baseUrl, lastModified }`.
6. **Add `src/app/robots.ts`** — `allow: /`, `sitemap: `${SITE_URL}/sitemap.xml`` (use env-aware base URL).

### 3. Content & on-page (keywords without stuffing)

7. **First screen visible text** — Ensure the **tagline/intro** (already “Real-time…” + “Full-stack developer”) stays in HTML; consider one natural sentence mentioning **Next.js** next to React in hero or problems section.
8. **Section headings** — Your H2s are clear; optional subheading under Experience: “Frontend architecture & real-time platforms” if it reads well for humans.
9. **Case studies / articles** — Titles and summaries that mention **React**, **real-time**, or **Next.js** help long-tail queries when Medium/external pages are indexed.

### 4. Off-site & Search Console

10. **Google Search Console** — Verify property for `www` (and apex if separate); submit sitemap after step 5.
11. **Consistent NAP-like identity** — Same name spelling on GitHub, LinkedIn, Medium, resume PDFs.
12. **Backlinks** — GitHub profile README link to site; LinkedIn featured link; conference bios linking to canonical URL.

### 5. If you expand internationally

13. **Swedish SEO** — If important: dedicated path or subdomain with server-rendered `lang`, `hreflang` alternates, and unique titles per locale (larger change).

---

## Files to touch (quick reference)

| File | Typical SEO edits |
|------|-------------------|
| `src/data/site.ts` | `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_PERSON_JSON_LD` |
| `src/app/layout.tsx` | `openGraph.images`, `twitter.images` (if not set in `site.ts` re-export) |
| `src/app/sitemap.ts` | **new** |
| `src/app/robots.ts` | **new** |
| `src/data/translations.ts` | EN (and SV) hero/problems copy for natural keyword mentions |
| `public/og-image.png` (or similar) | Social preview asset |

---

## Disclaimer

SEO “scores” from third-party widgets are not authoritative. This audit is based on **your codebase and on-page signals** common for personal portfolios. Rankings depend on competition, backlinks, query intent, and algorithm updates—use this doc as a **checklist**, not a guarantee.
