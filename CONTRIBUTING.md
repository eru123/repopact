# Contributing

Thank you for contributing. Keep the repository boring, documented, and verifiable. The world has enough clever code hiding avoidable maintenance debt in a trench coat.

## Required Reading

Before making changes, read:

1. `AGENTS.md`
2. Any child `AGENTS.md` in the area you are editing
3. `docs/README.md`
4. The relevant docs page for the feature or subsystem

## Workflow

1. Keep changes small and focused.
2. Use existing project patterns before adding new ones.
3. Avoid new dependencies unless there is a clear need.
4. Update relevant docs under `docs/`.
5. Update `docs/developers/task-logs.md` with a latest-first entry.
6. Run relevant checks.
7. Run the relevant checks before committing.

## Planning

For meaningful feature, fix, or structural work, maintain:

- `docs/plan/specs.md`
- `docs/plan/design.md`
- `docs/plan/tasks.md`

`docs/plan/tasks.md` must be a flat list of Markdown checkboxes only. No headings, phases, nested lists, or prose.

## Commit Messages

Commit messages must be:

- Imperative.
- No more than 150 characters in the subject.
- Free of co-author trailers.
- Free of AI signatures, generated-by notices, or tool metadata.

GPG signing is not required.

Preferred format:

```text
Summarize changes in 50 chars or less

Explain why the change exists and any non-obvious side effects.

Resolves: #123
```

The body is optional.

## Pull Requests

A good pull request includes:

- Summary of changed behavior.
- Documentation updated.
- Checks run.
- Known risks or checks that could not be run.

Do not add root-level summary files. Put durable notes under `docs/`.

## License

By contributing, you agree that your contributions are licensed under the MIT License.
