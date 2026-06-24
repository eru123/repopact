# Design

This file is the single source of truth for implementation design.

## Repository Operating Model

The repository uses a root agent contract, child instruction files for scoped rules, centralized planning files, and a latest-first task log.
When clarification is needed, the agent asks one follow-up question at a time.

## Documentation Structure

- `docs/getting-started/`: setup and configuration.
- `docs/user-guides/`: user-facing behavior.
- `docs/developers/`: internal workflow, verification, task logs, and implementation notes.
- `docs/plan/`: specifications, design, and task checklist.
- `docs/architecture/`: durable system boundaries.
- `docs/operations/`: release, deployment, and maintenance notes.
- `docs/troubleshooting/`: recovery steps and known issues.

## Verification Design

Verification stays project-specific. This template does not prescribe repo-wide policy automation.
When checks are needed, run the smallest relevant one for the touched scope and document it in the task log when helpful.

## Commit Design

Commits are concise, imperative, and free of co-author or AI metadata. GPG signing is not required.

## CLI Package Design

- Package metadata lives in `package.json` with a single binary entry at `bin/repopact.js`.
- `bin/repopact.js` validates the subcommand and dispatches to the implementation.
- The init command resolves files relative to `process.cwd()` in the user's project.
- The contract file `AGENTS.md` is copied from the installed package root using `__dirname`-relative paths.
- Blank planning and task-log templates are written from inline strings, avoiding extra template-file dependencies.
- Existing files are skipped with a notice, preventing accidental data loss.
- No external dependencies are required.
