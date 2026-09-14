# Bindhast Trips

Static marketing + inquiry site for a small outbound travel agency.
Next.js static export on GitHub Pages. No database, no auth, no backend server.
A Google Sheet is the admin panel; a Google Apps Script web app is the only API.

## Run it

Needs Node 20+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export into out/
npm run typecheck
```

## Where things live

| Path                        | What it is                                                      |
|-----------------------------|-----------------------------------------------------------------|
| `config/types.ts`           | The destination schema. Read this first.                         |
| `config/destinations.ts`    | Dubai + Thailand. **Adding a destination = one more object here.**|
| `config/site.ts`            | Business name, founder, cancellation terms, WhatsApp helper.      |
| `app/[destination]/page.tsx`| One page component that renders every destination.                |
| `public/images/`            | Placeholder gradients. See the README in there — replace them.     |
| `public/brochures/`         | Destination PDFs (build step 7).                                  |

## Adding Vietnam later

1. Write a `Destination` object in `config/destinations.ts` with `enabled: true`.
2. Drop `vietnam-hero.jpg` and `vietnam-card.jpg` into `public/images/`.
3. Push.

`/vietnam/` is generated, it appears on the landing page, its activities appear in
the planner, and the estimator picks up its rate card. No component changes.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to Pages.

Set these as repository **Variables** (Settings → Secrets and variables → Actions):

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — country code first, digits only, e.g. `919876543210`
- `NEXT_PUBLIC_APPS_SCRIPT_URL` — added in build step 4
- `NEXT_PUBLIC_BASE_PATH` — **leave unset** for a custom domain. Only set it to
  `/<repo>` if serving from `username.github.io/<repo>`.

Nothing secret belongs in any of these. They all ship to the browser.

## GitHub Pages gotchas already handled

- `output: 'export'` — no API routes, no server components fetching at request time
- `trailingSlash: true` — `/trip` exports as `/trip/index.html`
- `images: { unoptimized: true }` — `next/image` optimisation needs a server
- `public/.nojekyll` — without it, Pages deletes `_next/` and the site loads unstyled
- `lib/asset.ts` — prefixes `basePath` onto plain `<img src>` and `<a href>` paths
