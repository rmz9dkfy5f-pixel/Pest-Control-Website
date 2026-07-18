# Changelog

## v1.1.0 — 2026-07-17

### Added

- Project Starter Kit V3.4 agent-OS scaffolding: `AGENTS.md`, model-selection gates, `docs/governance/`
  (quality gates, done criteria, risk register, rollback, test/security baselines, run contract,
  handoff config), `docs/project/` (brief, architecture, status, roadmap, decision log, changelog,
  context), and `ai/` (agent roles, review gates, prompts).
- Claude Code skills (`.claude/skills/`) and Codex skills (`.agents/skills/`): `v34-execution-loop`,
  `v34-migration-loop`, `v34-production-readiness`, `v34-context-eval-loop`.
- `PROJECT_CLASSIFICATION.md` (Git-backed with deployment) and `REPOSITORY_HANDOFF_CONFIG.md` filled
  from confirmed values.

### Changed

- `CLAUDE.md` — prepended the V3.4 operating framework (`@AGENTS.md` import, model-gate /
  classification / run-contract references, skills index); all existing project content preserved.

### Notes

- No application source changed. Committed and tagged locally; not pushed to `origin` (owner choice).
- One-off install artifacts (`.v34_migration_review/`, `V34_INSTALL_REPORT.json`) kept local via
  `.git/info/exclude`.
