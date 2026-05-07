# The Niels Experience

An interactive single-page application built as a job application for the **Live Experience Captain** role at **Livewall**.

> Event energy. Creative execution. Live moments that stick.

Built with Next.js 14 (App Router), React 18, Tailwind CSS, and Framer Motion. Designed to deploy on Vercel in one click.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open
# http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel detects Next.js automatically — just press **Deploy**.

No env vars needed.

---

## Project structure

```
the-niels-experience/
├── app/
│   ├── globals.css         # Tailwind + custom utilities (neon, glass, grid)
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Single-page app, scroll tracking, navigation
├── components/
│   ├── Hero.tsx            # Hero screen with animated CTA
│   ├── ProgressIndicator.tsx  # Top bar + side dot navigation
│   ├── SectionShell.tsx    # Shared section wrapper (header, accent glow)
│   └── sections/
│       ├── EventFloor.tsx       # Level 01 — events, Zeester, Schrobbelèr
│       ├── BackstageMode.tsx    # Level 02 — logistics, build, pressure
│       ├── CreativeLab.tsx      # Level 03 — concept, beleving, story
│       ├── WhyLivewall.tsx      # Level 04 — fit pitch
│       └── FinalCall.tsx        # Level 05 — contact, CV, LinkedIn
├── lib/
│   └── levels.ts           # Single source of truth for the 5 levels
├── public/
│   └── (place CV PDF here as `cv-niels-laumans.pdf`)
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Customizing the content

All section copy lives directly in the section components. Open the file, edit the strings, save — the dev server hot-reloads.

### Add your CV

Drop your CV in `public/` as:

```
public/cv-niels-laumans.pdf
```

The download button in the **Final Call** section already points there.

### Update LinkedIn

Open `components/sections/FinalCall.tsx` and replace the `href` on the LinkedIn button if your URL differs.

### Replace placeholder visuals

The current design is text + light/glow driven (no photo placeholders required). To add visuals:

- Drop images in `public/`
- Use `next/image` and reference them as `/your-image.jpg`
- Suggested spots: Hero background, Event Floor cards, Final Call avatar

---

## Design system

| Token       | Value                                    |
| ----------- | ---------------------------------------- |
| Background  | `#05050a` (stage-950)                    |
| Neon pink   | `#ff2d87`                                |
| Neon cyan   | `#22e8ff`                                |
| Neon lime   | `#b6ff3c`                                |
| Neon violet | `#9d4dff`                                |
| Display     | Space Grotesk (Google Fonts)             |
| Body        | Inter (Google Fonts)                     |

Each level has its own accent color (pink, cyan, lime, violet, pink) defined in `lib/levels.ts`.

---

## Notes

- Mobile responsive (single-column collapse, side dot nav hidden on mobile).
- Smooth scroll between sections, IntersectionObserver-based active state.
- All animations use Framer Motion + Tailwind keyframes — no heavy libraries.
- Accessible: focus rings on CTAs, semantic landmarks, labeled buttons.

Built with respect for Livewall's craft.
