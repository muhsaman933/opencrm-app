# Backend Source Reference - src/modules/canned-response/index.ts

Original source path: `apps/backend/src/modules/canned-response/index.ts`
Line count: 49
SHA-256: `b68303afeb2b7f4f73da732b86c8694184cf0cb03492941e3080c826658b26e7`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { CannedResponseService } from './service'
import { CannedResponseModel, CannedResponseRequestModel } from './model'

export const cannedResponse = new Elysia({
	prefix: '/canned-responses',
	tags: ['Message'],
})
	.get(
		'/',
		async ({ query }) => {
			const responses = await CannedResponseService.getCannedResponses(
				query.accountId,
			)
			return { data: responses }
		},
		{
			query: t.Object({ accountId: t.String() }),
		},
	)
	.post(
		'/',
		async ({ query, body }) => {
			const resp = await CannedResponseService.createCannedResponse(
				query.accountId,
				body,
			)
			return { data: resp }
		},
		{
			query: t.Object({ accountId: t.String() }),
			body: CannedResponseRequestModel.create,
		},
	)
	.delete(
		'/:id',
		async ({ params, query }) => {
			await CannedResponseService.deleteCannedResponse(
				params.id,
				query.accountId,
			)
			return { success: true }
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({ accountId: t.String() }),
		},
	)

````
