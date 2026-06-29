# Backend Source Reference - src/modules/crm/index.ts

Original source path: `apps/backend/src/modules/crm/index.ts`
Line count: 74
SHA-256: `887dfb752d605862e007e80c285df2452b6a282ce04fec890847feea3749a4b2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { CRMService } from './service'
import { CRMModel, CRMRequestModel } from './model'
import { appContext } from '../../plugins'

export const crm = new Elysia({ prefix: '/crm', tags: ['CRM'] })
	.use(appContext)
	.get(
		'/pipelines',
		async ({ resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const pipelines = await CRMService.getPipelines(resolvedAppId)
			return { data: pipelines }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)
	.post(
		'/pipelines',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const pipeline = await CRMService.createPipeline(resolvedAppId, body)
			return { data: pipeline }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
			body: CRMRequestModel.createPipeline,
		},
	)
	.delete(
		'/pipelines/:id',
		async ({ params }) => {
			await CRMService.deletePipeline(params.id)
			return { success: true }
		},
		{
			params: t.Object({ id: t.String() }),
		},
	)
	.get(
		'/deals/:conversationId',
		async ({ params }) => {
			const deal = await CRMService.getDealByConversationId(
				params.conversationId,
			)
			return { data: deal }
		},
		{
			params: t.Object({ conversationId: t.String() }),
		},
	)
	.patch(
		'/deals/:conversationId',
		async ({ params, body, userId }) => {
			const deal = await CRMService.updateDeal(
				params.conversationId,
				body,
				userId || 'system',
			)
			return { data: deal }
		},
		{
			params: t.Object({ conversationId: t.String() }),
			body: CRMRequestModel.updateDeal,
		},
	)

````
