# Backend Source Reference - src/routes/codemap.md

Original source path: `apps/backend/src/routes/codemap.md`
Line count: 14
SHA-256: `c3b3062612e16dffabe335db92aa53457869aecd1b7c1d4943a3d1312ba5d6bc`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````md
# apps/backend/src/routes/

## Responsibility
Legacy/compatibility route definitions that do not fit the main feature-module router structure.

## Design
Small Elysia route files that bridge older webhook-style endpoints to shared services and database helpers.

## Flow
Request enters a standalone router, is validated/signature-checked, then delegates directly to Prisma or a provider service and returns a compact JSON response.

## Integration
Mounted alongside the module routers from src/index.ts to preserve external webhook contracts while the app remains module-driven.

````
