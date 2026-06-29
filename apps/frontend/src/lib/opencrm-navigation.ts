export const OPEN_CRM_PREFIXES = [
  '/dashboard',
  '/inbox',
  '/handover',
  '/orders',
  '/customers',
  '/products',
  '/broadcast',
  '/workflow',
  '/flows',
  '/ai-agents',
  '/ai',
  '/knowledge',
  '/settings',
  '/apps',
  '/channels',
  '/developers',
  '/team',
  '/templates',
  '/product-stock',
  '/outbound',
  '/pipeline',
  '/metrics',
  '/analytics',
  '/help',
] as const

export function normalizeOpenCrmPath(pathname: string) {
  if (pathname.startsWith('/customers/')) return '/customers'
  if (pathname.startsWith('/ai-agents/')) return '/ai-agents'
  if (pathname.startsWith('/flows/')) return '/flows'
  if (pathname.startsWith('/apps/')) return '/apps'
  if (pathname.startsWith('/channels/')) return '/channels'
  if (pathname.startsWith('/developers/')) return '/developers'
  if (pathname.startsWith('/invoice/')) return '/invoice'
  return pathname
}

export function isOpenCrmAllowedPath(pathname: string) {
  if (pathname === '/' || pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/onboarding') || pathname.startsWith('/terms') || pathname.startsWith('/privacy') || pathname.startsWith('/payment')) {
    return false
  }
  return OPEN_CRM_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix + '/'))
}
