# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workshop resource page for Daily Wins — multi-workshop SvelteKit site. Each workshop event has its own slug; visitors land on the variant tailored to their workshop.

- `/` → 307 redirect to nearest workshop (within ±18 h of event start, else nearest future).
- `/ekonomi`, `/salj`, `/bygg` — workshop-specific pages sharing the same template but with own hero, agenda, badge, and tool overrides.
- Each variant renders hero + agenda + about + why + goals + 12 AI tools (organized in 3 categories: coding / databases & hosting / AI & integrations) + tips + QR + footer.

## Commands

```bash
npm run dev            # Dev server on port 5191
npm run build          # Production build
npm run preview        # Preview production build (port 4173)
npm run check          # Type check (svelte-check)
```

## Architecture

- **SvelteKit** + Svelte 5 runes, adapter-auto (Vercel target).
- **Tailwind CSS v4** via `@tailwindcss/vite` — theme tokens in `src/app.css` using `@theme` directive, no `tailwind.config.js`.
- **QR Code** generated client-side via `qrcode` library; URL derived from `page.url.pathname` so each slug has its own QR.

### Key files

- `src/routes/+page.server.ts` — `/` redirect logic (pickCurrentSlug).
- `src/routes/[slug]/+page.server.ts` — slug validation + content load.
- `src/routes/[slug]/+page.svelte` — shared template, reads content via `t('<section>')`.
- `src/lib/i18n.svelte.ts` — translation accessor; `setTranslations()` injects per-workshop content; `setLang/toggleLang` for sv/en.
- `src/lib/workshops/types.ts` — shared types (WorkshopSlug, WorkshopTranslations, WorkshopMeta).
- `src/lib/workshops/registry.ts` — slug → config map + `pickCurrentSlug()`.
- `src/lib/workshops/_content/salj.ts` — canonical base translations (current Sälj content).
- `src/lib/workshops/_content/ekonomi.ts`, `bygg.ts` — spread saljTranslations and override hero/agenda/badge/about/etc.
- `src/lib/components/QrCode.svelte` — canvas-based QR code generator.

### Adding a new workshop

1. Create `src/lib/workshops/_content/<slug>.ts`:
   ```ts
   import type { WorkshopTranslations } from '../types';
   import { saljTranslations } from './salj';
   export const <slug>Translations: WorkshopTranslations = {
     ...saljTranslations,
     header: { badge: { sv: '...', en: '...' } },
     hero: { ...saljTranslations.hero, title1: { sv: '...', en: '...' }, description: { sv: '...', en: '...' } },
     // override agenda, about, goals, why, toolsIntro as needed
   };
   ```
2. Add the slug to `WorkshopSlug` union in `types.ts`.
3. Add an entry to `workshops` in `registry.ts` with `slug`, `eventSlug` (matches dw-event), `translations`, and `fallbackMeta` (date, location, capacity).

## Design System

Brand tokens synced from `Brand_Package_Daily_Wins_AB.zip` (extracted to `static/brand/` + `static/favicon.*`).

- Primary: lime `#d9ff42` (Victory Lime, CTAs).
- Secondary: blue `#184ace` (Trust Blue, eyebrow labels).
- Neutral 900 / navy: `#162638`.
- Background warm: `#f0efe2`.
- Font: ABC Diatype Variable Trial (`static/fonts/ABCDiatypeVariable.woff2`).

UI minimal, dark navy on white, lime accent for CTAs, warm gray for secondary sections. Anders profile image has AB-initials fallback.

## dw-event integration

The companion repo at `/Users/andersbratland/@code/Daily Wins/dw-event` is the source of truth for event metadata (title, date, location, registrations). Each workshop's `eventSlug` matches the dw-event slug (e.g. `ai-for-ekonomi`). Live fetch via Supabase REST is on the roadmap (`src/lib/server/dw-event.ts`); currently the page uses `fallbackMeta` from `registry.ts`.

## Language

UI text is Swedish. Code (variables, comments, component names) is English.
