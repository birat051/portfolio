# Deployment (step-by-step)

Vercel (free) + your custom domain. Merge to `main` → automatic production deploy.

---

## 1. Repo and Vercel

1. Push the project to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com), sign in with the same Git provider.
3. **Add New Project** → Import the repository.
4. Leave **Framework Preset** as Next.js; **Build Command** `next build`; **Output Directory** default.
5. Click **Deploy**. Wait for the first build; note the `*.vercel.app` URL.

---

## 2. Production branch and CI/CD

1. In Vercel: **Project → Settings → Git**.
2. Set **Production Branch** to `main` (or your main branch name).
3. From now on: every **merge or push to `main`** triggers a new build and deploys to production. No manual deploy.

---

## 3. Custom domain

1. Buy a domain in your name (e.g. biratbhattacharjee.com) from a registrar (Cloudflare, Porkbun, Namecheap, etc.).
2. In Vercel: **Project → Settings → Domains** → **Add** your domain (e.g. `biratbhattacharjee.com`).
3. Vercel shows the DNS records to add. In your **registrar or DNS provider** (e.g. Cloudflare):
   - Add **A** record: name `@`, value the IP Vercel gives (e.g. `76.76.21.21`).
   - Add **CNAME** record: name `www`, value `cname.vercel-dns.com` (or the target Vercel shows).
4. In Vercel, add `www.biratbhattacharjee.com` as well if you want; then set **Redirect** so either `www` → apex or apex → `www` (one canonical URL). SSL is issued automatically once DNS propagates.

---

## 4. Lint in build (optional)

To block deploys when ESLint fails:

1. Open `package.json`.
2. Change the build script to: `"build": "npm run lint && next build"` (ensure a `lint` script exists, e.g. `"lint": "next lint"`).
3. Save; push to `main`. Future deploys will fail if lint fails.

---

## 5. Verify

1. Open `https://yourdomain.com` (and `https://www.yourdomain.com` if used); both should load over HTTPS.
2. Make a small change, merge to `main`, and confirm the site updates after the build finishes.
