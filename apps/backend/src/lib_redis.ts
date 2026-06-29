# Backend Source Reference - src/lib/redis.ts

Original source path: `apps/backend/src/lib/redis.ts`
Line count: 10
SHA-256: `34bb99339a640c09b6d0af9458ad4fabfd67ddc2fd498bc75c07a6ba2766c8bb`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import Redis from 'ioredis'

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'

export const redis = new Redis(redisUrl, {
	maxRetriesPerRequest: null, // Required for BullMQ
})

export default redis

````
