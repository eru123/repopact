# Usage Overview

You can install RepoPact into a project using the CLI provided by the `repopact` npm package.

## Initialize a Project

Run the following command in the root of the project you want to initialize:

```bash
npx repopact init
```

This command:

- Copies `AGENTS.md` into the project root.
- Creates `docs/plan/specs.md`.
- Creates `docs/plan/design.md`.
- Creates `docs/plan/tasks.md`.
- Creates `docs/developers/task-logs.md`.

Existing files are skipped, so running the command more than once is safe.

## Manual Alternative

If you prefer not to use npm, copy the files listed in the root `README.md` into your project and edit the placeholders described there.
