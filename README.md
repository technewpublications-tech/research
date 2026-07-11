# Researcher Connect — Website Redesign

A full rebuild of researcherconnect.com: minimal, editorial, "premium consultancy" look.
Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS. No CMS, no database —
everything lives in code so it's simple to run and simple to hand off.

## Run it locally

You need [Node.js](https://nodejs.org) 18.17 or newer installed.

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — that's it.

## Project structure

```
app/                    → every page (Next.js App Router — folder = URL route)
  page.tsx              → homepage
  services/<slug>/      → the 6 service pages
  contact-us/  faq/  privacy-policy/  terms-of-use/
  api/contact/route.ts  → handles the contact form submission
components/             → reusable UI pieces (Header, Footer, ContactForm, etc.)
data/site.ts            → ALL editable content: services, nav links, contact info, stats
app/globals.css         → design tokens (colors, fonts, textures)
tailwind.config.ts      → color palette, font families, spacing
```

See `ARCHITECTURE.md` for the full breakdown of how everything fits together and how to
extend it.

## Editing content

Almost everything you'll want to change lives in **`data/site.ts`**:
- Contact email, phone, WhatsApp link, address
- All 6 services — title, description, bullet points, process steps, FAQs
- Stats shown on the homepage
- Nav links

Change it there and it updates everywhere the data is used — you don't need to touch
individual page files for text edits.

## Placeholder contact info

The phone number in `data/site.ts` is a placeholder (`+00 000 000 0000`) — swap it for the
real one whenever you have it. The email is already set to `info@researcherconnect.com`.

## Turning on the contact form email

Right now, form submissions are logged to the terminal (so you can test the full flow
without any setup). To actually send emails:

1. Create a free account at [resend.com](https://resend.com) and grab an API key.
2. Copy `.env.local.example` to `.env.local`.
3. Fill in `RESEND_API_KEY` (and `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` if you want to
   change the defaults).
4. Restart the dev server.

## Images

All images are real photography hotlinked from Unsplash (free license, no attribution
required) via `next/image`. To swap any of them, just change the `image` URL in
`data/site.ts` — any Unsplash photo URL, or your own hosted image, will work.

## Deploying

This is a standard Next.js app — it deploys to Vercel, Netlify, or any Node host with:

```bash
npm run build
npm run start
```

## Domain

Built for **researcherconnectpro.com** (set in `data/site.ts` under `site.domain`, used
for metadata/SEO tags). Change it there if the domain changes.
