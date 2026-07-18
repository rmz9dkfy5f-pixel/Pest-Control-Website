# Context

Use this file for durable project context that agents need across sessions.

## Project-Specific Facts

- Next.js 15 (App Router) + TypeScript marketing site for a fictional pest-control business
  (Titanium Barrier, Raleigh NC). Demo only — all business data is placeholder.
- Single sources of truth: `src/lib/site.ts` (business config) and `src/lib/services.ts` (the 7
  services; slugs are used as dynamic routes).
- Contact form (`/api/contact`) logs server-side only — no real email delivery.
- No database, no auth, no external API keys.
- Repo is Git-backed with remote `origin` on GitHub (public) and a live IONOS VPS deployment
  (manual/external — no in-repo CI or deploy automation). Classification: Git-backed with deployment.
- V3.4 agent-OS layer installed 2026-07-15, committed/tagged `v1.1.0` on 2026-07-17 (not pushed).

## Known Constraints

- Do not rename a `services.ts` slug without updating all internal links.
- Do not force-push.
- Deployment operational specifics (VPS alias, deploy root, service/log locations) are TBD in
  `docs/governance/REPOSITORY_HANDOFF_CONFIG.md` — confirm with the owner before any VPS action.
- This repo's commit history must not carry LLM/tool attribution lines (`Co-Authored-By: …`).

## Do-Not-Touch / Pending

- `src/lib/site.ts` and `public/sitemap.xml` still reference `example.com` — an owner-tracked task
  in `CLAUDE.md` to swap to the live domain, then rebuild/redeploy.
- SSL for the live HTTPS URL is unconfirmed (`CLAUDE.md` task #1).

## Repeated Corrections

Add facts here when an agent makes the same mistake more than once.
