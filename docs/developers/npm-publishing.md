# Publish to npm

This page describes how to publish the `repopact` package to the npm registry.

## Prerequisites

- An npm account with publish permissions for the `repopact` package.
- Node.js 18 or later installed locally.

## Before Publishing

1. Review the changes since the last release.
2. Update the `version` field in `package.json` using semantic versioning.
3. Run any checks listed in the task log for the release.
4. Verify the CLI manually:

   ```bash
   ./bin/repopact.js init
   ```

   Run this in a temporary directory to confirm `AGENTS.md` and the `docs/` planning files are created.

## Publish Locally

1. Authenticate with npm if you are not already logged in:

   ```bash
   npm login
   ```

2. Publish the package:

   ```bash
   npm publish
   ```

## About the Package Name

The package is published as `repopact`. If that name is already taken on the public registry, update the `name` field in `package.json` to a scoped name (for example, `@your-org/repopact`) and run:

```bash
npm publish --access public
```

## Automated Publishing

You can publish from a GitHub Actions workflow on tagged releases. Store the npm access token as `NPM_TOKEN` in the repository secrets. Never commit tokens, `.npmrc` credentials, or other secrets to the repository.
