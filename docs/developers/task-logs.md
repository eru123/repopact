# Task Logs

Latest entries first. Keep entries short and factual.

## 2026-06-24

- Removed the repo policy GitHub workflow and local policy script, then cleaned related references from docs and instructions.
- Updated `AGENTS.md` to ask follow-up questions one at a time when clarification is needed.
- Verification: repository instruction docs no longer reference the GitHub workflow or `scripts/verify-policy.sh`; the deleted policy script was not run because it no longer exists.

## 2026-06-22

- Created RepoPact universal project contract template.
- Added MIT license for reuse in commercial, private, and open-source projects.
- Removed GPG signing requirement while preserving concise commit rules.
- Added root Markdown restrictions and docs-only task logging policy.
- Added centralized planning files under `docs/plan/`.
- Added repository policy check script and GitHub workflow.
- Verification: `bash scripts/verify-policy.sh` passed.
