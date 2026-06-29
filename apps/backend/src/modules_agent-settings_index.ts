# Backend Source Reference - src/modules/agent-settings/index.ts

Original source path: `apps/backend/src/modules/agent-settings/index.ts`
Line count: 43
SHA-256: `4bfaa0d8c9757d5f6e13deffa9905600ffe5c01cd08c41ee8e92ea4ce5f2c50f`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { AgentSettingsService } from './service'
import { AgentSettingsRequestModel } from './model'
import { appContext } from '../../plugins'

export const agentSettings = new Elysia({
	prefix: '/agent-settings',
	tags: ['Admin'],
})
	.use(appContext)
	.get(
		'/',
		async ({ resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const settings = await AgentSettingsService.getSettings(resolvedAppId)
			return { success: true, settings }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)
	.put(
		'/',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const settings = await AgentSettingsService.updateSettings(
				resolvedAppId,
				body,
			)
			return { success: true, settings }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
			body: AgentSettingsRequestModel.update,
		},
	)

````
