// Exact backend source reference placeholder for access control.
export type ChannelAccessRule = {
  channelType: string
  allowedRoles: string[]
}

export function filterChannelsForRole(role: string, channels: ChannelAccessRule[]) {
  const allowed = channels.filter((rule) => rule.allowedRoles.includes(role))
  return allowed.map((item) => item.channelType)
}
