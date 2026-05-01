# Birat Bhattacharjee — Portfolio

Personal portfolio site for **real-time web experiences that scale**.

Built with **Next.js App Router**, **React**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **react-icons**. The current homepage is a data-driven single-page portfolio with locale-aware copy, theme switching, accessible navigation, SEO JSON-LD, project cards, work experience, and external engineering write-ups.

## Active Homepage Sections

- **Hero**: sticky profile area on large screens, animated CLI-style name display, section navigation, and social links for GitHub, Medium, and LinkedIn.
- **What problems I solve**: positioning copy for frontend-focused full-stack work, real-time systems, cloud/backend support, and team delivery.
- **Experience**: Healthplix, MPSC, and Hitachi Vantara timeline with intro text, expandable highlights, skill chips with icons, company links, and related-work links.
- **Projects**: Ekko project card with live-site title link and GitHub source-code icon.
- **Engineering Case Studies**: JSON-driven external article cards, currently intended for Medium-style write-ups with summaries and tag chips.

`Demos` and `AI` still exist in `src/data/sections.json` as easy-to-restore placeholders, but they are intentionally excluded from the rendered homepage in `src/components/home-content.tsx`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

- `npm run dev`: start the Next.js development server.
- `npm run build`: run a production build and TypeScript checks.
- `npm run start`: serve the production build after `npm run build`.
- `npm run lint`: run ESLint.

## Project Structure

- `src/app/layout.tsx`: root layout, fonts, metadata, theme bootstrap, locale wrapper, skip link, and footer shell.
- `src/app/page.tsx`: homepage route, structured data injection, header, and main content mount.
- `src/app/globals.css`: Tailwind v4 import, theme tokens, light/dark color variables, and global behavior.
- `src/components/home-content.tsx`: homepage section orchestration, locale resolution, disabled section filtering, and component routing.
- `src/components/hero.tsx`: profile image, animated name terminal, section switcher, and social links.
- `src/components/experience-timeline.tsx`: localized experience timeline, read-more/less highlights, skills, and related work.
- `src/components/projects-section.tsx`: project cards, live project title links, and GitHub source-code icon actions.
- `src/components/case-studies-section.tsx`: external case-study cards with localized copy and tag icons.
- `src/components/experience-skill-icon.tsx`: shared icon mapping for experience skills and case-study tags.
- `src/data/sections.json`: canonical section order plus experience link metadata.
- `src/data/translations.ts`: English and Swedish UI copy, homepage copy, experience copy, project copy, and accessibility labels.
- `src/data/case-studies-blogs.json`: external case-study/article data.
- `src/data/case-studies-blogs.ts`: case-study schema, sorting, and locale resolution helpers.
- `src/data/site.ts`: canonical site URL, title, description, favicon colors, and person JSON-LD.
- `src/data/experience-seo-jsonld.ts`: employer/experience structured-data helpers.
- `src/assets/images/`: profile and company images.
- `src/assets/documents/`: resume PDF.

## Content Workflow

- Update homepage tasks in [`HOMEPAGE_PLAN.md`](./HOMEPAGE_PLAN.md) before changing landing-page implementation.
- Use [`PORTFOLIO_PLAN.md`](./PORTFOLIO_PLAN.md) for broader portfolio direction.
- Follow [`PROJECT_GUIDELINES.md`](./PROJECT_GUIDELINES.md) for engineering conventions and quality bar.
- Add or reorder homepage sections in `src/data/sections.json`, then wire special rendering in `src/components/home-content.tsx` when a section needs more than plain paragraphs.
- Add localized text in `src/data/translations.ts` for user-visible strings and accessibility labels.
- Add external engineering write-ups in `src/data/case-studies-blogs.json`; display sorting and locale fallback are handled in `src/data/case-studies-blogs.ts`.

## Deployment

Production deploy and DNS notes for Vercel and `www.biratbhattacharjee.com` live in [`DEPLOYMENT.md`](./DEPLOYMENT.md).

Set `NEXT_PUBLIC_SITE_URL` when deploying to staging or any non-production host. If it is unset, the site defaults to `https://www.biratbhattacharjee.com`.

## License

Private project. All rights reserved unless an explicit license is added.
