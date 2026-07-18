# Project Risk Register

| ID | Risk | Impact | Likelihood | Mitigation | Owner | Status |
|---|---|---:|---:|---|---|---|
| R-001 | Live site SSL/HTTPS unconfirmed | Medium | Medium | Verify HTTPS; run Certbot on the IONOS VPS if needed (`CLAUDE.md` task #1) | Project owner | Open |
| R-002 | `example.com` still referenced in `src/lib/site.ts` and `public/sitemap.xml` | Medium | High | Swap to live domain, rebuild, redeploy (`CLAUDE.md` task #2) | Project owner | Open |
| R-003 | No automated test suite | Medium | Medium | Add build/lint/type-check to a validation gate before releases | Project owner | Open |
| R-004 | Deployment specifics (VPS alias, deploy root, service/log locations) undocumented | Medium | Medium | Record confirmed values in `REPOSITORY_HANDOFF_CONFIG.md` before any VPS action | Project owner | Open |
| R-005 | Renaming a `services.ts` slug breaks internal routes/links | High | Low | Treat `services.ts` slugs as protected; update all links on any rename | Any agent | Open |

## Risk Categories

- Security
- Data loss
- Build failure
- Deployment failure
- Compatibility
- Performance
- Accessibility
- Maintainability
- Agent misuse
- Documentation drift
