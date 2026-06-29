# Backend Source Reference - src/modules/webhook/model.ts

Original source path: `apps/backend/src/modules/webhook/model.ts`
Line count: 22
SHA-256: `3d3c23a546986971680915b690780e46ce33fa277314d7d95c7d6a9aeabcd819`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const WebhookModel = {
	webhook: t.Object({
		id: t.String(),
		account_id: t.String(),
		url: t.String(),
		name: t.Nullable(t.String()),
		events: t.Array(t.String()),
		is_active: t.Boolean(),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const WebhookRequestModel = {
	create: t.Object({
		url: t.String(),
		name: t.Optional(t.String()),
		events: t.Optional(t.Array(t.String())),
	}),
} as const

````
