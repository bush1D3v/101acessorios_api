import { Redis } from "ioredis";
import { promisify } from "util";

export class RedisConfig {
  private readonly redisClient: Redis = new Redis(6379);

  public async setRedis(key: string, value: string): Promise<unknown> {
    const syncRedisSet = promisify(this.redisClient.set).bind(this.redisClient);

    return syncRedisSet(key, value);
  }

  public async getRedis(value: string): Promise<string | null | undefined> {
    const syncRedisGet = promisify(this.redisClient.get).bind(this.redisClient);

    return syncRedisGet(value);
  }
}
