# Backend Source Reference - src/modules/media/index.ts

Original source path: `apps/backend/src/modules/media/index.ts`
Line count: 76
SHA-256: `283e190b094ade07a9af72bd41c44eb587bb3f86f99a43a4b5cf92b1f7f6a169`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Elysia, t } from 'elysia'
import { appContext } from '../../plugins'
import { MediaService } from './service'
import { MediaModel } from './model'

export const media = new Elysia({ prefix: '/media', tags: ['Media'] })
	.use(appContext)
	.post(
		'/upload',
		async ({ body, resolvedAppId, userId, set }) => {
			if (!resolvedAppId) {
				set.status = 401
				return { error: 'Unauthorized' }
			}

			try {
				const file = body.file as File
				const platform = body.platform || 'whatsapp'

				const result = await MediaService.uploadFile(
					file,
					platform,
					userId || 'unknown',
					resolvedAppId,
				)

				return { data: result }
			} catch (err: unknown) {
				set.status = 500
				return {
					error:
						err instanceof Error ? err.message : 'Upload failed',
				}
			}
		},
		{
			body: t.Object({
				file: t.File(),
				platform: t.Optional(t.String()),
			}),
			response: {
				200: t.Object({ data: MediaModel.uploadResponse }),
				401: t.Object({ error: t.String() }),
				500: t.Object({ error: t.String() }),
			},
		},
	)
	.get(
		'/gallery',
		async ({ query, resolvedAppId, set }) => {
			if (!resolvedAppId) {
				set.status = 401
				return { error: 'Unauthorized' }
			}

			const files = await MediaService.listGallery(resolvedAppId, {
				type: query.type,
				take: query.take ? Number(query.take) : 30,
				cursor: query.cursor,
			})

			return { data: files }
		},
		{
			query: t.Object({
				type: t.Optional(t.String()),
				take: t.Optional(t.String()),
				cursor: t.Optional(t.String()),
			}),
			response: {
				200: t.Object({ data: t.Array(MediaModel.galleryItem) }),
				401: t.Object({ error: t.String() }),
			},
		},
	)

````
