# Backend Source Reference - src/modules/template-variables/index.ts

Original source path: `apps/backend/src/modules/template-variables/index.ts`
Line count: 43
SHA-256: `d539c9b40eb26e4c5e98401b8252d5de95aa8539249382216147bd85c0d2af0b`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { TemplateVariableService } from './service'
import { TemplateVariableModel } from './model'
import { appContext } from '../../plugins'

export const templateVariables = new Elysia({
	prefix: '/template-variables',
	tags: ['Template Variables'],
})
	.use(appContext)
	.get('/', async ({ resolvedAppId, set }) => {
		if (!resolvedAppId) {
			set.status = 400
			return { error: 'App ID required' }
		}
		const variables = await TemplateVariableService.list(resolvedAppId)
		return { success: true, data: variables }
	})
	.post(
		'/',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const variable = await TemplateVariableService.create(resolvedAppId, body)
			return { success: true, data: variable }
		},
		{
			body: TemplateVariableModel.create,
		},
	)
	.delete(
		'/:id',
		async ({ params }) => {
			await TemplateVariableService.delete(params.id)
			return { success: true }
		},
		{
			params: TemplateVariableModel.id,
		},
	)

````
