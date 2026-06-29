# Backend Source Reference - src/lib/prisma.ts

Original source path: `apps/backend/src/lib/prisma.ts`
Line count: 28
SHA-256: `57f83b5c60208b506af0279f1c0ab11113dc73cadd4405f9e3c71fca32a759cb`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { PrismaClient } from '../generated/prisma'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({
	adapter,
	log:
		process.env.NODE_ENV === 'development'
			? ['query', 'error', 'warn']
			: ['error'],
})

process.on('SIGINT', async () => {
	await prisma.$disconnect()
	process.exit(0)
})

process.on('SIGTERM', async () => {
	await prisma.$disconnect()
	process.exit(0)
})
export default prisma

````
