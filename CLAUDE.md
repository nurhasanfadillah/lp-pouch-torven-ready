# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🚀 Quick Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

---

## 🏗️ Tech Stack

- **React 19** + Vite 8 (JSX, functional components, hooks)
- **Tailwind CSS 3.4** — Custom design tokens in `tailwind.config.js`
- **shadcn/ui patterns** — Radix UI primitives + CVA (class-variance-authority)
- **Framer Motion** — Animations
- **Lucide React** — Icons

---

## 🎨 Design System (tailwind.config.js)

| Token | Value | Usage |
|-------|-------|-------|
| `jisoi.red` | `#B11226` | Primary CTA, accents |
| `jisoi.burgundy` | `#3A050B` | Dark sections |
| `jisoi.cream` | `#FFF7F2` | Light backgrounds |
| `jisoi.sand` | `#E8D4C2` | Borders, subtle fills |
| `jisoi.amber` | `#FFB23F` | Highlights, badges |
| `font-display` | Archivo Black | Headlines |
| `font-body` | DM Sans | Body text |
| `shadow-glow` | red glow | CTA buttons |
| `shadow-amber` | amber glow | featured elements |

---

## 📁 Project Structure

```
src/
├── App.jsx                 # Root component
├── main.jsx                # Entry point
├── index.css              # Tailwind directives + global styles
├── components/
│   ├── layout/            # Header, Footer, StickyWhatsAppBar
│   ├── sections/          # Page sections (Hero, Pricing, FAQ, etc.)
│   └── ui/                # Reusable primitives (Button, Badge, Accordion)
├── data/
│   └── landingContent.js  # All text/content data (edit here for copy)
└── lib/
    └── utils.js           # cn() helper (clsx + tailwind-merge)
```

**Path alias:** `@/` maps to `src/` (configured in vite.config.js)

---

## 🔌 Key Patterns

### Button with variant + size (CVA)
```jsx
import { Button } from '@/components/ui/Button'
<Button variant="primary" size="lg">CTA Text</Button>
```

### Section wrapper
```jsx
import { Container } from '@/components/ui/Container'
<Container>...content...</Container>
```

### Adding new content
Edit `src/data/landingContent.js` — all copy/text lives here, separate from components.

---

## 🌐 Deployment

- **Netlify**: Auto-deploys from `main` branch
- **Build output**: `dist/` folder
- Preview deployment URL generated on each push