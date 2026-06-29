// Exact backend source reference placeholder for Meta API integration.
export const META_BASE = 'https://graph.facebook.com/v18.0'

export function buildMetaHeaders(accessToken: string) {
  return {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  } as const
}
