# Backend Source Reference - src/lib/queue.ts

Original source path: `apps/backend/src/lib/queue.ts`
Line count: 50
SHA-256: `02575707582b827bf74d526a047e6d05ba838680326318c50a26a009cacce159`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { Queue } from 'bullmq'
import { redis } from './redis'

// Define queues
export const incomingMessageQueue = new Queue('incoming-messages', {
	connection: redis,
})

export const outboundMessageQueue = new Queue('outbound-messages', {
	connection: redis,
})

export const aiProcessingQueue = new Queue('ai-processing', {
	connection: redis,
})

export const webhookQueue = new Queue('webhooks', {
	connection: redis,
})

export const maintenanceQueue = new Queue('maintenance', {
	connection: redis,
})

export const cronQueue = new Queue('cron-jobs', {
	connection: redis,
})

export const conversationBulkQueue = new Queue('conversation-bulk', {
	connection: redis,
})

// Helper to add jobs
export const addJob = async (queueName: string, data: any, opts = {}) => {
	const queues: Record<string, Queue> = {
		incoming: incomingMessageQueue,
		outbound: outboundMessageQueue,
		ai: aiProcessingQueue,
		webhook: webhookQueue,
		maintenance: maintenanceQueue,
		cron: cronQueue,
		conversationBulk: conversationBulkQueue,
	}

	const queue = queues[queueName]
	if (!queue) throw new Error(`Queue ${queueName} not found`)

	return queue.add(queueName, data, opts)
}

````
