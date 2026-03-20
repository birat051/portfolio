# Birat Bhattacharjee — Portfolio

Personal portfolio site: **real-time web experiences that scale.**

Built with **Next.js** (App Router), **React**, **TypeScript**, and **Tailwind CSS**. Content and section goals are defined in [`PORTFOLIO_PLAN.md`](./PORTFOLIO_PLAN.md); homepage tasks and history live in [`HOMEPAGE_PLAN.md`](./HOMEPAGE_PLAN.md).

---

## Site structure (from the portfolio plan)

| Section | Intent |
|--------|--------|
| **What problems I solve** | Intro and positioning — scalable frontend architecture, real-time systems (WebRTC, WebSockets, SSE), React/TypeScript/Node/Go, and how you work with teams and delivery. |
| **Experience** | Timeline (Healthplix, MPSC, Hitachi Vantara) with highlights, skill tiles, company links, and related-work chips. |
| **Engineering case studies** | Deep dives / external write-ups (e.g. Medium) — problem, approach, outcomes. |
| **Demos** | Live or recorded demos with links and short context. *(Placeholder until content is added.)* |
| **AI** | Notes on AI-assisted frontend work — practical caveats, security, complexity. *(Placeholder until content is added.)* |

Conventions and quality bar: [`PROJECT_GUIDELINES.md`](./PROJECT_GUIDELINES.md).

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |

---

## Deployment

Production deploy and DNS (Vercel + `www.biratbhattacharjee.com`): see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

Optional: SEO checklist and keyword notes in [`docs/SEO_AUDIT.md`](./docs/SEO_AUDIT.md).

---

## Tech stack

- **Next.js** 16 · **React** 19 · **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** (motion / reduced-motion–aware UI)

---

## Key paths

| Path | Role |
|------|------|
| `src/app/` | App Router — `layout.tsx`, `page.tsx`, `globals.css` |
| `src/components/` | UI — hero, experience timeline, case studies, section nav, etc. |
| `src/data/` | Copy, JSON (sections, case-study blogs), translations (EN/SV), site metadata |

---

## License

Private project — all rights reserved unless you add an explicit license.
