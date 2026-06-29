// Exact backend source reference placeholder for Redis client.
import { Redis } from 'ioredis'

export const redis = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379')

export async function pingRedis() {
  return redis.ping()
}
