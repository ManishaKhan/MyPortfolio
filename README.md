# Reel — Animated Portfolio (React + MUI + Framer Motion)

A motion-first developer portfolio built around a film-reel metaphor: a
horizontal project filmstrip that scrubs as you scroll, timecoded section
labels instead of generic numbering, and a page-load wipe transition.

## Stack
- React 18 + Vite
- Material UI v5 (custom dark theme — brass/teal accents on near-black)
- Framer Motion (page-load stagger, scroll-scrubbed reel, hover states)

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  theme.js                MUI theme — light ("Light Table") + dark ("Screening Room")
  ColorModeContext.jsx     Light/dark toggle state, persisted to localStorage
  data/
    projects.js            Edit to swap in your own projects (the reel frames)
    skills.js               Edit for the Calibration (skills) section
    experience.js           Edit for the Production History (experience) timeline
  components/
    Nav.jsx                Sticky nav — desktop links, mobile drawer, mode toggle
    Hero.jsx               Letter-stagger name reveal + sprocket rail
    ProjectReel.jsx         Signature element: scroll-scrubbed filmstrip
    Skills.jsx              Animated level bars, grouped by category
    Experience.jsx          Timeline with timecoded entries
    About.jsx               Scroll-triggered reveal + skills-summary list
    Contact.jsx             CTA section
    Footer.jsx
    IntroWipe.jsx           Page-load wipe transition (always dark, like a
                            projector startup flash — independent of mode)
```

## Light / dark mode

Click the sun/moon icon in the nav. Two modes:
- **Screening Room** (dark) — near-black, projected-image feel
- **Light Table** (light) — pale surface, like viewing negatives on a light table

Both share the same brass/teal accent pair and type system, so the toggle
changes contrast, not identity. The choice is remembered (`localStorage`) and
defaults to the visitor's OS preference on first visit.

## Customizing

- **Your info**: edit the name in `Hero.jsx`, the bio in `About.jsx`,
  and the email/links in `Contact.jsx` and `Footer.jsx`.
- **Projects**: edit `src/data/projects.js` — each entry is one frame on
  the reel (title, blurb, tags, accent color, timecode label).
- **Colors/fonts**: all in `src/theme.js`. The three signal colors are
  `#D8A24A` (brass), `#4FA8A0` (teal), `#C97B63` (clay) — used per-project
  in `projects.js`.
- **Reel scrub length**: in `ProjectReel.jsx`, `sectionHeight` controls how
  much vertical scroll is needed to scrub through all frames — increase the
  multiplier for a slower, more deliberate scrub.

## Accessibility

Respects `prefers-reduced-motion` (see `index.css`) — animations are
effectively disabled for users who request it at the OS level.
