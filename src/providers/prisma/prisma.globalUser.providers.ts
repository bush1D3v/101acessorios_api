import { PrismaService } from "@/database/prisma.service";
import { HttpStatusError } from "@/error";
import { GlobalUserProviders } from "@/providers/index";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GlobalUserPrismaProviders implements GlobalUserProviders {
  constructor(private readonly prisma: PrismaService) { }

  async verifyEmailUsage(email: string): Promise<void> {
    const emailObj = await this.prisma.user.findUnique({
      where: {
        email
      },
      select: {
        email: true
      }
    });

    if (emailObj) {
      throw new HttpStatusError("Este e-mail já está sendo utilizado em outra conta.", 409);
    }
  }
}
