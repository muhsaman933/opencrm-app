# Backend Source Reference - src/modules/metrics/model.ts

Original source path: `apps/backend/src/modules/metrics/model.ts`
Line count: 26
SHA-256: `68e5ff75a9bc7f78f82c617e6dba1b6bf943b81ed6494df0fe33ac11a2565075`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const MetricsModel = {
	summary: t.Object({
		period: t.String(),
		total_messages: t.Number(),
		active_conversations: t.Number(),
		avg_response_time: t.Number(),
		ai_handling_rate: t.Number(),
	}),
} as const

export const MetricsRequestModel = {
	get: t.Object({
		period: t.Optional(
			t.Union([
				t.Literal('1h'),
				t.Literal('24h'),
				t.Literal('today'),
				t.Literal('7d'),
				t.Literal('30d'),
			]),
		),
	}),
} as const

````
