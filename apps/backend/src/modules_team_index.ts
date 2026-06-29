# Backend Source Reference - src/modules/team/index.ts

Original source path: `apps/backend/src/modules/team/index.ts`
Line count: 121
SHA-256: `42a4f27ad2a4e2faee1fa9e8ec777fd8ffd9bbbab7c5511f780130c92b6dfa7a`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { TeamService } from './service'
import { TeamModel, TeamRequestModel } from './model'
import { appContext } from '../../plugins'

export const team = new Elysia({ prefix: '/teams', tags: ['Team'] })
	.use(appContext)
	.get(
		'/',
		async ({ resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}

			const teams = await TeamService.getTeams(resolvedAppId)
			return { data: teams }
		},
		{
			query: t.Object({
				appId: t.Optional(t.String()),
				accountId: t.Optional(t.String()),
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
			const t = await TeamService.getTeamById(params.id, resolvedAppId)
			if (!t) return { error: 'Team not found' }
			return { data: t }
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({
				appId: t.Optional(t.String()),
				accountId: t.Optional(t.String()),
			}),
		},
	)
	.post(
		'/',
		async ({ resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const t = await TeamService.createTeam(resolvedAppId, body)
			return { data: t }
		},
		{
			query: t.Object({
				appId: t.Optional(t.String()),
				accountId: t.Optional(t.String()),
			}),
			body: TeamRequestModel.create,
		},
	)
	.patch(
		'/:id',
		async ({ params, resolvedAppId, body, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			const t = await TeamService.updateTeam(params.id, resolvedAppId, body)
			return { data: t }
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({
				appId: t.Optional(t.String()),
				accountId: t.Optional(t.String()),
			}),
			body: TeamRequestModel.update,
		},
	)
	.delete(
		'/:id',
		async ({ params, resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 400
				return { error: 'App ID required' }
			}
			await TeamService.deleteTeam(params.id, resolvedAppId)
			return { success: true }
		},
		{
			params: t.Object({ id: t.String() }),
			query: t.Object({
				appId: t.Optional(t.String()),
				accountId: t.Optional(t.String()),
			}),
		},
	)
	.post(
		'/:id/members',
		async ({ params, body }) => {
			const member = await TeamService.addMember(params.id, body.userId)
			return { data: member }
		},
		{
			params: t.Object({ id: t.String() }),
			body: t.Object({ userId: t.String() }),
		},
	)
	.delete(
		'/:id/members/:userId',
		async ({ params }) => {
			await TeamService.removeMember(params.id, params.userId)
			return { success: true }
		},
		{
			params: t.Object({ id: t.String(), userId: t.String() }),
		},
	)

````
