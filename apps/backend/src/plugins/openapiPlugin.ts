import { Elysia } from 'elysia'

export const openapiPlugin = new Elysia({ name: 'openapiPlugin' })
	.get('/docs', () => 'OpenAPI docs placeholder')
