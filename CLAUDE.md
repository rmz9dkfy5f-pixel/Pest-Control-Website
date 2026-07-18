@AGENTS.md

# Titanium Barrier Pest Control — Claude Code

## Agent Operating Framework (Project Starter Kit V3.4)

Before substantial work: confirm `docs/governance/PROJECT_CLASSIFICATION.md`, follow
`MODEL_SELECTION_GATE.md`, and read `docs/governance/AGENT_RUN_CONTRACT.md`. In VS Code, compare
the Claude Code and Codex execution paths before choosing a primary executor.

V3.4 skills for repeatable project work:

- `/v34-execution-loop` — implementation, bugfix, refactor, audit remediation, repo cleanup.
- `/v34-migration-loop` — existing-project migration into V3.4.
- `/v34-production-readiness` — production readiness checks.
- `/v34-context-eval-loop` — prompt, context, eval, and failure analysis.

Keep this file concise. Persistent project facts belong in the relevant doc, not here:
architecture → `docs/project/ARCHITECTURE.md`, current state → `docs/project/STATUS.md`,
decisions → `docs/project/DECISION_LOG.md`, known risks → `docs/governance/PROJECT_RISK_REGISTER.md`.

---

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
