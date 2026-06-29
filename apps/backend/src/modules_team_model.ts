# Backend Source Reference - src/modules/team/model.ts

Original source path: `apps/backend/src/modules/team/model.ts`
Line count: 34
SHA-256: `8812cba4ded84a715d3d9cfabae6e9817fb20364776af1ab40882e68c153057f`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const TeamModel = {
	team: t.Object({
		id: t.String(),
		account_id: t.String(),
		name: t.String(),
		description: t.Nullable(t.String()),
		allow_auto_assign: t.Boolean(),
		created_at: t.Nullable(t.Date()),
	}),

	member: t.Object({
		id: t.String(),
		team_id: t.String(),
		user_id: t.String(),
		role: t.Nullable(t.String()),
	}),
} as const

export const TeamRequestModel = {
	create: t.Object({
		name: t.String(),
		description: t.Optional(t.String()),
		allow_auto_assign: t.Optional(t.Boolean()),
	}),

	update: t.Object({
		name: t.Optional(t.String()),
		description: t.Optional(t.String()),
		allow_auto_assign: t.Optional(t.Boolean()),
	}),
} as const

````
