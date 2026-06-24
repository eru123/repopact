# RepoPact Universal Agent Contract

## Purpose

RepoPact is a copy-paste project operating contract for AI coding agents and human contributors.
It keeps implementation work small, documented, verifiable, and easy to audit across any type of software project.

This repository may be a web app, API, package, CLI, mobile app, automation tool, infrastructure project, or mixed codebase. When project-specific rules are missing, follow this file first and make the smallest safe change that satisfies the task.

## Core Contract

- This `AGENTS.md` is the root work contract for the whole repository until a child `AGENTS.md` adds narrower local rules.
- Re-read this file before editing. Do not rely on memory or prior sessions.
- Keep changes aligned with `README.md`, `CLAUDE.md`, `docs/README.md`, and the relevant domain docs under `docs/`.
- Prefer small, working, documented changes over broad rewrites.
- Preserve existing user data, configuration, migrations, deployment assumptions, and public behavior unless the task explicitly requires changing them.
- Do not expose, print, commit, or log secrets from `.env`, credentials, tokens, API keys, cookies, private keys, OAuth material, database dumps, backups, or production configs.
- Respect the existing dirty worktree. Do not revert, format, rename, or normalize unrelated files.
- If the user says not to commit, do not commit. Otherwise follow the commit and closeout contract below after completed implementation work.

## Project Map

Update this section when the project structure becomes known.

- `src/`, `app/`, `lib/`, or equivalent: primary application code.
- `tests/`, `test/`, `spec/`, or equivalent: automated checks when the project has them.
- `docs/`: canonical documentation home. Do not scatter task notes around the repository.
- `docs/README.md`: documentation table of contents.
- `docs/plan/specs.md`: centralized specification source of truth.
- `docs/plan/design.md`: centralized implementation design source of truth.
- `docs/plan/tasks.md`: flat task checklist for planned work.
- `docs/developers/task-logs.md`: latest-first journal for implementation decisions, changed structure, verification notes, and completed task summaries.

## Minimal Build Discipline

Before writing code, stop at the first rung that holds:

1. Does this need to exist at all? Speculative need is skipped.
2. Does the standard library already do it? Use it.
3. Does the native platform already cover it? Prefer native behavior over a dependency.
4. Does an already-installed dependency solve it? Use it before adding another dependency.
5. Can it be one line or one small local change? Do that.
6. Only then write the minimum code that works.

Rules:

- No unrequested abstractions.
- No interface with one implementation unless required by the platform.
- No factory for one product.
- No config for values that never change.
- No boilerplate or scaffolding for imaginary future work.
- Delete stale code instead of wrapping it.
- Keep the fewest files possible.
- Shortest safe diff wins.
- Complex request: implement the smallest useful version, document the boundary, and ask only when blocked by a real ambiguity.
- Mark intentional simplifications in code with `minimal:` and include the ceiling plus upgrade trigger.

Example:

```js
// minimal: in-memory throttle resets on restart — replace with Redis when multi-instance deployment is required
```

Never simplify away:

- Input validation at trust boundaries.
- Error handling that prevents data loss.
- Security controls.
- Accessibility basics.
- Privacy and data-retention responsibilities.
- Tests or checks for non-trivial logic.
- Anything explicitly requested by the user.

## Planning Contract

For feature work, bug fixes, structural changes, or behavior changes, use the centralized plan files.

Required planning files:

1. `docs/plan/specs.md` - single source of truth for requirements and constraints.
2. `docs/plan/design.md` - single source of truth for implementation design.
3. `docs/plan/tasks.md` - flat task checklist only.

Process:

1. Clarify missing requirements only when the task cannot be safely completed without them. If multiple follow-up questions are needed, ask one at a time instead of batching them.
2. Read or create `docs/plan/specs.md`, then update it with the relevant request details.
3. Read or create `docs/plan/design.md`, then update it with the intended implementation approach.
4. Create or update `docs/plan/tasks.md` as a flat checkbox list.
5. Include verification tasks in `docs/plan/tasks.md` for each meaningful implementation task.
6. During execution, check off completed tasks immediately.
7. Record decisions and completed work in `docs/developers/task-logs.md`, latest entry first.

`docs/plan/tasks.md` must contain only Markdown checkbox lines:

```md
- [ ] Add input validation for uploaded files
- [ ] Add a focused validation check for uploaded file rejection
- [ ] Update the user guide for upload limits
```

Do not add headers, phases, grouped sections, prose, or nested lists to `docs/plan/tasks.md`.

## Documentation Contract

Root-level Markdown is restricted. Only these Markdown files may live in the project root:

- `README.md`: public project entrypoint.
- `CONTRIBUTING.md`: contributor workflow.
- `CLAUDE.md`: local Claude/project instructions.
- `AGENTS.md`: binding agent work contract.

Do not create any other root-level Markdown file unless the user explicitly requests it and this contract is updated in the same change.

Forbidden root filename patterns include:

- `*_SUMMARY.md`
- `*_GUIDE.md`
- `*_FIXES.md`
- `*_NOTES.md`
- `*_ROADMAP.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `PLAN.md`
- `TODO.md`

All durable docs must live under `docs/` in the correct section.

Use these default documentation areas:

- `docs/getting-started/`: setup, installation, configuration, local development.
- `docs/user-guides/`: user-facing workflows and usage examples.
- `docs/developers/`: architecture, contribution workflow, APIs, implementation notes, internal systems, and task logs.
- `docs/plan/`: centralized specifications, design, and task checklist.
- `docs/architecture/`: durable system structure and boundaries.
- `docs/operations/`: deployment, release readiness, monitoring, incidents, and maintenance.
- `docs/troubleshooting/`: errors, recovery steps, and FAQ material.

Update `docs/README.md` when adding, removing, moving, or renaming documentation.

Update `README.md` when the project promise, setup path, commands, requirements, license, or architecture summary changes.

Update the nearest owning docs page when behavior, structure, workflow, input/output format, constraints, or durable preferences change.

Do not create `CHANGELOG.md` until the project owner explicitly marks the product as operating/released and wants customer-facing changelogs. Before then, code changes and decisions belong in `docs/developers/task-logs.md`.

## Testing And Verification

- Run the smallest relevant check before committing.
- Prefer existing project checks over inventing new test infrastructure.
- Non-trivial logic needs one runnable check that fails if the logic breaks.
- For scripts, run syntax checks where practical.
- For UI changes, verify the affected page, route, or component manually when automated coverage is missing.
- For API changes, verify request/response shape, error behavior, and at least one failure path.
- For database or migration work, verify forward migration and safe repeat behavior where practical.
- If a check cannot be run because credentials, services, fixtures, or runtime dependencies are missing, state that clearly in `docs/developers/task-logs.md` and in the closeout response.

## Security And Privacy

- Never commit secrets or real customer/user data.
- Do not weaken authentication, authorization, validation, encryption, audit logging, rate limits, or retention behavior unless explicitly required and documented.
- Prefer secure defaults.
- Redact sensitive values in docs, logs, examples, screenshots, and issues.
- Treat production data as user-owned state. Do not delete, rewrite, export, or sample it unless the user explicitly instructs it.
- Avoid adding telemetry or external network calls without documentation and consent.

## Dependency Policy

- Do not add a dependency when the standard library, platform, or existing dependency is enough.
- If adding a dependency, document why in `docs/developers/task-logs.md`.
- Prefer maintained, widely used, license-compatible dependencies.
- Remove unused dependencies when found during the touched scope.

## Git And Commit Contract

When the user asks for completed implementation work, commit finished changes unless they explicitly say not to.

Before every commit:

1. Re-read this file and any relevant child `AGENTS.md`.
2. Update docs for behavior, structure, workflow, or constraints that changed.
3. Update `docs/developers/task-logs.md` with a latest-first entry.
4. Update `docs/README.md` when documentation structure changes.
5. Run the relevant check, or document why it could not be run.
6. Confirm root Markdown stays within the allowlist.

Commit rules:

- Commit messages must be imperative and no more than 150 characters.
- No co-author trailers.
- No AI signatures, generated-by notices, bot attribution, or tool metadata.
- GPG signing is not required by this contract.
- Use the current branch by default. Do not create a feature branch unless the user asks.
- After the session is complete, push commits created during the session unless the user explicitly says not to push.

Preferred commit message format:

```text
Summarize changes in 50 chars or less

Explain the problem this commit solves. Focus on why the change exists.
Mention side effects or non-obvious consequences when relevant.

Resolves: #123
See also: #456, #789
```

The body is optional. The subject must remain under 150 characters.

## Closeout Contract

Every completed task response must include:

- What changed.
- What docs changed.
- What checks ran.
- What was not run and why, if anything.
- Commit and push status when operating in a real Git repository.

Keep the closeout concise. Do not create separate summary files.

## Child Instruction Index

- No child `AGENTS.md` files are required by default.
- Add a child `AGENTS.md` only when a subtree has stable local rules that differ from this root contract.
- When adding a child instruction file, update this index with the path, scope, and what remains owned by the parent.

Current child instructions:

- `docs/AGENTS.md`: documentation-only rules.
- `docs/plan/AGENTS.md`: strict centralized planning rules.
- `docs/developers/AGENTS.md`: developer documentation and task-log rules.
