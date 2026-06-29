# Backend Source Reference - src/modules/broadcast/model.ts

Original source path: `apps/backend/src/modules/broadcast/model.ts`
Line count: 33
SHA-256: `33932d7941e6ae9ba98b7008791ae53e2adf02b35d2b27b46eb96ddc1f0a6e8e`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const BroadcastModel = {
	broadcast: t.Object({
		id: t.String(),
		app_id: t.String(),
		title: t.String(),
		message_type: t.Nullable(t.String()),
		message_content: t.String(),
		template_params: t.Optional(t.Any()),
		target_audience: t.Optional(t.Any()),
		status: t.String(),
		total_recipients: t.Number(),
		success_count: t.Number(),
		failed_count: t.Number(),
		scheduled_at: t.Optional(t.Nullable(t.Date())),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const BroadcastRequestModel = {
	create: t.Object({
		title: t.String(),
		message_type: t.Optional(t.Union([t.Literal('text'), t.Literal('template')])),
		message_content: t.Optional(t.String()),
		template_name: t.Optional(t.String()),
		template_language: t.Optional(t.String()),
		template_params: t.Optional(t.Any()),
		target_audience: t.Optional(t.Any()),
		scheduled_at: t.Optional(t.String()),
	}),
} as const

````
