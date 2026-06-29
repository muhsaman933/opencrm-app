# Backend Source Reference - src/modules/broadcast/index.ts

Original source path: `apps/backend/src/modules/broadcast/index.ts`
Line count: 183
SHA-256: `b50bc03081be1615882b817f2a0e3518f5b6860652414f9e992a002eafe9902f`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { BroadcastService } from './service'
import { BroadcastModel, BroadcastRequestModel } from './model'
import { appContext } from '../../plugins'

export const broadcast = new Elysia({
	prefix: '/broadcasts',
	tags: ['Broadcast'],
})
	.use(appContext)
	.get(
		'/',
		async ({ resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const items = await BroadcastService.getBroadcasts(resolvedAppId)
			return { data: items }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)
	.get(
		'/jobs',
		async ({ resolvedAppId, query, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { success: false, error: 'App ID required' }
			}

			const rawStatus = query.status ?? query.statuses
			const statuses = Array.isArray(rawStatus)
				? rawStatus
				: typeof rawStatus === 'string'
					? [rawStatus]
					: []

			const result = await BroadcastService.getBroadcastJobs(resolvedAppId, {
				page: Number(query.page || 1),
				limit: Number(query.limit || 10),
				statuses,
			})

			return {
				success: true,
				data: result.data,
				pagination: result.pagination,
			}
		},
		{
			query: t.Object({
				appId: t.Optional(t.String()),
				page: t.Optional(t.String()),
				limit: t.Optional(t.String()),
				status: t.Optional(t.Union([t.String(), t.Array(t.String())])),
				statuses: t.Optional(t.Union([t.String(), t.Array(t.String())])),
			}),
		},
	)
	.get(
		'/jobs/:id',
		async ({ params, resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { success: false, error: 'App ID required' }
			}

			try {
				const item = await BroadcastService.getBroadcastJobDetail(
					params.id,
					resolvedAppId,
				)
				return {
					success: true,
					data: item,
				}
			} catch (error: any) {
				const message = error?.message || 'Failed to load broadcast job'
				set.status = message === 'Broadcast not found' ? 404 : 500
				return {
					success: false,
					error: message,
				}
			}
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)
	.post(
		'/audience/preview',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { success: false, error: 'App ID required' }
			}

			try {
				const result = await BroadcastService.previewAudience(
					resolvedAppId,
					body.filters,
				)
				return {
					success: true,
					data: result,
				}
			} catch (error: any) {
				set.status = 400
				return {
					success: false,
					error: error?.message || 'Failed to preview audience',
				}
			}
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
			body: t.Object({
				filters: t.Optional(t.Any()),
			}),
		},
	)
	.get(
		'/:id',
		async ({ params, resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}

			const item = await BroadcastService.getBroadcastById(
				params.id,
				resolvedAppId,
			)

			if (!item) {
				set.status = 404
				return { error: 'Broadcast not found' }
			}

			return { data: item }
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)
	.post(
		'/',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const b = await BroadcastService.createBroadcast(resolvedAppId, body)
			return { data: b }
		},
		{
			query: t.Object({ appId: t.Optional(t.String()) }),
			body: BroadcastRequestModel.create,
		},
	)
	.post(
		'/:id/send',
		async ({ params, resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const result = await BroadcastService.sendBroadcast(
				params.id,
				resolvedAppId,
			)
			return result
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({ appId: t.Optional(t.String()) }),
		},
	)

````
