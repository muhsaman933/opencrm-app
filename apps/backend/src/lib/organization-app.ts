// Exact backend source reference placeholder for organization/app mapping.
export type OrganizationAppRecord = {
  organizationId: string
  appId: string
  slug?: string
}

export function resolveAppId(record?: OrganizationAppRecord | null) {
  return record?.appId ?? record?.organizationId ?? ''
}
