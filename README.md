# EU AI Navigator — landing page

Static marketing site for the EU AI Compliance Navigator product, built with [Astro](https://astro.build/) and Tailwind CSS.

Separate from the application repo. This site is the public-facing entry point that routes buyers, advisors, and methodology reviewers into the live product.

## Local development

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Production build

```bash
npm run build
```

Output is in `dist/` — fully static HTML/CSS/JS. Deployable to any static host.

```bash
npm run preview
```

Serves the built `dist/` locally on port 4321 to verify the production build.

## Deployment

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard → Workers & Pages → Create application → Pages → Connect to Git.
3. Select the repo. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add the custom domain `eu-ai-navigator.com` once DNS is configured.

### Vercel (alternative)

1. Push this repo to GitHub.
2. In the Vercel dashboard → New Project → Import the repo.
3. Vercel auto-detects Astro. No configuration changes needed.
4. Add the custom domain `eu-ai-navigator.com` once DNS is configured.

Both hosts serve the same static output. Cloudflare Pages is the default recommendation: free tier, no cold starts, Cloudflare CDN, fastest for a content-first marketing site.

## Founder image (optional)

The "Who is behind this" section (§7) supports an **optional** founder portrait.

- **File path:** `public/founder.jpg` (also accepts `.jpeg`, `.png`, or `.webp`)
- **If present:** the image renders alongside the founder text block.
- **If absent:** the section renders the text block only, with no broken placeholder, no portrait frame, no stock substitute.

Recommended specs:
- Square or 4:5 portrait crop
- Minimum 600×600px (1200×1200px ideal for retina)
- File size under 200KB after compression
- Plain background, professional but not glam

Drop the file in `public/` and the next build picks it up. No code change required.

## Cross-links to the application

The landing page links outward to the running application for the Legal Notice, Disclosures, and Methodology pages. The application URL is configured in `src/pages/index.astro` (search for `APP_URL`). Update once the application's production URL is finalised.

## Domain

- **Primary:** `eu-ai-navigator.com` (configured in `astro.config.mjs` as `site`)
- **Fallback:** `eu-navigator.com` (if primary unavailable at registration — swap in `astro.config.mjs`)

## Repo discipline

- Methodology, engine, scoring, and any IP-bearing materials live in the application repo, not here.
- This repo is marketing copy and static assets only.
- Pricing, sub-processor names, and version stamps must stay consistent with the application's Disclosures and Methodology pages. If you change a fact here, change it there too — see the design doc.
