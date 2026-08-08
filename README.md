# OG Lens Studios

**Beauty Unveiled Through The Lens.**

A luxury, editorial-style photography portfolio site for OG Lens Studios, a
photography studio based in Lagos, Nigeria — built with Next.js 14 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

If you're new to Next.js, start with **SETUP.md** — it walks through
everything from installing Node.js to deploying the live site, assuming no
prior experience.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **next/image** for optimized images
- **react-icons** + **lucide-react** for iconography
- **ESLint** + **Prettier** for code quality
- Self-hosted fonts via `@fontsource` (Cormorant Garamond + Inter) — no
  runtime dependency on Google Fonts

## Project structure

```
app/                    Routes (App Router)
  layout.tsx             Root layout: fonts, metadata, Navbar/Footer
  page.tsx                Home
  loading.tsx             Global loading state
  error.tsx                Global error boundary
  not-found.tsx             Custom 404
  sitemap.ts                 Dynamic sitemap.xml
  robots.ts                    Dynamic robots.txt
  globals.css                   Design tokens + base styles
  portfolio/page.tsx      Portfolio (filterable grid + lightbox)
  about/page.tsx           About
  services/page.tsx         Services
  contact/page.tsx           Contact (form + contact channels)

components/             Reusable UI components
hooks/                   Custom hooks (keyboard nav, swipe, scroll lock)
lib/                      Data + constants + utilities
types/                     Shared TypeScript types
public/images/             Images (SVG placeholders — replace with real photos)
scripts/                    One-off scripts (placeholder image generator)
```

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Replacing placeholder images

Every portfolio, hero, and about image is currently a generated on-brand SVG
placeholder (black/gold, labeled by category) so the project runs
immediately with zero missing assets. Before launch, replace the files in
`public/images/` with real photography — see **SETUP.md** for the exact
steps.

## Wiring the contact form to send real email

The contact form validates input client-side and opens the visitor's email
client via a `mailto:` link. To send messages directly from the server
instead, add a Next.js Route Handler (`app/api/contact/route.ts`) and call
an email service such as Resend or SendGrid, then point `ContactForm.tsx`
at it with `fetch`.

## Deployment

This project is Vercel-ready out of the box. See SETUP.md for step-by-step
deployment instructions, including connecting a custom domain.
