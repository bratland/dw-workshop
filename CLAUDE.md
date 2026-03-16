# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workshop resource page for Daily Wins — a static SvelteKit site for workshop attendees. Single-page design with:
- Hero section and workshop agenda (6 blocks, 2.5h total)
- About section (Anders Bratland, workshop leader)
- 12 AI tools organized in 3 categories:
  - **Coding tools** (01–05): Lovable, Replit, Cursor, Claude Code, GitHub Copilot
  - **Databases & hosting** (06–09): Supabase, Turso, Vercel, Netlify
  - **AI & integrations** (10–12): OpenRouter, Composio, Fortnox MCP
- Tips section, QR code for mobile access, and footer

## Commands

```bash
npm run dev            # Start dev server (default port 5173)
npm run build          # Build for production
npm run preview        # Preview production build
npx svelte-check       # Type check
```

## Architecture

- **SvelteKit** with static adapter potential (currently adapter-auto)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — config is in `src/app.css` using `@theme` directive, no `tailwind.config.js`
- **QR Code** generated client-side via `qrcode` library on canvas

### Key Files

- `src/app.css` — Tailwind theme (custom colors: navy, lime, bg-warm, gray-soft)
- `src/routes/+page.svelte` — Single-page app with all content, tool data, and inline styles
- `src/lib/components/QrCode.svelte` — Canvas-based QR code generator

## Design System

Mirrors dailywins.se: minimalist, dark navy (#0e122f) on white, Inter font, lime (#d4e600) accent for CTAs, warm gray (#e8e4df) for secondary sections. No images — typography and whitespace driven. Anders profile image has AB-initials fallback.

## Language

UI text is Swedish. Code (variables, comments, component names) is English.
