# Verification

Run the smallest relevant checks for the touched scope.

Examples:

- Syntax check for scripts.
- Unit or integration test for changed logic.
- Manual UI route check for interface changes.
- API request/response check for endpoint changes.
- Migration repeatability check for database changes.
- `bash scripts/verify-policy.sh` for repository policy.

If a check cannot run, record why in `docs/developers/task-logs.md` and in the closeout response.
