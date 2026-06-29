# Backend Source Reference - src/lib/utils.ts

Original source path: `apps/backend/src/lib/utils.ts`
Line count: 41
SHA-256: `24a0c1d3c7ff995cc2f7ba6c20cfad47572ae83d155052e857eb21fc6a86e0b9`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import prisma from './prisma'

/**
 * Helper to check if string is a valid UUID
 */
export const isUuid = (str: string | null | undefined): str is string =>
	!!str &&
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str)

/**
 * Resolve appId (slug or UUID) to the internal UUID
 */
export async function resolveAppId(
	appId: string | null | undefined,
): Promise<string | null> {
	if (!appId || appId === 'default' || appId === 'undefined') return null
	if (isUuid(appId)) return appId

	const app = await prisma.apps.findFirst({
		where: { app_id: appId },
		select: { id: true },
	})

	return app?.id || null
}

/**
 * Resolve organizationId (string) to the internal ID
 */
export async function resolveOrganizationId(
	organizationId: string | null | undefined,
): Promise<string | null> {
	if (
		!organizationId ||
		organizationId === 'default' ||
		organizationId === 'undefined'
	)
		return null
	return organizationId
}

````
