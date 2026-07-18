# Phase Gates

Use phase gates to prevent uncontrolled project drift.

## Gate 0 — Intake

Required before work starts:

- Objective identified
- Task type identified
- Relevant files located
- Risks and assumptions listed
- Stop conditions known

## Gate 1 — Plan

Required before edits:

- Minimal implementation path selected
- Files likely to change listed
- Validation method selected
- Rollback path identified

## Gate 2 — Implementation

Required before claiming completion:

- Changes are scoped
- No unrelated rewrites
- No unauthorized deletions
- Conflicts quarantined

## Gate 3 — Verification

Required before PASS:

- Tests/build/lint/typecheck/manual validation run as applicable
- Failures fixed or documented
- Unverified areas listed

## Gate 4 — Documentation

Required before handoff:

- Status updated
- Decisions logged
- Risks updated
- Run log updated
- Commit message suggested if appropriate

## Gate 5 — Release / Production Readiness

Required before production:

- Security baseline reviewed
- Compatibility matrix reviewed
- Rollback plan reviewed
- Release gate reviewed
- User-facing impact understood

## Gate Results Log

### 2026-07-17 — V3.4 install + handoff push (local)

- Gate 0 Intake: PASS — objective (adopt V3.4, then commit/tag/snapshot) and task type clear.
- Gate 1 Plan: PASS — non-destructive install; handoff docs mapped to real repo layout.
- Gate 2 Implementation: PASS — scoped to docs/scaffolding; no app source changed; one conflict quarantined.
- Gate 3 Verification: PASS with note — `v34_validate.py` PASS; Next.js build/lint **skipped** (no app code changed, `node_modules` absent) and documented.
- Gate 4 Documentation: PASS — status, decisions, risks, run log, commit notes updated.
- Gate 5 Release/Production: N/A — not a production release; VPS deploy not in scope this session.

