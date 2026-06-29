# Backend Source Reference - src/lib/codemap.md

Original source path: `apps/backend/src/lib/codemap.md`
Line count: 14
SHA-256: `6a2d353447d4fc4ce1749759f8cfb82599306a43284d1731af63c56fcc1ea742`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````md
# apps/backend/src/lib/

## Responsibility
Shared infrastructure and utility layer for database access, Redis, queues, realtime, S3, external API clients, and workspace/org resolution helpers.

## Design
Thin wrappers around platform dependencies. Prisma is centralized in lib/prisma.ts; other files encapsulate connection setup or helper logic so feature modules stay focused on business rules.

## Flow
Modules import shared helpers here for DB access, transaction boundaries, org/app lookup, and provider clients. Shutdown hooks disconnect Prisma cleanly on process signals.

## Integration
Used throughout feature modules, workers, auth flows, webhooks, and compatibility routes to keep infrastructure concerns in one place.

````
