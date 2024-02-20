import { hash, compare } from "bcrypt";
import { PrismaService } from "@/database/prisma.service";
import { HttpStatusError } from "@/error";

export class BcryptManager {
  constructor(private prisma: PrismaService) { }

  public async encryptPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }

  private async getHashedPassword(email: string): Promise<string> {
    const passwordObj = await this.prisma.user.findUnique({
      where: {
        email
      },
      select: {
        password: true
      }
    });

    if (passwordObj) {
      return passwordObj.password;
    } else {
      throw new HttpStatusError("Usuário não encontrado.", 404);
    }
  }

  public async validatePassword(password: string, email: string): Promise<void> {
    const hashedPassword = await this.getHashedPassword(email);
    const isMatch = await compare(password, hashedPassword);

    if (!isMatch) {
      throw new HttpStatusError("Senha inválida.", 401);
    }
  }
}
