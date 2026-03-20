# Deployment: Vercel + Namecheap (`www.biratbhattacharjee.com`)

Step-by-step guide to deploy this **Next.js** portfolio on **Vercel** and point **`www.biratbhattacharjee.com`** (and the apex domain) using DNS at **Namecheap**.

> **Important:** Always copy DNS **host / value** pairs from **Vercel → Project → Settings → Domains** after you add each domain. Vercel’s UI is the source of truth; values below match common defaults but can change.

---

## Part 1 — Push the code to Git

1. Create a repository on **GitHub** (or GitLab / Bitbucket) if you don’t have one yet.
2. From your machine, push this project’s `main` branch (or your default branch):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/birat-portfolio.git
   git push -u origin main
   ```

3. Confirm the repo root contains `package.json` with a `build` script (`next build`) — this project already does.

---

## Part 2 — Create the Vercel project

1. Go to **[vercel.com](https://vercel.com)** and sign in (e.g. **Continue with GitHub**).
2. Click **Add New…** → **Project**.
3. **Import** your `birat-portfolio` repository.
4. Configure the project:
   - **Framework Preset:** Next.js (auto-detected).
   - **Root Directory:** `./` (leave default unless the app lives in a subfolder).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** leave default (Next.js handles this).
   - **Install Command:** `npm install` (default).
5. Click **Deploy** and wait for the first build to finish.
6. Open the generated URL (`*.vercel.app`) and confirm the site loads.

---

## Part 3 — Production branch (automatic deploys)

1. In Vercel: open your project → **Settings** → **Git**.
2. Under **Production Branch**, set it to **`main`** (or whatever branch you use for production).
3. From now on, every **push or merge to that branch** triggers a **production** deployment. Preview deployments are created for other branches / PRs by default.

---

## Part 4 — Add your domains in Vercel

You want **`https://www.biratbhattacharjee.com`** as the main site. It’s best to add **both** the apex and `www`, then pick one canonical URL in Vercel.

1. In Vercel: **Project → Settings → Domains**.
2. Click **Add** and enter:
   - `biratbhattacharjee.com` (apex)
   - Then **Add** again: `www.biratbhattacharjee.com`
3. For each domain, Vercel will show **DNS records** to create at Namecheap (usually something like):
   - **Apex** (`@`): **A** record → e.g. **`76.76.21.21`** (use the IP Vercel shows).
   - **`www`:** **CNAME** → e.g. **`cname.vercel-dns.com`** (use the target Vercel shows).
4. Leave this tab open — you’ll enter these in Namecheap next.

### Canonical URL: prefer `www`

1. Still under **Domains**, set **`www.biratbhattacharjee.com`** as **Primary** (or use Vercel’s option to redirect apex → `www`).
2. Ensure **`biratbhattacharjee.com`** redirects to **`https://www.biratbhattacharjee.com`** (Vercel usually offers “Redirect to www” when both are added). That way bookmarks and links to the bare domain still work.

---

## Part 5 — Configure DNS in Namecheap

Your domain is registered at **Namecheap**; DNS is edited in the Namecheap dashboard.

### 5.1 Open DNS for the domain

1. Log in at **[namecheap.com](https://www.namecheap.com)**.
2. Go to **Domain List** → find **`biratbhattacharjee.com`** → click **Manage**.
3. Open the **Advanced DNS** tab.

### 5.2 Remove conflicting records

Namecheap often ships **URL Redirect** or **Parking** records that conflict with Vercel.

1. Remove or disable:
   - **URL Redirect Record** for `@` or `www` pointing to parking pages.
   - Any **A** / **CNAME** for `@` or `www` you no longer need (e.g. old hosting).
2. If **Namecheap BasicDNS** is selected, stay on it — Vercel only needs standard A/CNAME records.

### 5.3 Add records Vercel asked for

Use **exactly** what Vercel showed in **Settings → Domains** (hostnames and values). Typical setup:

| Type  | Host | Value                         | TTL       |
| ----- | ---- | ----------------------------- | --------- |
| **A** | `@`  | IP from Vercel (e.g. `76.76.21.21`) | Automatic or 30 min |
| **CNAME** | `www` | `cname.vercel-dns.com.` or value Vercel shows | Automatic or 30 min |

**Namecheap tips:**

- For the root domain, **Host** is often **`@`**.
- For **www**, **Host** is **`www`**.
- Some UIs want **`www`** without the full domain in the value field — follow Namecheap’s placeholders.
- If Namecheap appends your domain to the CNAME value, use only **`cname.vercel-dns.com`** (no `https://`).

### 5.4 Save and wait for propagation

1. Click **Save all changes** (if applicable).
2. DNS can take **a few minutes to 48 hours**; often **15–30 minutes** is enough.
3. In Vercel **Domains**, status should move to **Valid** with **SSL** issued automatically once DNS resolves correctly.

**Check propagation (optional):**

```bash
dig www.biratbhattacharjee.com +short
dig biratbhattacharjee.com +short
```

You should see Vercel’s CNAME target / A record results matching what Vercel expects.

---

## Part 6 — Verify the live site

1. Open **`https://www.biratbhattacharjee.com`** — page loads, padlock valid (HTTPS).
2. Open **`https://biratbhattacharjee.com`** — should **redirect** to `https://www.biratbhattacharjee.com` if you configured that in Vercel.
3. Make a small change, push to **`main`**, wait for the Vercel deployment to finish, and confirm the change appears on the live domain.

---

## Optional — Fail the build if ESLint fails

This repo uses **`eslint`** (not `next lint`). To block broken lint from reaching production:

1. In **`package.json`**, change:

   ```json
   "build": "npm run lint && next build"
   ```

2. Commit and push; Vercel will run `npm run build` and fail the deploy if `eslint` exits with an error.

---

## Quick reference

| Item            | Value |
| --------------- | ----- |
| Host / platform | Vercel |
| Registrar       | Namecheap |
| Primary URL     | `https://www.biratbhattacharjee.com` |
| DNS edits       | Namecheap → **Domain List** → **Manage** → **Advanced DNS** |
| Truth for DNS   | **Vercel → Settings → Domains** (per-domain instructions) |

If something stays on “Invalid configuration” in Vercel, re-check **Advanced DNS** for typos, duplicate `A`/`CNAME` rows, or leftover redirects — then use Vercel’s **Refresh** on the domain row after fixing DNS.
