# Backend Source Reference - src/types/pg.d.ts

Original source path: `apps/backend/src/types/pg.d.ts`
Line count: 11
SHA-256: `a78aa61417b81b4750617dbb517904510b33d911e0834e99ce786736c0b98472`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
declare module 'pg' {
	export type PoolConfig = {
		connectionString?: string
	}

	export class Pool {
		constructor(config?: PoolConfig)
		end(): Promise<void>
	}
}

````
