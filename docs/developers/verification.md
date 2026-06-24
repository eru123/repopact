# Verification

Run the smallest relevant checks for the touched scope.

Examples:

- Syntax check for executable files.
- Unit or integration test for changed logic.
- Manual UI route check for interface changes.
- API request/response check for endpoint changes.
- Migration repeatability check for database changes.
- Project-specific policy check, if one exists.

If a check cannot run, record why in `docs/developers/task-logs.md` and in the closeout response.
