# Aria Vance — Premium Glassmorphism Portfolio

A production-ready, single-page portfolio built with **Next.js 16 (React 19) + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide React**. It features a sophisticated dark glassmorphism design system, smooth scroll-triggered animations, an honest demo contact form with a working API endpoint, and a fully responsive layout from mobile to ultrawide.

> The original brief asked for React + Vite. This implementation uses **Next.js 16**, which runs on React 19 — every library in the requested stack (React, TypeScript, Tailwind, Framer Motion, Lucide) is used as-is, and the component architecture maps 1:1 to the requested `src/components` structure.

---

## Quick start

```bash
# install deps
bun install

# start the dev server (http://localhost:3000)
bun run dev

# lint
bun run lint
```

Open the app in the **Preview Panel** (the dev server is internal to the sandbox — `localhost:3000` is not directly reachable).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, forced dark mode
│   ├── page.tsx            # Composes the entire single-page site
│   ├── globals.css         # Design tokens + glassmorphism utilities + keyframes
│   └── api/contact/route.ts  # Honest demo contact endpoint (validates + logs)
├── components/
│   ├── ui/                 # shadcn/ui primitives (pre-installed)
│   └── portfolio/          # All portfolio-specific components
│       ├── Background.tsx        # Ambient orbs + grid + noise + cursor glow
│       ├── Navbar.tsx             # Floating glass nav, scroll-aware, mobile sheet
│       ├── Hero.tsx              # Headline, CTAs, glass avatar card, scroll cue
│       ├── About.tsx             # Bio, stats, philosophy
│       ├── Projects.tsx          # Filterable project grid
│       ├── ProjectCard.tsx       # Reusable project card
│       ├── Skills.tsx           # Grouped glass chips
│       ├── Experience.tsx       # Vertical glowing timeline
│       ├── Contact.tsx          # Honest demo form (validation + API)
│       ├── Footer.tsx           # Sticky footer, back-to-top, socials
│       ├── GlassCard.tsx        # Reusable glass surface (variants + glow)
│       ├── GradientButton.tsx    # Primary / glass / ghost button
│       ├── Reveal.tsx           # Scroll-reveal + stagger wrappers
│       ├── Magnetic.tsx         # Cursor-magnetic wrapper
│       ├── SectionHeading.tsx   # Reusable section header
│       └── SocialIcon.tsx       # Accessible social link with Lucide icons
├── data/                    # EDITABLE CONTENT — change these to rebrand
│   ├── profile.ts          # Name, role, bio, stats, socials, nav
│   ├── projects.ts         # Project entries + categories
│   ├── skills.ts          # Skill groups + chips
│   └── experience.ts      # Timeline entries
└── hooks/                  # use-active-section, use-cursor-glow, use-reduced-motion, use-scrolled
public/images/             # Generated hero avatar + 4 project previews
```

---

## Customization

Everything visible is data-driven. Edit the files in `src/data/`:

| What to change | File |
|---|---|
| Your name, role, bio, stats, socials, email, location | `src/data/profile.ts` |
| Projects (title, description, stack, image, links, category) | `src/data/projects.ts` |
| Skills & categories | `src/data/skills.ts` |
| Experience / timeline entries | `src/data/experience.ts` |
| Theme colors, glass opacity, blur, shadows | `src/app/globals.css` (`:root` variables) |
| Images | drop files into `public/images/`, reference as `/images/<name>.png` |

### Enabling real contact-form delivery

The contact form posts to `/api/contact`, which validates and **logs** the submission but does **not** send an email (this is intentional — see the honest "Demo form" notice in the UI). To wire up real delivery:

1. Open `src/app/api/contact/route.ts`.
2. Replace the `// ---- DEMO BEHAVIOR ----` block with a call to your email provider (Resend, Postmark, SendGrid, etc.) using a server-side API key.
3. (Optional) Persist submissions with Prisma — `import { db } from "@/lib/db"` is already set up.

---

## Design system

- **Palette**: deep navy/charcoal base (`oklch(0.16 0.025 260)`) with cyan / violet / blue glow accents.
- **Glass surfaces**: three variants — `.glass` (default), `.glass-strong` (navbar on scroll, primary cards), `.glass-subtle` (chips, badges). All use `backdrop-filter: blur()` + translucent white borders + top highlight pseudo-element.
- **Typography**: Plus Jakarta Sans (display + body), JetBrains Mono (code).
- **Motion**: Framer Motion. Scroll reveals respect `prefers-reduced-motion`. Cursor-following glow is disabled on touch devices and for reduced-motion users.
- **Accessibility**: semantic landmarks, ARIA labels on interactive elements, keyboard-focusable controls, visible focus rings, color contrast tuned for dark mode.

---

## Sections

1. **Navbar** — floating glass, monogram, nav links with animated active indicator (IntersectionObserver), "Let's Talk" CTA, mobile sheet menu with body-scroll lock + Escape.
2. **Hero** — availability badge, gradient headline, intro, dual CTAs, social links, glass avatar card with rotating conic ring + floating chips, scroll indicator.
3. **About** — bio, abstract monogram visual, 4 stat cards, philosophy quote card.
4. **Projects** — category filters (All / Web Apps / UI/UX / Experiments) with animated pill, responsive grid, premium cards with image zoom, accent wash, tech badges, View + GitHub links.
5. **Skills** — 4 grouped glass cards with compact chips (no percentage bars).
6. **Experience** — vertical timeline with glowing animated line, alternating cards on desktop, left-aligned on mobile, highlight glow for current role.
7. **Contact** — honest demo form (name, email, subject, message) with inline validation + toast feedback, contact info card, socials, explicit demo notice.
8. **Footer** — brand, quick links, socials, back-to-top, copyright, closing message. Sticky to bottom on short pages via `min-h-screen flex flex-col` + `mt-auto`.

---

## Tech notes

- **Next.js 16 App Router** with a single user-visible route (`/`).
- **Tailwind CSS 4** via `@import "tailwindcss"` and CSS-first theme tokens.
- **Framer Motion 12** for all animations.
- **Lucide React** for icons.
- No external image dependencies — all imagery is generated locally under `public/images/`.
- `prefers-reduced-motion` is respected everywhere (animations collapse, cursor glow disabled).
- Mobile menu locks body scroll and closes on Escape / backdrop click / nav click.

---

## License

Sample portfolio — replace the placeholder content with your own.
