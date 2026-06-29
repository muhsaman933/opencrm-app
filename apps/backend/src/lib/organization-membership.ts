// Exact backend source reference placeholder for membership checks.
export type MembershipRecord = {
  organizationId: string
  userId: string
  role: string
}

export function isMembershipActive(membership: MembershipRecord | null | undefined) {
  return !!membership && membership.role !== 'none'
}
