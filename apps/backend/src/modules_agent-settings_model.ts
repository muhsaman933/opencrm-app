# Backend Source Reference - src/modules/agent-settings/model.ts

Original source path: `apps/backend/src/modules/agent-settings/model.ts`
Line count: 42
SHA-256: `02d9f451ba6cceab9435e66f08d7e43a5d2971824cbe0bda761ac07777216365`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const AgentSettingsModel = {
	settings: t.Object({
		id: t.String(),
		app_id: t.String(),
		default_ticket_board_id: t.Nullable(t.String()),
		auto_assign_agent: t.Boolean(),
		agent_can_takeover_unserved: t.Boolean(),
		agent_can_access_customers: t.Boolean(),
		agent_can_import_export_customers: t.Boolean(),
		agent_can_send_broadcast: t.Boolean(),
		agent_can_broadcast_in_service_window: t.Boolean(),
		hide_agent_status_toggle: t.Boolean(),
		hide_customer_id: t.Boolean(),
		agent_can_assign_chat: t.Boolean(),
		agent_can_add_agents_to_chat: t.Boolean(),
		agent_can_leave_chat: t.Boolean(),
		hide_handover_dialogue: t.Boolean(),
		agent_can_manage_quick_replies: t.Boolean(),
	}),
} as const

export const AgentSettingsRequestModel = {
	update: t.Object({
		default_ticket_board_id: t.Optional(t.Union([t.String(), t.Null()])),
		auto_assign_agent: t.Optional(t.Boolean()),
		agent_can_takeover_unserved: t.Optional(t.Boolean()),
		agent_can_access_customers: t.Optional(t.Boolean()),
		agent_can_import_export_customers: t.Optional(t.Boolean()),
		agent_can_send_broadcast: t.Optional(t.Boolean()),
		agent_can_broadcast_in_service_window: t.Optional(t.Boolean()),
		hide_agent_status_toggle: t.Optional(t.Boolean()),
		hide_customer_id: t.Optional(t.Boolean()),
		agent_can_assign_chat: t.Optional(t.Boolean()),
		agent_can_add_agents_to_chat: t.Optional(t.Boolean()),
		agent_can_leave_chat: t.Optional(t.Boolean()),
		hide_handover_dialogue: t.Optional(t.Boolean()),
		agent_can_manage_quick_replies: t.Optional(t.Boolean()),
	}),
} as const

````
