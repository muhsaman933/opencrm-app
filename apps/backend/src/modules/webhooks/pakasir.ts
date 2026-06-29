# Backend Source Reference - src/modules/webhooks/pakasir.ts

Original source path: `apps/backend/src/modules/webhooks/pakasir.ts`
Line count: 43
SHA-256: `4a00f290c0de16183db682d289fdefcb6a06b35defe9666db80aef8c648ff50f`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { CommerceService } from '../commerce/service'

function toHeaderRecord(headers: Record<string, unknown>) {
	const normalized: Record<string, unknown> = {}
	for (const [key, value] of Object.entries(headers || {})) {
		normalized[key.toLowerCase()] = value
	}
	return normalized
}

export const pakasirWebhook = new Elysia({ prefix: '/pakasir' }).post(
	'/',
	async ({ body, headers, set }) => {
		try {
			const payload =
				body && typeof body === 'object' && !Array.isArray(body)
					? (body as Record<string, unknown>)
					: {}

			const data = await CommerceService.handlePakasirWebhook({
				payload,
				headers: toHeaderRecord(headers as Record<string, unknown>),
			})

			return { success: true, data }
		} catch (error: unknown) {
			console.error('[pakasir-webhook] failed to process webhook', error)
			set.status = 400
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: 'Failed to process Pakasir webhook',
			}
		}
	},
	{
		body: t.Any(),
	},
)

````
