import { Redis } from "ioredis";
import { promisify } from "util";

export const redisClient: Redis = new Redis(6379);

export function getRedis(value: string): Promise<string | null | undefined> {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
}

export function setRedis(key: string, value: string): Promise<unknown> {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  return syncRedisSet(key, value);
}
