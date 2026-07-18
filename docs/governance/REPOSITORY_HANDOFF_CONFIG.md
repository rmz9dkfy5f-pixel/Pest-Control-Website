# Repository Handoff Configuration

Project-local handoff/closeout configuration. Fill in only real, confirmed values — never
placeholder paths or commands presented as facts. For any section that does not apply given this
repository's `PROJECT_CLASSIFICATION.md` entry, write `N/A — <reason>` instead of deleting the
section or inventing a value.

Store operational coordinates here, never credentials. If this repository already has equivalent
configuration in `AGENTS.md`, deployment docs, or another canonical file, reference it rather than
duplicate it.

## Repository Identity

- Project name: Titanium Barrier Pest Control (`package.json` name: `titanium-barrier-pest-control`)
- Repository root: `/Users/ant/Projects/GitHub/Pest-Control-Website`
- Canonical remote: `origin` → `https://github.com/rmz9dkfy5f-pixel/Pest-Control-Website.git`
- Default branch: `main`
- Canonical handoff file: `CLAUDE.md` (Claude Code project memory) + `AGENTS.md` (agent-neutral); this file holds operational coordinates.

## Validation Contract

Discover these from the real toolchain (`package.json`, `pyproject.toml`, `Makefile`, CI config,
etc.) — do not invent commands that were not actually found.

- Install command: `npm install`
- Focused test commands: N/A — no test framework or test files configured (`package.json` has no test script/deps).
- Full test command: N/A — no automated test suite exists.
- Lint/type-check commands: `npm run lint` (`next lint`); type-check via `npx tsc --noEmit` (TypeScript is a devDependency; no dedicated script).
- Production build command: `npm run build` (`next build`).
- Runtime smoke test: `npm run start` after a build, then load `/` (Next.js production server); dev server is `npm run dev`.
- Manual or device checks: Contact form (`/api/contact`) only logs server-side — no real email delivery to verify (see `CLAUDE.md`).

## Snapshot Contract

Applies to Git-backed classifications (see `PROJECT_CLASSIFICATION.md`). Write `N/A — not
Git-backed` if this repository is Vault-only or Local non-Git.

- Snapshot required: conditional — commit-governed; a Git commit pushed to `origin` is the snapshot. No separate backup-snapshot mechanism is used.
- Naming rule: standard Git commit messages on `main`.
- Exclusions: per `.gitignore` — `node_modules`, `.next`, `out`, `.env*`, `.DS_Store`, debug logs.
- Verification method: `git status` clean and `git push` succeeded (HEAD present on `origin/main`).
- Checksum requirement: Git object hashes (inherent) — no external checksum required.
- Retention policy: GitHub remote history (`origin`).
- Restore/rollback procedure: `git checkout <sha>` / `git revert <sha>`; see `docs/governance/ROLLBACK_PLAN.md`.

### Snapshot Destination by Machine

Only relevant if snapshots are machine-path-dependent (e.g. an external backup drive). Detect the
current machine before resolving a destination:

```bash
scutil --get ComputerName 2>/dev/null || hostname
```

| Machine | Detection | Snapshot destination | Notes |
|---|---|---|---|
| N/A | N/A | N/A | Snapshots are not machine-path-dependent — the Git remote (`origin` on GitHub) is the destination, not an external drive. Installed on `Ant’s Mac Mini (4)`. |

If the current machine does not match any row above, or more than one row could plausibly match,
stop and ask before picking a destination — do not guess or infer a path pattern.

## Deployment Contract

Applies only to the "Git-backed with deployment" classification. Write `N/A — no deployment
target` otherwise.

- Deployment in scope: yes — a live deployment exists.
- VPS/server alias: TBD — an IONOS VPS is documented in `CLAUDE.md`, but no SSH alias/host is recorded in-repo. Confirm with the owner before connecting; do not assume an alias.
- Deployment root: TBD — not recorded in-repo.
- Deployment branch or artifact: built from `main` via `npm run build` (`.next/` output), served with `npm run start`. Deploy is manual (per `CLAUDE.md`).
- Service/container names: TBD — process manager/service name on the VPS not recorded in-repo.
- Read-only health checks: `curl -I http://titanium-barrier-pest-control.craftandconscious.com/` (live URL from `CLAUDE.md`). SSL over HTTPS is unconfirmed — see `CLAUDE.md` pending task #1.
- Log locations: TBD — not recorded in-repo.
- Rollback target: previous known-good `main` commit, rebuilt and redeployed manually.
- Actions requiring approval: any SSH to the VPS, running Certbot/SSL changes, and any rebuild/redeploy require explicit owner approval before execution. Two owner-tracked pending tasks live in `CLAUDE.md` (confirm SSL; update `example.com` → live domain in `src/lib/site.ts` and `public/sitemap.xml`, then rebuild/redeploy).

## Safety Boundaries

- Protected paths: `src/lib/services.ts` (slugs are live dynamic routes — renaming one breaks internal links), `src/lib/site.ts` (single source of business config), `public/sitemap.xml`.
- Secret-bearing files: none committed — no auth, DB, or external API keys (per `CLAUDE.md`). `.env*` files are git-ignored; keep any real secrets out of the repo.
- Prohibited actions: force-push (`CLAUDE.md` rule); renaming a `services.ts` slug without updating all internal links.
- Commit/push authorization rule: commit/push only when the owner asks; never force-push.
- Tag/release authorization rule: no release/tag process is defined — require explicit owner approval before tagging or releasing.
- Deploy/merge authorization rule: deployment to the VPS is manual and requires explicit owner approval (see Deployment Contract).
