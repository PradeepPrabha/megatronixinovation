# Megatronix Innovation (Frontend)

React + TypeScript + Vite + Tailwind CSS · React Router · Framer Motion · React Hook Form + Zod · Swiper · Lucide

```bash
npm install
npm run dev      # local dev
npm run build    # production build in /dist
```

## Frontend-only notes
- All forms (Contact, Quote) validate with Zod but **only simulate submission**. Nothing is sent to Megatronix Innovation.
- Projects are **sample/demo content** (`src/data/projects.ts`).
- Testimonials are hidden until real reviews are added to `src/data/testimonials.ts`.
- WhatsApp button appears only when `whatsappNumber` is set in `src/data/company.ts`.
- Google Map appears only when a verified `mapEmbedUrl` is set in `src/data/company.ts`.
- Social links in `company.ts` are `#` placeholders. Privacy/Terms pages are template text needing review.
- Logo files live in `src/assets/logo/` (`megatronix-logo.png`, `megatronix-mark.png`, `megatronix-wordmark.png`).
- Address, phone and email in `src/data/company.ts` are still the old ATS details – replace them.
- For hosting, configure SPA fallback (all routes -> `index.html`).

## Structure
`src/components/{common,layout,home,services,projects,forms}`, `src/pages` (+ `pages/services`), `src/data`, `src/hooks`, `src/utils`, `src/types`.
"# ats" 
"# megatronixinovation" 
