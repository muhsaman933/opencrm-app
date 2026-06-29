# Backend Source Reference - src/modules/inbox/model.ts

Original source path: `apps/backend/src/modules/inbox/model.ts`
Line count: 37
SHA-256: `6a7227b340247ca3edec9fea9abd72f0fb8e3190f809a9a649dcf67623b2c407`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const InboxModel = {
	inbox: t.Object({
		id: t.String(),
		account_id: t.String(),
		name: t.String(),
		channel_type: t.String(),
		channel_config: t.Nullable(t.Any()),
		chatbot_id: t.Nullable(t.String()),
		created_at: t.Nullable(t.Date()),
	}),

	inboxes: t.Array(
		t.Object({
			id: t.String(),
			name: t.String(),
			channel_type: t.String(),
			chatbot_id: t.Nullable(t.String()),
		}),
	),
} as const

export const InboxRequestModel = {
	create: t.Object({
		name: t.String(),
		channel_type: t.String(),
		channel_config: t.Optional(t.Any()),
	}),

	update: t.Object({
		name: t.Optional(t.String()),
		channel_config: t.Optional(t.Any()),
		chatbot_id: t.Optional(t.Nullable(t.String())),
	}),
} as const

````
