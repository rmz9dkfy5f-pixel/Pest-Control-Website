# Titanium Barrier Pest Control — Claude Code

## ⚠ Pending Before This Project Is Complete

Two tasks were left open on 2026-06-25 and must be addressed:

1. **Confirm SSL** — check whether `https://titanium-barrier-pest-control.craftandconscious.com/` works. If not, run Certbot on the IONOS VPS.

2. **Update domain config in repo** — both files still reference `example.com`:
   - `src/lib/site.ts` → change `domain` to `titanium-barrier-pest-control.craftandconscious.com`
   - `public/sitemap.xml` → update all URLs to the live domain
   - Then rebuild and redeploy on the VPS.

---

## Project

Next.js 15 App Router + TypeScript marketing site for a fictional pest control business (Raleigh, NC). Demo only — all business data is placeholder.

- Live: http://titanium-barrier-pest-control.craftandconscious.com/ (IONOS VPS)
- Vault: `02_PROJECTS/Pest_Control_Website/` in Obsidian brain

## Key Files

- `src/lib/site.ts` — all business config (name, domain, phone, email, address, hours)
- `src/lib/services.ts` — all 7 service definitions (single source of truth for routes + content)
- `src/app/layout.tsx` — root layout, metadata, JSON-LD schema
- `public/sitemap.xml` — update domain before any SEO use

## Rules

- `src/lib/services.ts` slugs are used as dynamic routes — do not rename a slug without updating all internal links
- Contact form (`/api/contact`) logs to server only — no real email delivery
- No database, no auth, no external API keys required
- Do not force-push
