# Developer Architecture — Researcher Connect Redesign

## 1. Stack & why

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | File-based routing = one folder per page, server-rendered by default (fast, good SEO), runs anywhere with Node — including `npm run dev` on a laptop. |
| Language | **TypeScript** | Catches broken content references (e.g. a typo'd service slug) at build time instead of in production. |
| Styling | **Tailwind CSS** | All design tokens (colors, fonts, spacing) defined once in `tailwind.config.ts`, used everywhere — no separate CSS files to keep in sync. |
| Icons | **lucide-react** | Lightweight, consistent line-icon set. |
| Email | **Resend** (optional) | Contact form works with zero config (logs to terminal); add one API key to make it send real emails. |
| Images | **next/image** + Unsplash | Automatic resizing/lazy-loading/compression, no image files to manage in the repo. |

No database. No CMS. No auth. This is a marketing/services site — content lives in one
TypeScript file (`data/site.ts`) instead of a headless CMS, which means zero hosting cost
for a backend and zero moving parts to break. If this later needs a blog or a client
portal, that's the natural point to add a database — not before.

## 2. Folder structure

```
app/
├── layout.tsx              Root shell: fonts, <Header>, <Footer>, global <html>/<body>
├── globals.css             Design tokens: colors, grain texture, animation keyframes
├── page.tsx                Homepage
├── not-found.tsx           Custom 404
├── contact-us/page.tsx
├── faq/page.tsx
├── privacy-policy/page.tsx
├── terms-of-use/page.tsx
├── services/
│   ├── software-solutions/page.tsx
│   ├── conference-management/page.tsx
│   ├── visa-consultancy/page.tsx
│   ├── internship-services/page.tsx
│   ├── author-services/page.tsx
│   └── patent-consultancy/page.tsx
└── api/
    └── contact/route.ts    POST endpoint the contact form submits to

components/                 Reusable, presentational — no page owns its own copy of these
├── Header.tsx               Sticky nav, mobile menu
├── Footer.tsx                Sitemap, socials, contact
├── ServiceTemplate.tsx      The template all 6 service pages render (see §3)
├── ServiceCard.tsx           Homepage service grid tile
├── ContactForm.tsx           Client-side form + submit logic
├── Accordion.tsx              FAQ expand/collapse
├── CTASection.tsx             Reusable "let's talk" band used on every page
├── Reveal.tsx                 Scroll-triggered fade-in wrapper (IntersectionObserver)
├── Button.tsx / Container.tsx / SectionLabel.tsx   Small layout primitives

data/
└── site.ts                  Single source of truth for all text content (see §4)
```

## 3. One template, six pages

The six service pages (`/services/*`) are **not** six separate hand-written pages. Each
one is ~12 lines:

```tsx
// app/services/software-solutions/page.tsx
const service = getServiceBySlug("software-solutions")!;
export const metadata = { title: service.title, description: service.summary };
export default function Page() {
  return <ServiceTemplate service={service} />;
}
```

`components/ServiceTemplate.tsx` holds the actual layout (hero, image, "what's included"
grid, process steps, FAQ accordion, closing CTA). All six pages share identical structure
and styling automatically. **To add a 7th service**, you add one object to the `services`
array in `data/site.ts` and one 12-line page file — you never touch the template.

## 4. Content model (`data/site.ts`)

This file is the CMS. It exports:

- `site` — company-level facts: name, domain, email, phone, address, social links.
  **This is where the placeholder phone number lives** — search for `TODO` in this file.
- `services[]` — one object per service: title, tagline, summary, image URL, bullet
  points, 4-step process, FAQs. The homepage grid, the footer links, and all six service
  pages are all generated from this array — nothing is duplicated.
- `navLinks[]` — header navigation.
- `stats[]` — the four numbers shown on the homepage.

Editing text on the live site is almost always a matter of editing a string in this one
file, not hunting through JSX across ten page files.

## 5. Design system

Defined once, referenced everywhere — no magic numbers scattered through components.

- **Palette** (`tailwind.config.ts`): warm paper background (`#F7F4EC`), ink-black text
  (`#14140F`), a moss-green accent (`#2F5644`) used for links/highlights, and a single
  warm clay tone reserved for error states. Deliberately avoids the generic
  blue-corporate / purple-gradient SaaS look.
- **Type**: `Fraunces` (serif display, used for all headings — gives the "premium
  editorial" feel) paired with `Manrope` (clean sans for body text). Loaded via
  `next/font/google` in `app/layout.tsx`, so no external font requests slow the page down
  and there's no flash of unstyled text.
- **Texture**: a very faint SVG noise/grain overlay on `<body>` (`globals.css`) — this is
  most of what makes the site feel like a designed product instead of a template.
- **Motion**: `components/Reveal.tsx` fades + rises content into view on scroll using
  `IntersectionObserver` — no animation library needed for this, keeping the JS bundle
  small.

## 6. Contact form flow

1. `components/ContactForm.tsx` (client component) collects name/email/service/message
   and `POST`s JSON to `/api/contact`.
2. `app/api/contact/route.ts` (server-side) validates the payload, then:
   - If `RESEND_API_KEY` is **not** set → logs the submission to the terminal and returns
     success. This means the form is fully clickable and testable with zero setup.
   - If it **is** set → sends an email via Resend to `CONTACT_TO_EMAIL` (defaults to
     `info@researcherconnect.com`), with the sender's email set as reply-to.
3. The form shows a loading state, a success state, or an inline error — no page reload.

## 7. Content rewrite approach

Per your instruction, only the original page **headings/section titles** were kept
(Software Solutions, Conference Management, Collaboration Services → reframed as Visa
Consultancy, Internship Services, Author Services, Patent Drafting Services). All body
copy was rewritten from scratch in plain, direct English — shorter sentences, no jargon,
no keyword-stuffed SEO filler like the original ("Best publication in Nagpur, Top
publication in Nagpur..."). The goal was copy that reads like a person wrote it for
another person, not for a search engine.

## 8. What's intentionally left out

- **Partner/university logos** — the original site displays real institution logos
  (universities, colleges). Reusing those without explicit permission from each
  institution is a trademark risk, so this rebuild replaces that section with a stats
  strip (`50+ partner institutions`, etc.) instead. Swap in real logos once you have
  permission/assets.
- **Testimonials** — no invented client quotes. Fabricated testimonials attributed to
  named people would be dishonest; add real ones (with permission) when you have them.
- **Phone number** — placeholder, as you asked.

## 9. Extending the site

| Task | Where |
|---|---|
| Change any text, price, or contact detail | `data/site.ts` |
| Add a 7th service | Add to `services[]` in `data/site.ts` + one new `page.tsx` |
| Change colors/fonts | `tailwind.config.ts` |
| Add a new top-level page (e.g. "About") | New folder under `app/`, add link to `navLinks` |
| Swap any image | Change the `image` URL in `data/site.ts` (any hosted image URL works) |
| Turn on real contact-form emails | `.env.local` — see README |
