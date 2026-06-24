# RepoPact

RepoPact is a copy-paste project operating contract for AI coding agents and human contributors.
It gives any repository a clear structure for planning, documentation, verification, task logs, and closeout discipline without forcing a specific tech stack.

Use it for web apps, APIs, CLIs, libraries, mobile apps, infrastructure repositories, automation projects, internal tools, and client projects.

## What This Provides

- Root `AGENTS.md` contract for AI coding agents.
- `CLAUDE.md` that strictly redirects Claude to read `AGENTS.md`.
- MIT license for reuse in personal, open-source, and commercial projects.
- Documentation structure under `docs/`.
- Centralized planning files:
  - `docs/plan/specs.md`
  - `docs/plan/design.md`
  - `docs/plan/tasks.md`
- Latest-first implementation journal:
  - `docs/developers/task-logs.md`
- Root Markdown guardrails that prevent random summary, guide, fix, note, roadmap, changelog, and scratch files from accumulating.

## How To Use

Copy these files into the root of your own project:

```text
docs/
.gitattributes
.gitignore
AGENTS.md
CLAUDE.md
CONTRIBUTING.md
LICENSE
README.md
```

Then edit these placeholders:

1. Replace `RepoPact` references in `README.md` if this is your actual product repository.
2. Update the `Project Map` section in `AGENTS.md` once your real project structure is known.
3. Replace the starter content in `docs/plan/specs.md` and `docs/plan/design.md` with your project-specific requirements and design.
4. Keep `docs/plan/tasks.md` as a flat checkbox list only.
5. Keep implementation decisions in `docs/developers/task-logs.md`.

## Repository Rules

Root-level Markdown is intentionally restricted to:

- `README.md`
- `CONTRIBUTING.md`
- `CLAUDE.md`
- `AGENTS.md`

Do not create root-level `CHANGELOG.md`, `ROADMAP.md`, `PLAN.md`, `TODO.md`, `*_SUMMARY.md`, `*_GUIDE.md`, `*_FIXES.md`, `*_NOTES.md`, or similar task debris.

Before the project becomes an operating/released product, use `docs/developers/task-logs.md` for implementation history. Create customer-facing changelogs only when the owner explicitly wants release notes.

## Planning Flow

For non-trivial changes:

1. Update `docs/plan/specs.md`.
2. Update `docs/plan/design.md`.
3. Update `docs/plan/tasks.md` as flat checkboxes.
4. Implement the smallest safe change.
5. Run relevant checks.
6. Update `docs/developers/task-logs.md`.
7. Commit when the task is complete, unless told not to.

## Verification

Run the checks that make sense for your project and keep them documented in `docs/developers/task-logs.md`.

## License

RepoPact is released under the MIT License. You may copy, modify, and use it in commercial or private projects.

See `LICENSE` for the full license text.
