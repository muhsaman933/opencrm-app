# Backend Source Reference - src/lib/agent-channel-access.ts

Original source path: `apps/backend/src/lib/agent-channel-access.ts`
Line count: 60
SHA-256: `c98db607a14f34eebbe924026492c12466bf2f4f73ecf920d47d525e2ab9ec4e`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import prisma from './prisma'

type ChannelAccessParams = {
	appId: string | null | undefined
	userId: string | null | undefined
}

/**
 * Returns channel types that the current user is allowed to access.
 * - `null` means unrestricted (admin/owner, no user context, or no explicit assignment).
 * - `string[]` means restricted to those channel types.
 */
export async function getAllowedChannelTypesForUser(
	params: ChannelAccessParams,
): Promise<string[] | null> {
	const { appId, userId } = params
	if (!appId || !userId) return null

	const user = await prisma.users.findFirst({
		where: {
			id: userId,
			app_id: appId,
			active: true,
		},
		select: {
			role: true,
		},
	})

	if (!user) return null

	const normalizedRole = String(user.role || '')
		.trim()
		.toLowerCase()

	if (normalizedRole === 'admin' || normalizedRole === 'owner') {
		return null
	}

	const rows = await prisma.agent_channels.findMany({
		where: {
			user_id: userId,
		},
		select: {
			channel_type: true,
		},
	})

	const allowedTypes = Array.from(
		new Set(
			rows
				.map((row) => String(row.channel_type || '').trim())
				.filter(Boolean),
		),
	)

	return allowedTypes.length > 0 ? allowedTypes : null
}


````
