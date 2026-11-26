# Smart Avatar 0.1 — Next.js (React) version

The full SmartAvatar website as a Next.js 14 project: 29 pages, scroll scenes, dot-matrix
animations, the pocket arcade (race, snake, blocks, shooter), chat contact and responsive layout.
It builds to a plain static site, so it runs on Vercel, Netlify or any web host.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 while you work
npm run build      # writes the finished site to /out
npm start          # serves /out on http://localhost:3000
```

Needs Node 18.17 or newer.

## Deploy

- **Vercel:** import the folder (or its Git repo). Framework: Next.js. Nothing else to set.
- **Any host:** run `npm run build` and upload the `out` folder.

## Where things are

| What | Where |
|---|---|
| Page routes | `app/` (`page.jsx` per page, `[slug]` folders for the 5 powers, 6 machines, 6 projects) |
| All text, colours and shapes for inner pages | `content/site.js` |
| Site name, URL, email | `SITE` in `content/site.js` |
| Colours, fonts, spacing, corner shapes | top of `app/globals.css` (`:root` tokens, `--px4` / `--px8` corners) |
| Inner page building blocks | `components/ui.jsx` (`DotHero`, `MorphStory`, `NextBig`, `CartLink`, `CaseCard`, `Split`) |
| Frame used by every inner page | `components/InnerPage.jsx` (logo, clock, dock, cursor, footer) |
| Home page markup | `components/HomeMarkup.jsx` |
| Footer | `components/Footer.jsx` |
| Handheld + cartridges | `components/Handheld.jsx` |
| Behaviour (animations, canvas scenes, games) | `lib/home-engine.js`, `lib/site-engine.js`, `lib/arcade-engine.js` |
| Logo, favicon, preview image | `public/assets/` |
| Icons and halftone illustrations as SVG | `public/assets/icons/` (22 files) |

## Common edits

**Change text on a power, machine or project page** — edit `content/site.js`. The pages update on
the next build.

**Add a machine (use case)** — add an object to `CASES` in `content/site.js` with
`slug, name, ind, color, shape, lead, ch, ap, out, feats`. A new page appears at `/machines/<slug>`.

**Change colours** — edit the tokens in `:root` at the top of `app/globals.css`
(`--paper`, `--ink`, `--butter`, `--sky`, `--mint`, `--pink`, `--lav`).

**Change the logo** — replace `public/assets/logo.svg` and `public/assets/favicon.svg`.

**Halftone shapes** — the dot illustrations are drawn from the shapes in the `SH` object inside the
engines (`robot`, `tractor`, `crane`, `cart`, `car`, `shield`, `avatar`, `house`, `chip`, `pad`,
`globe`, `people`, `mail`, `bolt`). Use one by name anywhere a `shape` is asked for.

## How it's built

- Pages are React components rendered to static HTML at build time.
- The animations run in plain JavaScript (GSAP + ScrollTrigger, Lenis smooth scroll, canvas) and
  start once per page from a small client component (`SiteScripts`, `HomeScripts`).
- Links between pages use normal page loads with a pixel transition, so every scroll scene starts
  fresh on each page.

## Credits and licences

- GSAP 3.12 (free standard licence) — gsap.com
- Lenis (MIT) — darkroom.engineering
- Fonts: Pixelify Sans and Silkscreen (SIL Open Font Licence, Google Fonts),
  Satoshi (Fontshare, loaded from api.fontshare.com, not bundled)
