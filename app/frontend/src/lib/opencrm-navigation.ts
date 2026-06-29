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
  return pathname
}

export function isOpenCrmAllowedPath(pathname: string) {
  if (['/','/login','/register','/onboarding','/terms','/privacy','/payment/success'].includes(pathname)) return false
  return OPEN_CRM_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix + '/'))
}
