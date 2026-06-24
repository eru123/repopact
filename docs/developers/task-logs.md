# Task Logs

Latest entries first. Keep entries short and factual.

## 2026-06-24

- Added an npm package with a `repopact` CLI command.
- `repopact init` copies the packaged `AGENTS.md` into the user's project root and creates blank planning files under `docs/plan/` and `docs/developers/task-logs.md`.
- Added `docs/developers/npm-publishing.md` with the npm publish workflow.
- Updated `README.md`, `docs/README.md`, and `docs/user-guides/usage-overview.md` for the new CLI.
- Verification: `npm pack --dry-run` shows the expected files; running `./bin/repopact.js init` in a temporary directory creates the expected files; a second run skips existing files.


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
