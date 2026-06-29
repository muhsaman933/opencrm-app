# Backend Source Reference - src/modules/media/model.ts

Original source path: `apps/backend/src/modules/media/model.ts`
Line count: 23
SHA-256: `454b409cee735db56179285e817bdb61cbb7188aca308a470ed3dcaab401846d`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

export const MediaModel = {
	uploadResponse: t.Object({
		url: t.String(),
		type: t.String(),
		mimeType: t.String(),
		fileName: t.String(),
		fileSize: t.Number(),
		key: t.String(),
		checksumSha256: t.Optional(t.String()),
	}),
	galleryItem: t.Object({
		id: t.String(),
		media_type: t.Nullable(t.String()),
		mime_type: t.Nullable(t.String()),
		filename: t.Nullable(t.String()),
		file_size: t.Nullable(t.Number()),
		url: t.Nullable(t.String()),
		created_at: t.Nullable(t.Date()),
	}),
} as const

````
