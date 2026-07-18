# V3.4 Migration Report

Run `scripts/v34_adoption_audit.py --target <this repo>` before filling this in — it produces the
Git State, Role Mapping, and Agent-Neutral Handoff Gap sections below automatically. See
`ADOPTION_POLICY.md` for the rules governing this migration.

## Status

Complete — installed and validated (PASS) on 2026-07-15.

## Git State

- Branch: `main`
- Matches expected default branch: yes
- Working tree clean: yes at audit time (after committing the pre-existing untracked `CLAUDE.md`); the install output is now uncommitted and pending owner review.

## Existing Instructions Found

- `CLAUDE.md` (Titanium Barrier project memory: pending SSL/domain tasks, key files, rules). Preserved and extended with the V3.4 operating framework.
- No `AGENTS.md` previously — installed fresh.
- No legacy continuity files (`STATUS.md`, `CONTEXT.md`, `DECISION_LOG.md`, `SESSION_LOG.md`, `HANDOFF_TO_CLAUDE.md`, `AGENT_HANDOFF.md`) at repo root.

## Legacy Continuity File Role Mapping

| Legacy file found | Nearest V3.4 equivalent | Decision |
|---|---|---|
| None | — | No legacy continuity filenames found at repo root; nothing to map. |

## Agent-Neutral Handoff Gap

- No gap — no `HANDOFF_TO_CLAUDE.md` existed. `AGENTS.md` (agent-neutral) was installed alongside `CLAUDE.md`.

## Compatibility Aliases To Preserve

- None — no legacy filenames that outside automation might depend on were found.

## Files Installed

- 46 files: 43 from `templates/base` + 3 from `templates/migration`.
- Root: `AGENTS.md`, `MODEL_SELECTION_GATE.md`, `PROMPT_MODEL_SELECTION_GATE.md`, `00_MIGRATION_KICKOFF.md`, `ADOPTION_POLICY.md`, `MIGRATION_REPORT.md`, `V34_INSTALL_REPORT.json`.
- `docs/governance/` (18 files), `docs/project/` (9 files), `ai/` (agents, prompts, reports), `.claude/skills/` (4 skills), `.agents/skills/` (4 skills).

## Conflicts Sent To Review

- `CLAUDE.md` → `.v34_migration_review/CLAUDE.md.v34-candidate` (existing file preserved; kit template quarantined for comparison).

## Suggested Merges

- Already merged: the V3.4 operating framework (classification/model-gate/run-contract references + skills index) was folded into the top of the existing `CLAUDE.md`, preserving all project-specific content. The quarantined candidate can be deleted once the owner confirms nothing further is needed from it.

## Risks

- Deployment specifics for the IONOS VPS are TBD in `docs/governance/REPOSITORY_HANDOFF_CONFIG.md` (not recorded in-repo, not invented).
- Two owner-tracked pending tasks remain in `CLAUDE.md` (confirm SSL; swap `example.com` → live domain, then rebuild/redeploy).
- No automated test suite exists to validate future app changes.

## Next Action

- Owner reviews `.v34_migration_review/CLAUDE.md.v34-candidate`, then commits the V3.4 scaffolding when satisfied.
