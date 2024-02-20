import { type InsertUserBody } from "@/controllers/user";

export abstract class GlobalUserRepositories {
  public abstract insertUser({
    name,
    email,
    password
  }: InsertUserBody): Promise<void>
}
