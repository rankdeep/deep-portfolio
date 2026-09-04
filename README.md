# Deep Rank — Portfolio (Next.js)

Exact port of the static HTML portfolio into Next.js 14 with App Router.

## Tech
- **Next.js 14** — App Router, static export (`output: 'export'`)
- **TypeScript** — strict mode
- **next/font** — self-hosted Orbitron, Exo 2, Rajdhani (zero layout shift)
- **next/image** — automatic optimisation for all project images
- No component library — uses the existing custom CSS token system

## Structure
```
app/
  layout.tsx       ← HTML shell, anti-FOUC script, fonts
  page.tsx         ← assembles all sections
  globals.css      ← full CSS token system (7 themes × 2 modes)
components/
  Providers.tsx    ← ThemeContext wrapper
  Header.tsx       ← sticky nav, mobile menu, active link
  Hero.tsx
  Services.tsx
  Work.tsx         ← 3D slider + WordPress/Webflow tabs
  About.tsx
  Skills.tsx
  Experience.tsx
  Process.tsx      ← serpentine SVG path (client-side)
  Contact.tsx
  Footer.tsx
  ThemeSwitcher.tsx ← 7 themes × light/dark, localStorage
  BgCanvas.tsx     ← particle/star canvas animation
  CursorGlow.tsx
  ScrollReveal.tsx
hooks/
  useTheme.ts      ← theme context + localStorage persistence
  useScrollReveal.ts
data/
  index.ts         ← all content as typed arrays (projects, services, etc.)
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy your images into /public
#    Kasha.webp, Devamrita-Swami_home.webp, Peppy-Cow_home.webp,
#    sppropperties.webp, mascotvalves.webp, 3d-character.webp,
#    The-Jordan-Insurance-Agency.webp, Bite-Buddy.webp,
#    TastiQuest.webp, Novitrax.webp, BreakPoint-Systems.webp,
#    favicon.ico, favicon-32x32.png, apple-touch-icon.png

# 3. Start dev server
npm run dev
# → http://localhost:3000

# 4. Build static export
npm run build
# → /out folder — deploy this anywhere

# 5. Deploy to Vercel (recommended)
npx vercel
```

## Adding a new project
Open `data/index.ts`, add an object to the `projects` array:
```ts
{
  img: '/your-image.webp',
  alt: 'Alt text',
  category: 'WordPress · Category',
  title: 'Project Name',
  excerpt: 'Short description.',
  tags: ['WordPress', 'Tag2'],
  url: 'https://example.com',
  type: 'wordpress', // or 'webflow'
}
```
Then drop the image into `/public`. Done.

## Changing theme defaults
Edit `hooks/useTheme.ts` — change the fallback values in `get()` calls.
