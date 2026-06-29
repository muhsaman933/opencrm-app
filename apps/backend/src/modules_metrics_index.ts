# Backend Source Reference - src/modules/metrics/index.ts

Original source path: `apps/backend/src/modules/metrics/index.ts`
Line count: 76
SHA-256: `87c335db0822ab4573769c9ac15d5cf148300dd5a242c117f9b81e7ae42a49fb`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { MetricsService } from './service'
import { MetricsModel, MetricsRequestModel } from './model'
import { appContext } from '../../plugins'

export const metrics = new Elysia({ prefix: '/metrics', tags: ['Advanced'] })
	.use(appContext)
	.get(
		'/summary',
		async ({ resolvedAppId, integrationAuthError, query, set }) => {
			if (integrationAuthError) {
				set.status = 401
				return { error: integrationAuthError }
			}
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const summary = await MetricsService.getSummary(
				resolvedAppId,
				query.period,
			)
			return { data: summary }
		},
		{
			query: t.Object({
				appId: t.Optional(t.String()),
				period: t.Optional(t.String()),
			}),
		},
	)
	.get(
		'/dashboard',
		async ({ resolvedAppId, integrationAuthError, query, set }) => {
			if (integrationAuthError) {
				set.status = 401
				return { error: integrationAuthError }
			}
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			return MetricsService.getDashboard(resolvedAppId, query.period)
		},
		{
			query: t.Object({
				appId: t.Optional(t.String()),
				period: t.Optional(
					t.Union([
						t.Literal('today'),
						t.Literal('7d'),
						t.Literal('30d'),
					]),
				),
			}),
		},
	)
	.get(
		'/ai',
		async ({ resolvedAppId, integrationAuthError, set }) => {
			if (integrationAuthError) {
				set.status = 401
				return { error: integrationAuthError }
			}
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const metrics = await MetricsService.getAIMetrics(resolvedAppId)
			return { data: metrics }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)

````
