# Backend Source Reference - src/modules/auth/codemap.md

Original source path: `apps/backend/src/modules/auth/codemap.md`
Line count: 14
SHA-256: `f376f2b70e43878ff114259b00faf2531db29007f1628dda15c83ee0eff47a75`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````md
# apps/backend/src/modules/auth/

## Responsibility
Authentication, login compatibility, onboarding, and workspace/organization resolution for the backend.

## Design
Elysia router backed by Better Auth plus legacy bcrypt fallback. Uses helper functions to normalize company names/slugs, create default teams/divisions, and sync credential accounts.

## Flow
Login checks the local user record, attempts Better Auth sign-in, falls back to bcrypt sync for legacy users, and returns a compatibility payload. Onboarding resolves/creates organization and app links, seeds defaults, then updates the user/session context.

## Integration
Talks to Better Auth, Prisma models for users/organizations/sessions/teams/divisions, and shared helpers such as ensureOrganizationAppLink and syncBetterAuthCredentialAccount.

````
