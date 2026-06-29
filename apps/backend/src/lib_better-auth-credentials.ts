# Backend Source Reference - src/lib/better-auth-credentials.ts

Original source path: `apps/backend/src/lib/better-auth-credentials.ts`
Line count: 56
SHA-256: `f209f3dd5cb8afb6bd2c3bd7cdec42d47044fcd0ade8263e58a5ec4002d7e9c2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { hashPassword } from 'better-auth/crypto'
import type { Prisma } from '../generated/prisma'

type TxClient = Prisma.TransactionClient

type SyncCredentialParams = {
	userId: string
	password: string
}

/**
 * Keep Better Auth credential account in sync for users created/updated
 * outside Better Auth endpoints.
 */
export async function syncBetterAuthCredentialAccount(
	tx: TxClient,
	params: SyncCredentialParams,
) {
	const { userId, password } = params
	if (!password) return

	const hashedPassword = await hashPassword(password)
	const existingCredentialAccount = await tx.account.findFirst({
		where: {
			userId,
			providerId: 'credential',
		},
		select: {
			id: true,
			accountId: true,
		},
	})

	if (existingCredentialAccount) {
		await tx.account.update({
			where: { id: existingCredentialAccount.id },
			data: {
				password: hashedPassword,
				accountId: existingCredentialAccount.accountId || userId,
				updatedAt: new Date(),
			},
		})
		return
	}

	await tx.account.create({
		data: {
			id: crypto.randomUUID(),
			userId,
			providerId: 'credential',
			accountId: userId,
			password: hashedPassword,
		},
	})
}

````
