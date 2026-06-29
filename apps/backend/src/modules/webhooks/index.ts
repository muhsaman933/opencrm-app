# Backend Source Reference - src/modules/webhooks/index.ts

Original source path: `apps/backend/src/modules/webhooks/index.ts`
Line count: 7
SHA-256: `da6865e41429c3893730427672316e8d6034d8933dae492332d76e224a9a4214`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia } from 'elysia'

import { pakasirWebhook } from './pakasir'

export const webhooks = new Elysia({ prefix: '/webhooks' })
	.use(pakasirWebhook)

````
