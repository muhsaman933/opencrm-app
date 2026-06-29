# Backend Source Reference - src/modules/flow/model.ts

Original source path: `apps/backend/src/modules/flow/model.ts`
Line count: 44
SHA-256: `ea6e353a45982a3be7d52f070c6b4b14eec83c909a618a126cedfd494f30f313`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const FlowModel = {
	flow: t.Object({
		id: t.String(),
		app_id: t.String(),
		name: t.String(),
		description: t.Nullable(t.String()),
		nodes: t.Any(),
		edges: t.Any(),
		active: t.Nullable(t.Boolean()),
		created_at: t.Nullable(t.Date()),
		updated_at: t.Nullable(t.Date()),
	}),

	flows: t.Array(
		t.Object({
			id: t.String(),
			name: t.String(),
			active: t.Nullable(t.Boolean()),
		}),
	),
} as const

export const FlowRequestModel = {
	create: t.Object({
		name: t.String(),
		description: t.Optional(t.String()),
		trigger_type: t.Optional(t.String()),
		nodes: t.Optional(t.Any()),
		edges: t.Optional(t.Any()),
		active: t.Optional(t.Boolean()),
		is_active: t.Optional(t.Boolean()),
	}),

	update: t.Object({
		name: t.Optional(t.String()),
		description: t.Optional(t.String()),
		nodes: t.Optional(t.Any()),
		edges: t.Optional(t.Any()),
		active: t.Optional(t.Boolean()),
	}),
} as const

````
