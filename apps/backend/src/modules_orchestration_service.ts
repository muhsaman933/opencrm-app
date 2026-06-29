# Backend Source Reference - src/modules/orchestration/service.ts

Original source path: `apps/backend/src/modules/orchestration/service.ts`
Line count: 84
SHA-256: `f64e331fa89c80ba61c04b726ab684755a79db23138e9e91efe3ba2294ae3524`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import prisma from '../../lib/prisma'
import { BusinessWebhookDispatchService } from '../business-webhooks/dispatch-service'

export abstract class OrchestrationService {
	static async getHandoffs(conversationId: string) {
		return prisma.assignment_history.findMany({
			where: { conversation_id: conversationId },
			orderBy: { created_at: 'desc' },
			take: 50,
		})
	}

	static async executeHandoff(
		conversationId: string,
		fromAgentId: string | undefined,
		toAgentId: string,
		reason: string,
	) {
		const result = await prisma.$transaction(async (tx) => {
			// 1. Update conversation assignment
			const updatedConversation = await tx.conversations.update({
				where: { id: conversationId },
				data: {
					assignee_id: toAgentId,
					updated_at: new Date(),
				},
				select: {
					id: true,
					app_id: true,
					inbox_id: true,
				},
			})

			// 2. Log handoff in assignment history
			const assignmentHistory = await tx.assignment_history.create({
				data: {
					conversation_id: conversationId,
					assigned_from: fromAgentId,
					assigned_to: toAgentId,
					assignment_type: 'manual',
				},
			})

			return {
				updatedConversation,
				assignmentHistory,
			}
		})

		if (result.updatedConversation.app_id) {
			void BusinessWebhookDispatchService.dispatch({
				event: 'conversation.handled_by_updated',
				appId: result.updatedConversation.app_id,
				inboxId: result.updatedConversation.inbox_id,
				payload: {
					conversation_id: conversationId,
					previous_assignee_id: fromAgentId || null,
					current_assignee_id: toAgentId,
					assignment_type: 'handoff',
					reason,
				},
			})
		}

		return result.assignmentHistory
	}

	static async getAvailableAgents(appId: string) {
		// This would typically involve checking agent availability and chatbot status
		// For now, return bots as agents
		const bots = await prisma.chatbots.findMany({
			where: { app_id: appId, is_deleted: false },
			select: { id: true, name: true, model: true },
		})

		return bots.map((bot) => ({
			id: bot.id,
			name: bot.name,
			type: 'chatbot',
			currentLoad: 'available',
		}))
	}
}

````
