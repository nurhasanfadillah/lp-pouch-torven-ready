# Dokumentasi Landing Page TORVEN INDUSTRIES

> **Project:** Landing Page Torven Industries
> **Tech Stack:** React 19 + Vite + Tailwind CSS 3.4

---

## Struktur Proyek

```
landing-page-torven/
├── CLAUDE.md
├── documentation/
│   └── README.md
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    ├── data/
    │   └── landingContent.js
    └── lib/
        ├── tracking.js
        └── utils.js
```

---

## Urutan Section (App.jsx)

1. Hero
2. TrustStrip
3. ProblemSolution
4. WhyJisoi (Keunggulan)
5. Testimonials
6. ProductDetails
7. DtfWorkflow
8. UseCases
9. Pricing
10. Faq
11. FinalCta

---

## Edit Konten

Semua teks dan copy berada di `src/data/landingContent.js`.

---

## Google Ads Tracking

Update ID konversi di `src/lib/tracking.js` dengan ID Google Ads Torven Industries.

---

## Deploy

- **Netlify**: Auto-deploy dari branch `main`
- **Build command**: `npm run build`
- **Output directory**: `dist/`
