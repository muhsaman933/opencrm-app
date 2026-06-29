# Backend Source Reference - src/modules/whatsapp/model.ts

Original source path: `apps/backend/src/modules/whatsapp/model.ts`
Line count: 97
SHA-256: `36b7fbaf1dc9aea941ad03c5e71e3f9a7aba90dad066bc2a2013bb85c01c9949`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const WhatsAppModel = {
	channel: t.Object({
		id: t.String(),
		inbox_id: t.String(),
		name: t.Nullable(t.String()),
		phone_number: t.Nullable(t.String()),
		phone_number_id: t.Nullable(t.String()),
		waba_id: t.Nullable(t.String()),
		business_id: t.Nullable(t.String()),
		business_name: t.Nullable(t.String()),
		is_active: t.Nullable(t.Boolean()),
		provider: t.Nullable(t.String()),
		provider_channel_key: t.Nullable(t.String()),
		provider_webhook_url: t.Nullable(t.String()),
		created_at: t.Nullable(t.Date()),
	}),

	channels: t.Array(
		t.Object({
			id: t.String(),
			name: t.Nullable(t.String()),
			phone_number: t.Nullable(t.String()),
			is_active: t.Nullable(t.Boolean()),
			provider: t.Nullable(t.String()),
			provider_channel_key: t.Nullable(t.String()),
			provider_webhook_url: t.Nullable(t.String()),
		}),
	),

	template: t.Object({
		id: t.String(),
		name: t.String(),
		language: t.String(),
		category: t.String(),
		status: t.String(),
		components: t.Any(),
	}),

	templates: t.Array(
		t.Object({
			id: t.String(),
			name: t.String(),
			status: t.String(),
		}),
	),
} as const

export const WhatsAppRequestModel = {
	create: t.Object({
		name: t.String(),
		phone_number: t.String(),
		phone_number_id: t.String(),
		waba_id: t.String(),
		business_name: t.Optional(t.String()),
		inbox_id: t.Optional(t.String()),
		provider: t.Optional(t.String()),
		api_key: t.Optional(t.String()),
	}),

	createBaileys: t.Object({
		name: t.String({ minLength: 1 }),
		phoneNumber: t.String({ minLength: 1 }),
		providerChannelKey: t.String({ minLength: 1 }),
		providerWebhookUrl: t.Optional(t.String({ minLength: 1 })),
	}),

	update: t.Object({
		name: t.Optional(t.String()),
		phone_number: t.Optional(t.String()),
		is_active: t.Optional(t.Boolean()),
		business_name: t.Optional(t.String()),
		provider_channel_key: t.Optional(t.Nullable(t.String())),
		provider_webhook_url: t.Optional(t.Nullable(t.String())),
		tags: t.Optional(t.Array(t.String())),
		default_chatbot_id: t.Optional(t.Nullable(t.String())),
		default_flow_id: t.Optional(t.Nullable(t.String())),
		default_team_ids: t.Optional(t.Array(t.String())),
		default_agent_ids: t.Optional(t.Array(t.String())),
		distribution_method: t.Optional(t.String()),
	}),

	initSignup: t.Object({
		lang: t.Optional(t.String({ default: 'en' })),
	}),

	exchangeToken: t.Object({
		code: t.String(),
	}),

	manualConnect: t.Object({
		accessToken: t.String({ minLength: 1 }),
		wabaId: t.String({ minLength: 1 }),
	}),
} as const

````
