// Exact backend source reference placeholder for seed helpers.
export function stableId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}
