# Project Classification

Determine this before any other kickoff decision. It governs which sections of
`REPOSITORY_HANDOFF_CONFIG.md` apply and how the Model Selection Gate and Agent Run Contract get
used for this project.

## Categories

- **Vault-only** — lives inside a knowledge base or note vault with no Git history of its own
  (snapshot/sync governed instead of commit governed).
- **Local non-Git** — a local folder or working copy with no version control at all.
- **Git-backed** — has Git history, no configured remote.
- **Git-backed with remote** — has Git history and pushes to a remote (GitHub, GitLab, etc.), but
  nothing is deployed from it.
- **Git-backed with deployment** — has Git history, a remote, and a real deployment target (VPS,
  hosting platform, app store, package registry, etc.).

## This Project

- **Classification:** Git-backed with deployment
- **Confirmed by:** Claude Code (V3.4 install, Step 1 inspection)
- **Confirmed on:** 2026-07-15
- **Evidence:**
  - Git history present; `git rev-parse --abbrev-ref HEAD` → `main`.
  - `git remote -v` → `origin  https://github.com/rmz9dkfy5f-pixel/Pest-Control-Website.git`.
  - Real deployment target: live site documented in committed `CLAUDE.md` — IONOS VPS at
    `http://titanium-barrier-pest-control.craftandconscious.com/`.
  - No in-repo deploy/CI automation found (no `.github/workflows/`, `Dockerfile`, `vercel.json`,
    `netlify.toml`, or deploy script) — the deployment exists but its process is manual/external,
    so its operational specifics are captured (and partly still TBD) in the Deployment Contract.

Never infer a classification from assumption or convenience. If unconfirmed, leave every field
above as `TBD` rather than guessing.

## What Each Classification Implies

| Classification | `REPOSITORY_HANDOFF_CONFIG.md` sections that apply |
|---|---|
| Vault-only | None — use the vault's own snapshot/session-lifecycle SOPs instead, if any exist. |
| Local non-Git | Repository Identity (partial), Validation Contract only. |
| Git-backed | Repository Identity, Validation Contract, Snapshot Contract. |
| Git-backed with remote | Adds Safety Boundaries (push/tag authorization rules). |
| Git-backed with deployment | Adds the full Deployment Contract. |

Re-check this classification if the project's Git/remote/deployment status changes materially
(e.g. a local prototype gets its first remote, or a repo gets its first real deployment target) —
do not leave a stale classification in place.
