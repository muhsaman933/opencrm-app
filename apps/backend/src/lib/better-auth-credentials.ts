// Exact backend source reference placeholder for credential handling.
export type BetterAuthCredentials = {
  email: string
  password: string
}

export function normalizeCredentials(credentials: BetterAuthCredentials) {
  return {
    email: credentials.email.trim().toLowerCase(),
    password: credentials.password,
  }
}
