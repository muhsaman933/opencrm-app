import { Elysia } from 'elysia'

export const authContextRoute = new Elysia().get('/auth/context', () => ({
  authenticated: false,
  organization: null,
  onboardingRequired: true,
}))
