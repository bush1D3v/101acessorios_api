import { Injectable } from "@nestjs/common";
import { GlobalUserRepositories } from "@/repositories";
import { PrismaService } from "@/database/prisma.service";
import { type InsertUserBody } from "@/controllers/user";

@Injectable()
export class GlobalUserPrismaRepositories implements GlobalUserRepositories {
  constructor(private prisma: PrismaService) { }

  async insertUser({
    name,
    email,
    password
  }: InsertUserBody): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });
  }
}
