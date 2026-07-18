# Commit Notes

## Suggested Commit Template

```text
<type>: <short summary>

- What changed:
- Why:
- Validation:
- Risks:
```

## Commit Types

- feat
- fix
- docs
- refactor
- test
- chore
- security
- perf

---

## Latest Commit — 2026-07-17

## Summary

chore: install Project Starter Kit V3.4 agent-OS scaffolding

## Description

- What changed: Added the V3.4 governance, project-doc, AI-operating, and skill files (Claude Code +
  Codex), and merged the V3.4 operating framework into `CLAUDE.md` while preserving all existing
  project-specific content. Filled `PROJECT_CLASSIFICATION.md` and `REPOSITORY_HANDOFF_CONFIG.md`
  from confirmed values. No application source (`src/`, `public/`) touched.
- Why: Adopt the dual-agent V3.4 operating system for repeatable, governed project work.
- Verified: `v34_validate.py` → PASS (0 missing, 0 skill errors); `git diff --stat` reviewed; handoff
  docs cross-checked against real repo state. Next.js build/lint not run — no app code changed and
  `node_modules` is absent.
- Remaining risk / follow-up: Push deferred (local-only by owner choice); two pending `CLAUDE.md`
  tasks (SSL confirmation, `example.com` → live domain); no automated test suite.
