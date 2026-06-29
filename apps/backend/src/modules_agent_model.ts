# Backend Source Reference - src/modules/agent/model.ts

Original source path: `apps/backend/src/modules/agent/model.ts`
Line count: 48
SHA-256: `984be443cba788a3221dadeb0a2460a738fc230364ab073f654d8d3ca454e85a`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const AgentModel = {
	agent: t.Object({
		id: t.String(),
		name: t.String(),
		email: t.String(),
		phone_number: t.Nullable(t.String()),
		role: t.Nullable(t.String()),
		status: t.Nullable(t.String()),
		is_available: t.Nullable(t.Boolean()),
	}),

	division: t.Object({
		id: t.String(),
		name: t.String(),
		description: t.Nullable(t.String()),
		color: t.Nullable(t.String()),
	}),
} as const

export const AgentRequestModel = {
	create: t.Object({
		name: t.String(),
		email: t.String(),
		password: t.String(),
		phone_number: t.Optional(t.String()),
		role: t.Optional(t.String()),
		supervisor_id: t.Optional(t.Union([t.String(), t.Null()])),
		divisions: t.Optional(t.Array(t.String())),
		channels: t.Optional(t.Array(t.String())),
	}),

	update: t.Object({
		name: t.Optional(t.String()),
		email: t.Optional(t.String()),
		password: t.Optional(t.String()),
		phone_number: t.Optional(t.String()),
		role: t.Optional(t.String()),
		status: t.Optional(t.String()),
		is_available: t.Optional(t.Boolean()),
		active: t.Optional(t.Boolean()),
		supervisor_id: t.Optional(t.Union([t.String(), t.Null()])),
		divisions: t.Optional(t.Array(t.String())),
		channels: t.Optional(t.Array(t.String())),
	}),
} as const

````
