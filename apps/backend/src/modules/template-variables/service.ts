# Backend Source Reference - src/modules/template-variables/service.ts

Original source path: `apps/backend/src/modules/template-variables/service.ts`
Line count: 32
SHA-256: `13c02c63e99315547e4e7902af43ecbfc4b965dc6fcb92d067e0ed7902588fb4`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { prisma } from '../../lib/prisma'
import { resolveAppId } from '../../lib/utils'

export const TemplateVariableService = {
	async list(appIdOrSlug: string) {
		const appId = await resolveAppId(appIdOrSlug)
		return await prisma.template_variables.findMany({
			where: { app_id: appId },
			orderBy: { created_at: 'desc' },
		})
	},

	async create(appIdOrSlug: string, data: any) {
		const appId = await resolveAppId(appIdOrSlug)
		return await prisma.template_variables.create({
			data: {
				app_id: appId,
				name: data.name,
				category: data.category || 'custom',
				value: data.value,
				fallback_value: data.fallback_value || '',
			},
		})
	},

	async delete(id: string) {
		return await prisma.template_variables.delete({
			where: { id },
		})
	},
}

````
