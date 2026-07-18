# Migration Kickoff

## First Agent Command

```text
Use the v34-migration-loop skill to migrate this existing project into V3.4. Preserve all current files, place conflicts in .v34_migration_review/, and produce a migration report. Confirm docs/governance/PROJECT_CLASSIFICATION.md from real evidence (git remote -v, deployment config presence) — do not assume it matches a similar past project. Fill docs/governance/REPOSITORY_HANDOFF_CONFIG.md's Validation Contract with verification commands actually discovered from the real toolchain, and its other applicable sections (per the classification) only from confirmed values, marking inapplicable sections N/A. Populate docs/governance/AGENT_RUN_CONTRACT.md's Registered Run Types table only with run types that already really exist for this repository, if any.
```

## Migration Priorities

1. Preserve existing work.
2. Install missing V3.4 structure.
3. Detect existing instructions and docs.
4. Avoid duplicate/conflicting root instructions.
5. Produce a merge recommendation.
