# Backend Source Reference - src/modules/label/model.ts

Original source path: `apps/backend/src/modules/label/model.ts`
Line count: 38
SHA-256: `24e227d19f1594186788d8013091cd03ddf1214001299cf29500456a1a94dd7b`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const LabelModel = {
	label: t.Object({
		id: t.String(),
		app_id: t.String(),
		title: t.String(),
		description: t.Nullable(t.String()),
		color: t.Nullable(t.String()),
		is_visible: t.Boolean(),
		created_at: t.Nullable(t.Date()),
	}),

	labels: t.Array(
		t.Object({
			id: t.String(),
			title: t.String(),
			color: t.Nullable(t.String()),
		}),
	),
} as const

export const LabelRequestModel = {
	create: t.Object({
		title: t.Optional(t.String()),
		name: t.Optional(t.String()),
		description: t.Optional(t.String()),
		color: t.Optional(t.String()),
	}),

	update: t.Object({
		title: t.Optional(t.String()),
		name: t.Optional(t.String()),
		description: t.Optional(t.String()),
		color: t.Optional(t.String()),
	}),
} as const

````
