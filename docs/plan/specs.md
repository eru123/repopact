# Specifications

This file is the single source of truth for project requirements.

## Project Identity

- Project name: Replace with the actual project name.
- Project type: Replace with web app, API, CLI, library, mobile app, infrastructure project, or other type.
- Primary users: Replace with intended users.
- Primary goal: Replace with the main product or repository goal.

## Core Requirements

- Keep implementation work small, documented, and verifiable.
- Keep all durable docs under `docs/` except allowed root files.
- Keep task and decision history in `docs/developers/task-logs.md` until customer-facing changelogs are explicitly required.
- Use MIT License unless the project owner changes it.

## Constraints

- Do not commit secrets or real user/customer data.
- Do not add new dependencies without a documented reason.
- Do not create root-level Markdown files outside the allowlist.
- Do not add AI signatures, co-author trailers, or generated-by notices.
- GPG signing is not required.

## Acceptance Criteria

- The repository has `AGENTS.md`, `CLAUDE.md`, `README.md`, `CONTRIBUTING.md`, and `LICENSE` at root.
- All other durable docs live under `docs/`.
- `docs/README.md` links the documentation structure.
- `docs/plan/tasks.md` remains a flat checkbox list.
- `bash scripts/verify-policy.sh` passes.
