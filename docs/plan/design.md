# Design

This file is the single source of truth for implementation design.

## Repository Operating Model

The repository uses a root agent contract, child instruction files for scoped rules, centralized planning files, and a latest-first task log.

## Documentation Structure

- `docs/getting-started/`: setup and configuration.
- `docs/user-guides/`: user-facing behavior.
- `docs/developers/`: internal workflow, verification, task logs, and implementation notes.
- `docs/plan/`: specifications, design, and task checklist.
- `docs/architecture/`: durable system boundaries.
- `docs/operations/`: release, deployment, and maintenance notes.
- `docs/troubleshooting/`: recovery steps and known issues.

## Verification Design

The local policy script validates:

- Required root files exist.
- Root Markdown stays within the allowlist.
- Forbidden root summary/guide/fix/note/roadmap/changelog files are not created.
- `docs/plan/tasks.md` contains only flat checkbox lines.
- AI/co-author metadata markers are not present.

The GitHub workflow runs the same script on push and pull request.

## Commit Design

Commits are concise, imperative, and free of co-author or AI metadata. GPG signing is not required.
