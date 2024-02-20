import { Module } from "@nestjs/common";
import { PrismaService } from "@/database/prisma.service";
import { GlobalUserProviders } from "@/providers";
import { GlobalUserRepositories } from "@/repositories";
import { GlobalUserPrismaProviders } from "@/providers/prisma";
import { GlobalUserPrismaRepositories } from "@/repositories/prisma";
import { InsertUserController } from "./insertUser.controller";
import { InsertUserService } from "./insertUser.service";
import { BcryptManager } from "@/utils";

@Module({
  imports: [],
  controllers: [ InsertUserController ],
  providers: [
    PrismaService,
    InsertUserService,
    BcryptManager,
    {
      provide: GlobalUserRepositories,
      useClass: GlobalUserPrismaRepositories
    },
    {
      provide: GlobalUserProviders,
      useClass: GlobalUserPrismaProviders
    }
  ]
})
export class InsertUserModule { }
