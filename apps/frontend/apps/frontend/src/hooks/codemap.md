`md
# apps/frontend/src/hooks/

## Responsibility
Client-side behavioral hooks used by the workspace shell and feature screens.

## Design Patterns
- Thin custom hooks that wrap backend sync plus browser fallback logic
- Side-effect hooks initialize from API/storage on mount and expose imperative update/reset methods

## Data & Control Flow
- `useTimezone()` loads the saved timezone from the API, falls back to browser detection, and updates shared formatter state via `setUserTimezone`
- Manual updates and reset actions round-trip to the backend and then update local hook state

## Integration Points
- Consumed by `src/routes/_app.tsx` during workspace bootstrap
- Relies on `src/lib/api.ts` timezone client and `src/lib/timezone.ts` formatting helpers

