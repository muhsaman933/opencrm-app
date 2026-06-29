# Backend Source Reference - src/modules/canned-response/model.ts

Original source path: `apps/backend/src/modules/canned-response/model.ts`
Line count: 19
SHA-256: `f2242531d0af60b6e7e8d8923a632e1491e4ae4f35c4b305e5d65bb843accca4`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const CannedResponseModel = {
	response: t.Object({
		id: t.String(),
		account_id: t.String(),
		short_code: t.String(),
		content: t.String(),
		created_at: t.Nullable(t.Date()),
	}),
} as const

export const CannedResponseRequestModel = {
	create: t.Object({
		short_code: t.String(),
		content: t.String(),
	}),
} as const

````
