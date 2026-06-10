# Elementum — React Landing Page

A pixel-close React implementation of the Elementum Figma design.

## Tech Stack
- React 18 (Vite)
- Plain CSS (no UI libraries)
- Google Fonts: Playfair Display + Inter

## Project Structure
```
src/
  components/
    Navbar.jsx / .css       — sticky responsive nav
    Hero.jsx / .css         — headline + floating avatars
    About.jsx / .css        — "Tomorrow should be better…"
    Progress.jsx / .css     — "See how we can help…"
    Services.jsx / .css     — "What we can offer you!"
    Testimonial.jsx / .css  — customer quote
    Newsletter.jsx / .css   — subscribe CTA
    Footer.jsx / .css       — 4-column footer
  App.jsx
  index.css                 — global tokens + reset
```

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output: /dist
```

## Deploy to Vercel

**Option A — CLI**
```bash
npm install -g vercel
vercel
```

**Option B — Dashboard**
1. Push to GitHub
2. vercel.com/new → Import repo
3. Click Deploy (Vite auto-detected)
