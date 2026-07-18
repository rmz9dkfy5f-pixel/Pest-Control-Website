# Release Notes

## v1.1.0 — 2026-07-17

### Added

- Project Starter Kit V3.4 agent operating system: governance docs, project docs, AI operating
  files, and dual-agent skills (Claude Code + Codex).
- Repository classification and handoff configuration filled from confirmed values.

### Changed

- `CLAUDE.md` extended with the V3.4 operating framework (existing project content preserved).

### Fixed

- N/A.

### Known Issues

- Live-site SSL unconfirmed; `example.com` still referenced in `src/lib/site.ts` and
  `public/sitemap.xml` (owner-tracked in `CLAUDE.md`).
- No automated test suite.

### Validation

- `v34_validate.py` → PASS. Next.js build/lint not run (no app source changed, `node_modules` absent).

### Distribution

- Tag `v1.1.0` created locally. The full descriptive tag (version + `v34-agent-os-install` +
  commit short-hash) is recorded in git and used as the snapshot folder name — see
  `git tag --points-at HEAD`. **Not pushed** to `origin` (owner choice); `main` is intentionally
  ahead of the remote.
