# coleputerbaugh.com

Personal brand + services site for Cole Puterbaugh. Editorial-minimal aesthetic, React + Vite SPA, deployed to Vercel.

## Stack

- React 18 + Vite
- React Router
- Tailwind CSS
- framer-motion, lucide-react, sonner
- Formspree for contact form
- Calendly inline embed for booking

## Local development

```bash
npm install
cp .env.example .env
# fill in real values in .env
npm run dev
```

Dev server runs at http://localhost:5173.

## Environment variables

All env vars are public (Vite `VITE_` prefix). Set these in `.env` locally and in the Vercel project settings.

| Variable | Purpose |
|---|---|
| `VITE_CALENDLY_URL` | Full URL to Cole's Calendly event (used for every booking CTA and the inline embed on /contact). |
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint the contact form POSTs to. |
| `VITE_CONTACT_EMAIL` | Public email address shown in the footer and on /contact. |

## Build

```bash
npm run build
npm run preview
```

Production output goes to `dist/`.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Add the three env vars above in Project Settings → Environment Variables.
5. Add custom domain `coleputerbaugh.com` and let Vercel handle SSL.

`vercel.json` already includes a SPA rewrite so client-side routes (`/work-with-me`, `/blog/:slug`, etc.) resolve correctly on refresh.

## Post-build deployment checklist

Before going live, verify:

- [ ] `VITE_CALENDLY_URL` points to the real Calendly booking page
- [ ] All 8 project links on `/portfolio` open the correct live URLs in a new tab
- [ ] Contact form on `/contact` submits successfully and an email arrives
- [ ] Honeypot field silently rejects bot submissions
- [ ] Stripe payment links added to the three packages on `/work-with-me` (when ready)
- [ ] Mobile layout reviewed at 375px width
- [ ] Lighthouse: page load under 3s, performance > 90
- [ ] Per-page `<title>` and meta description set (update `index.html` and per-page `<title>` if needed)
- [ ] Plausible or Google Analytics script added to `index.html`
- [ ] SSL certificate active on the apex domain and `www` redirect configured
- [ ] Sitemap.xml and robots.txt added to `/public`

## Content editing

- **Projects** → `src/data/projects.js`
- **Case studies** → `src/data/caseStudies.js` (append new entries to the array)
- **Blog posts** → `src/data/posts.js` (add `body` strings — basic paragraph rendering)
- **Site constants** (email, nav links) → `src/lib/site.js`

## License

© Cole Puterbaugh 2026. All rights reserved.
