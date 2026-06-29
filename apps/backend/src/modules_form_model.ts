# Backend Source Reference - src/modules/form/model.ts

Original source path: `apps/backend/src/modules/form/model.ts`
Line count: 50
SHA-256: `816e8f6d4c687cff3735910d23d491b87aeeef4fe5d29653ca03b4d9f18d6a4b`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const FormModel = {
	form: t.Object({
		id: t.String(),
		app_id: t.String(),
		name: t.String(),
		description: t.Nullable(t.String()),
		is_active: t.Boolean(),
		created_at: t.Nullable(t.Date()),
	}),

	field: t.Object({
		id: t.String(),
		form_id: t.String(),
		field_key: t.String(),
		label: t.String(),
		field_type: t.String(),
		is_required: t.Boolean(),
	}),

	submission: t.Object({
		id: t.String(),
		form_id: t.String(),
		conversation_id: t.String(),
		status: t.String(),
		overall_confidence: t.Number(),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const FormRequestModel = {
	create: t.Object({
		name: t.String(),
		description: t.Optional(t.String()),
		fields: t.Array(
			t.Object({
				field_key: t.String(),
				label: t.String(),
				field_type: t.String(),
				is_required: t.Boolean(),
			}),
		),
	}),

	extract: t.Object({
		force: t.Optional(t.Boolean()),
	}),
} as const

````
