# Decision Log

| Date | Decision | Reason | Alternatives Considered | Status |
|---|---|---|---|---|
| 2026-07-15 | Adopt Project Starter Kit V3.4 (migrate mode) | Governed, repeatable dual-agent workflow | Stay ad-hoc; new-project mode | Accepted |
| 2026-07-15 | Preserve existing `CLAUDE.md`; merge V3.4 framework into it | Keep project-specific rules/pending tasks; satisfy validator | Overwrite with kit template | Accepted |
| 2026-07-17 | Classify repo as "Git-backed with deployment" | Real live VPS target exists though deploy is manual/external | "Git-backed with remote" | Accepted |
| 2026-07-17 | No LLM/tool attribution in commit messages; amend the one unpushed commit to match | Owner's explicit repo-history policy (per handoff prompt) | Leave earlier attribution line in place | Accepted |
| 2026-07-17 | Commit + tag `v1.1.0` locally; do not push | Owner chose local-only (public repo would expose local path/machine name) | Push branch + tag to `origin` | Accepted |
| 2026-07-17 | Exclude `.v34_migration_review/` and `V34_INSTALL_REPORT.json` via `.git/info/exclude` | One-off install artifacts; keep repo/history and public remote clean | Commit them; delete them | Accepted |
