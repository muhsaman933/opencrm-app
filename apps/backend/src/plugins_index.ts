# Backend Source Reference - src/plugins/index.ts

Original source path: `apps/backend/src/plugins/index.ts`
Line count: 5
SHA-256: `c14f73319f5347a96dc92ff99643ffd90a86f0eb62a25e09b0d5490fd45f5a11`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
export { openapiPlugin } from './openapi'
export { betterAuthPlugin, auth } from '../auth'
export { socketPlugin } from './socket'
export { appContext } from './app-context'

````
