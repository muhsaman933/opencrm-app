# Backend Source Reference - src/modules/orchestration/model.ts

Original source path: `apps/backend/src/modules/orchestration/model.ts`
Line count: 47
SHA-256: `f92d0eb1d9df73cf40129f397410199a53870a16568f945bd55be9ca9af0eb6a`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const OrchestrationModel = {
	decision: t.Object({
		action: t.String(),
		reason: t.String(),
		confidence: t.Number(),
		agentId: t.Optional(t.String()),
		metadata: t.Optional(t.Any()),
	}),

	agent: t.Object({
		id: t.String(),
		name: t.String(),
		type: t.String(),
		currentLoad: t.Union([t.String(), t.Number()]),
	}),

	handoff: t.Object({
		id: t.String(),
		conversation_id: t.String(),
		from_agent_id: t.Nullable(t.String()),
		to_agent_id: t.String(),
		reason: t.Nullable(t.String()),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const OrchestrationRequestModel = {
	decide: t.Object({
		appId: t.String(),
		conversationId: t.String(),
		messageId: t.String(),
		messageContent: t.String(),
		customerLanguage: t.Optional(t.String()),
		conversationHistory: t.Optional(t.Array(t.Any())),
		currentAgentId: t.Optional(t.String()),
	}),

	handoff: t.Object({
		conversationId: t.String(),
		fromAgentId: t.Optional(t.String()),
		toAgentId: t.String(),
		reason: t.Optional(t.String()),
	}),
} as const

````
