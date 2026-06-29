# Backend Source Reference - src/modules/crm/model.ts

Original source path: `apps/backend/src/modules/crm/model.ts`
Line count: 56
SHA-256: `dea97a700d25dc0c95dbcb30c99bf429e04975b3d6ca2acc268070179d8d0995`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const CRMModel = {
	pipeline: t.Object({
		id: t.String(),
		app_id: t.String(),
		name: t.String(),
		pipeline_type: t.String(),
		is_default: t.Boolean(),
		created_at: t.Nullable(t.Date()),
	}),

	stage: t.Object({
		id: t.String(),
		pipeline_id: t.String(),
		name: t.String(),
		stage_order: t.Number(),
		stage_type: t.String(),
		probability: t.Number(),
		color: t.Nullable(t.String()),
	}),

	deal: t.Object({
		id: t.String(),
		conversation_id: t.String(),
		pipeline_id: t.String(),
		stage_id: t.String(),
		deal_value: t.Number(),
		status: t.String(),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const CRMRequestModel = {
	createPipeline: t.Object({
		name: t.String(),
		pipelineType: t.Optional(t.String()),
		stages: t.Optional(
			t.Array(
				t.Object({
					name: t.String(),
					color: t.Optional(t.String()),
					order: t.Optional(t.Number()),
				}),
			),
		),
	}),

	updateDeal: t.Object({
		pipeline_id: t.Optional(t.String()),
		stage_id: t.Optional(t.String()),
		deal_value: t.Optional(t.Number()),
		notes: t.Optional(t.String()),
	}),
} as const

````
