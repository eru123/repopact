# Planning Instructions

This file applies to `docs/plan/`.

The planning system uses exactly three durable files:

- `specs.md`: requirements, constraints, assumptions, and acceptance criteria.
- `design.md`: implementation approach, architecture choices, and affected areas.
- `tasks.md`: flat checklist only.

Rules:

- Do not create numbered spec files.
- Do not create separate design alternatives unless they are sections inside `design.md`.
- Do not create phased task files.
- `tasks.md` must contain only lines matching `- [ ] Task` or `- [x] Task`.
- Every implementation task should have a corresponding verification task.
