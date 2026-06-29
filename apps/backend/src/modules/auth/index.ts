import { Elysia } from 'elysia'

export const authRoutes = new Elysia().get('/sign-in/email', async () => ({ ok: false, error: 'auth stub' }))
