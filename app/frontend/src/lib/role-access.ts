export function extractNormalizedRole(candidate: any): string {
  const raw = candidate?.role || candidate?.user?.role || 'member'
  return String(raw).toUpperCase()
}

const ROLE_TREE: Record<string, string[]> = {
  SUPER_ADMIN: ['/dashboard','/inbox','/handover','/orders','/customers','/products','/broadcast','/workflow','/flows','/ai-agents','/ai','/knowledge','/settings','/apps','/channels','/developers','/team','/templates','/product-stock','/outbound','/pipeline','/metrics','/analytics','/help'],
  ADMIN: ['/dashboard','/inbox','/handover','/orders','/customers','/products','/broadcast','/workflow','/flows','/ai-agents','/ai','/knowledge','/settings','/apps','/channels','/developers','/team','/templates','/product-stock','/outbound','/pipeline','/metrics','/analytics','/help'],
  AGENT: ['/dashboard','/inbox','/handover','/orders','/customers','/products','/knowledge','/apps','/channels','/help'],
  MEMBER: ['/dashboard','/inbox','/help'],
}

export function getAllowedPrimaryPathsForRole(role: string) {
  return ROLE_TREE[role] ?? ROLE_TREE['MEMBER']
}

export function isPathAllowedForRole(pathname: string, role: string) {
  const prefix = pathname.split('/').slice(0,2).join('/') || pathname
  return getAllowedPrimaryPathsForRole(role).some((p) => pathname === p || pathname.startsWith(p + '/'))
}
