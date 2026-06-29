type Role = 'admin' | 'agent' | 'member'

const PATHS_BY_ROLE: Record<Role, string[]> = {
  admin: ['/dashboard', '/inbox', '/handover', '/orders', '/customers', '/products', '/broadcast', '/workflow', '/flows', '/ai-agents', '/ai', '/knowledge', '/settings', '/apps', '/channels', '/developers', '/team', '/templates', '/product-stock', '/outbound', '/pipeline', '/metrics', '/analytics', '/help'],
  agent: ['/dashboard', '/inbox', '/handover', '/orders', '/customers', '/products', '/knowledge', '/apps', '/channels', '/help'],
  member: ['/dashboard', '/inbox', '/help'],
}

const ROLE_ALIASES: Record<string, Role> = {
  SUPER_ADMIN: 'admin',
  ADMIN: 'admin',
  AGENT: 'agent',
  MEMBER: 'member',
}

export function extractNormalizedRole(candidate: any): Role {
  const raw = candidate?.role || candidate?.user?.role || candidate?.organizationRole || 'member'
  return ROLE_ALIASES[String(raw).toUpperCase()] || 'member'
}

export function getAllowedPrimaryPathsForRole(role: Role) {
  return PATHS_BY_ROLE[role]
}

export function isPathAllowedForRole(pathname: string, role: Role) {
  const base = pathname.split('/').slice(0, 2).join('/') || pathname
  if (base === '/') return true
  const allowed = getAllowedPrimaryPathsForRole(role)
  return allowed.some((item) => pathname === item || pathname.startsWith(item + '/'))
}
