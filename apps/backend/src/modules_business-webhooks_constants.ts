# Backend Source Reference - src/modules/business-webhooks/constants.ts

Original source path: `apps/backend/src/modules/business-webhooks/constants.ts`
Line count: 21
SHA-256: `0f3ea633d78d668939833de4303c79ed4fd8a5ea9c86fde774cd8df77b41316a`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
export const BUSINESS_WEBHOOK_EVENTS = [
	'message.received',
	'message.sent',
	'conversation.created',
	'conversation.stage_status_updated',
	'conversation.pipeline_status_updated',
	'conversation.handled_by_updated',
	'conversation.labels_updated',
	'contact.updated',
	'ai_summary.generated',
	'conversation_note.created',
	'conversation_note.updated',
	'order.add_to_cart',
	'order.checkout',
	'order.payment_link_sent',
	'order.paid',
	'order.cancelled',
] as const

export type BusinessWebhookEvent = (typeof BUSINESS_WEBHOOK_EVENTS)[number]

````
