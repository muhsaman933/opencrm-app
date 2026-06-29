# Backend Source Reference - src/modules/instagram/model.ts

Original source path: `apps/backend/src/modules/instagram/model.ts`
Line count: 22
SHA-256: `da06d55b26adadd67371b7c5b048d69bb454919d4dd973bcee88dbb374c9c7ea`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const InstagramModel = {
	connectionStatus: t.Object({
		connected: t.Boolean(),
		id: t.String(),
		igId: t.String(),
		username: t.String(),
		profilePicUrl: t.Nullable(t.String()),
		connectionStatus: t.String(),
		connectedAt: t.Nullable(t.Date()),
		tokenExpiresAt: t.Nullable(t.String()),
		daysUntilTokenExpiry: t.Number(),
	}),
} as const

export const InstagramRequestModel = {
	initLogin: t.Object({
		appId: t.Optional(t.String()),
	}),
} as const

````
