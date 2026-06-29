# Backend Source Reference - src/modules/team/service.ts

Original source path: `apps/backend/src/modules/team/service.ts`
Line count: 121
SHA-256: `d5018cd6e9c18f925c4c81bf7b3c0f0526a5e784c970a0cae30f1c924d490f6f`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
// @ts-nocheck
import prisma from '../../lib/prisma'
import { isUuid, resolveAppId } from '../../lib/utils'

export abstract class TeamService {
	static async getTeams(accountId: string) {
		const targetAppId = await resolveAppId(accountId)
		if (!targetAppId) return []

		const teams = await prisma.teams.findMany({
			where: { app_id: targetAppId },
			include: {
				team_members: true,
			},
		})

		const userIds = teams.flatMap(t => t.team_members.map(m => m.user_id))
		const users = await prisma.users.findMany({
			where: { id: { in: userIds } },
			select: { id: true, name: true, avatar_url: true }
		})

		return teams.map(t => ({
			...t,
			team_members: t.team_members.map(m => ({
				...m,
				users: users.find(u => u.id === m.user_id)
			}))
		}))
	}

	static async getTeamById(id: string, accountId: string) {
		if (!isUuid(id)) return null
		const targetAppId = await resolveAppId(accountId)
		if (!targetAppId) return null

		const team = await prisma.teams.findFirst({
			where: { id, app_id: targetAppId },
			include: {
				team_members: true,
			},
		})

		if (!team) return null

		const userIds = team.team_members.map(m => m.user_id)
		const users = await prisma.users.findMany({
			where: { id: { in: userIds } },
			select: { id: true, name: true, avatar_url: true }
		})

		return {
			...team,
			team_members: team.team_members.map(m => ({
				...m,
				users: users.find(u => u.id === m.user_id)
			}))
		}
	}

	static async createTeam(accountId: string, data: any) {
		const targetAppId = await resolveAppId(accountId)
		if (!targetAppId) throw new Error('Invalid App ID')

		return prisma.teams.create({
			data: {
				...data,
				app_id: targetAppId,
			},
		})
	}

	static async updateTeam(id: string, accountId: string, data: any) {
		if (!isUuid(id)) throw new Error('Invalid Team ID')
		const targetAppId = await resolveAppId(accountId)
		if (!targetAppId) throw new Error('Invalid App ID')

		return prisma.teams.update({
			where: { id, app_id: targetAppId },
			data: {
				...data,
				updated_at: new Date(),
			},
		})
	}

	static async deleteTeam(id: string, accountId: string) {
		if (!isUuid(id)) throw new Error('Invalid Team ID')
		const targetAppId = await resolveAppId(accountId)
		if (!targetAppId) throw new Error('Invalid App ID')

		return prisma.teams.delete({
			where: { id, app_id: targetAppId },
		})
	}

	static async addMember(teamId: string, userId: string) {
		if (!isUuid(teamId) || !userId) throw new Error('Invalid IDs')

		return prisma.team_members.create({
			data: {
				team_id: teamId,
				user_id: userId,
			},
		})
	}

	static async removeMember(teamId: string, userId: string) {
		if (!isUuid(teamId) || !userId) throw new Error('Invalid IDs')

		return prisma.team_members.delete({
			where: {
				team_id_user_id: {
					team_id: teamId,
					user_id: userId,
				},
			},
		})
	}
}

````
