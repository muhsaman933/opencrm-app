# Backend Source Reference - src/modules/user/service.ts

Original source path: `apps/backend/src/modules/user/service.ts`
Line count: 82
SHA-256: `d18040687234bbcfe6b073f1f7c7881012e9695d6425b9f5a0233132860a48d2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
// @ts-nocheck
import prisma from '../../lib/prisma'
import { resolveAppId } from '../../lib/utils'

export abstract class UserService {
	static async getUsers(accountId: string) {
		const targetAppId = await resolveAppId(accountId)

		return prisma.users.findMany({
			where: { app_id: targetAppId || undefined, active: true },
			select: {
				id: true,
				email: true,
				name: true,
				role: true,
				avatar_url: true,
				active: true,
				created_at: true,
			},
			orderBy: { created_at: 'desc' },
		})
	}

	static async getUserById(id: string) {
		return prisma.users.findUnique({
			where: { id },
			select: {
				id: true,
				email: true,
				name: true,
				role: true,
				avatar_url: true,
				phone_number: true,
				active: true,
				created_at: true,
				legacy_account: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		})
	}

	static async updateUser(
		id: string,
		data: { name?: string; avatar_url?: string; phone_number?: string },
	) {
		return prisma.users.update({
			where: { id },
			data: {
				...data,
				updated_at: new Date(),
			},
			select: {
				id: true,
				email: true,
				name: true,
				role: true,
				avatar_url: true,
				phone_number: true,
				active: true,
			},
		})
	}

	static async getUserPresence(userId: string) {
		return prisma.agent_presence.findUnique({
			where: { user_id: userId },
		})
	}

	static async updateUserPresence(userId: string, status: string) {
		return prisma.agent_presence.upsert({
			where: { user_id: userId },
			update: { status, last_seen_at: new Date() },
			create: { user_id: userId, status, last_seen_at: new Date() },
		})
	}
}

````
