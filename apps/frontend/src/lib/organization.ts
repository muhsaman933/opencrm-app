import type { AppContextType } from '@/routes/_app'

export type OrganizationContext = {
  authenticated: boolean
  organization: { appId?: string; slug?: string } | null
  onboardingRequired: boolean
  headers: HeadersInit
}

export async function syncOrganizationContextFromSession(): Promise<OrganizationContext> {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('scalechat_token') : null
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_URL
    ? (import.meta as any).env.VITE_API_URL
    : 'http://localhost:3010'

  if (!token) {
    return { authenticated: false, organization: null, onboardingRequired: false, headers: {} }
  }
  try {
    const response = await fetch(`${baseUrl}/auth/organization/session`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      credentials: 'include',
    })
    if (!response.ok) {
      return { authenticated: false, organization: null, onboardingRequired: true, headers: {} }
    }
    const data = await response.json()
    return {
      authenticated: !!data.authenticated,
      organization: data.organization ?? null,
      onboardingRequired: !!data.onboardingRequired,
      headers: { 'x-app-id': data.organization?.appId ?? '', 'x-org-slug': data.organization?.slug ?? '' },
    }
  } catch {
    return { authenticated: false, organization: null, onboardingRequired: true, headers: {} }
  }
}

export async function completeOrganizationOnboarding(payload: { companyName: string; slug: string }) {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('scalechat_token') : null
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_URL
    ? (import.meta as any).env.VITE_API_URL
    : 'http://localhost:3010'
  const response = await fetch(`${baseUrl}/auth/organization/onboarding`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Organization onboarding failed')
  return response.json()
}
