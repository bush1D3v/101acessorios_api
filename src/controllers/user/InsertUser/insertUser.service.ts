import { Injectable } from "@nestjs/common";
import { GlobalUserRepositories } from "@/repositories";
import { GlobalUserProviders } from "@/providers";
import { BcryptManager } from "@/utils";
import { type InsertUserBody } from "./insertUser.body";

@Injectable()
export class InsertUserService {
  constructor(
    private readonly userRepositories: GlobalUserRepositories,
    private readonly userProviders: GlobalUserProviders,
    private readonly bcrypt: BcryptManager
  ) { }

  public async insertUser({
    name,
    email,
    password
  }: InsertUserBody) {
    await this.userProviders.verifyEmailUsage(email);

    const hashedPassword = await this.bcrypt.encryptPassword(password);

    await this.userRepositories.insertUser({
      name,
      email,
      password: hashedPassword
    });
  }
}
