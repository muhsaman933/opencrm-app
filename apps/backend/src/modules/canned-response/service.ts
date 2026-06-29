# Backend Source Reference - src/modules/canned-response/service.ts

Original source path: `apps/backend/src/modules/canned-response/service.ts`
Line count: 26
SHA-256: `89daa3d2ab08a816d7d609dc8ee887d947a1087d44d5bbef5d0ca1602d32fe94`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import prisma from '../../lib/prisma'

export abstract class CannedResponseService {
	static async getCannedResponses(accountId: string) {
		return prisma.canned_responses.findMany({
			where: { account_id: accountId },
			orderBy: { short_code: 'asc' },
		})
	}

	static async createCannedResponse(accountId: string, data: any) {
		return prisma.canned_responses.create({
			data: {
				...data,
				account_id: accountId,
			},
		})
	}

	static async deleteCannedResponse(id: string, accountId: string) {
		return prisma.canned_responses.delete({
			where: { id, account_id: accountId },
		})
	}
}

````
