# Backend Source Reference - prisma.config.ts

Original source path: `apps/backend/prisma.config.ts`
Line count: 14
SHA-256: `3c232234e2be25c7ae39f5e6ba270114931f8f1fd91df0524056d6c0de6141e2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
	schema: 'prisma/schema.prisma',
	datasource: {
		url: env('DATABASE_URL'),
	},
	migrations: {
		path: 'prisma/migrations',
		seed: 'bun prisma/seed.ts',
	},
})

````
