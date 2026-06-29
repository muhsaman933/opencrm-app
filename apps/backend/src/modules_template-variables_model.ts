# Backend Source Reference - src/modules/template-variables/model.ts

Original source path: `apps/backend/src/modules/template-variables/model.ts`
Line count: 26
SHA-256: `08721f4ce506a6d0e717496148cbab85728c8b3b4d18402462f2014ba1fbbb96`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const TemplateVariableModel = {
	create: t.Object({
		app_id: t.Optional(t.String()),
		name: t.String(),
		category: t.Optional(t.String()),
		value: t.String(),
		fallback_value: t.Optional(t.String()),
	}),
	id: t.Object({
		id: t.String(),
	}),
}

export type TemplateVariable = {
	id: string
	app_id: string | null
	name: string
	category: string | null
	value: string | null
	fallback_value: string | null
	created_at: Date | null
	updated_at: Date | null
}

````
