import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/database/prisma.service";
import { BcryptManager } from "@/utils";
import { InsertUserController } from "./insertUser.controller";
import { InsertUserService } from "./insertUser.service";
import { GlobalUserRepositories } from "@/repositories";
import { GlobalUserPrismaRepositories } from "@/repositories/prisma";
import { GlobalUserProviders } from "@/providers";
import { GlobalUserPrismaProviders } from "@/providers/prisma";
import {
  validUserTestEmail,
  validUserTestName,
  validUserTestPassword,
  invalidUserTestEmail,
  invalidMinLengthTestEmail,
  invalidMaxLengthUserTestEmail,
  invalidMaxLengthUserTestName,
  invalidMaxLengthUserTestPassword,
} from "!/models";

interface InsertUserTestBody {
  name: string | undefined | null;
  email: string | undefined | null;
  password: string | undefined | null;
}

let user: InsertUserTestBody;
let prisma: PrismaService;

describe("insertUser.controller", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
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
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.user.deleteMany();
  });

  beforeEach(() => {
    user = {
      name: validUserTestName,
      email: validUserTestEmail,
      password: validUserTestPassword
    };
  });

  afterAll(async () => {
    await app.close();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("/POST user - Request Successfully", () => {
    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .expect(201);
  });

  it("/POST user - Email already in use", () => {
    request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .expect(201)
      .expect({
        message: "Usuário criado com sucesso!",
      });

    request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .expect(409)
      .expect({
        message: "Este email já está sendo utilizado em outra conta.",
      });
  });

  it("/POST user - Name is required", () => {
    user.name = undefined;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'nome' é requirido.");
      });
  });

  it("/POST user - Email is required", () => {
    user.email = undefined;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'email' é requirido.");
      });
  });

  it("/POST user - Password is required", () => {
    user.password = undefined;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'senha' é requirido.");
      });
  });

  it("/POST user - Name is typeof string", () => {
    user.name = null;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'nome' deve ser textual.");
      });
  });

  it("/POST user - Email is typeof string", () => {
    user.email = null;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'email' deve ser textual.");
      });
  });

  it("/POST user - Password is typeof string", () => {
    user.password = null;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'senha' deve ser textual.");
      });
  });

  it("/POST user - Invalid Email", () => {
    user.email = invalidUserTestEmail;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'email' deve ser um email válido.");
      });
  });

  it("/POST user - Min Length of Name is 15", () => {
    user.name = "";

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'nome' deve ter pelo menos 15 caracteres.");
      });
  });

  it("/POST user - Min Length of Email is 15", () => {
    user.email = invalidMinLengthTestEmail;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'email' deve ter pelo menos 15 caracteres.");
      });
  });

  it("/POST user - Min Length of Password is 8", () => {
    user.password = "";

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'senha' deve ter pelo menos 8 caracteres.");
      });
  });

  it("/POST user - Max Length of Name is 75", () => {
    user.name = invalidMaxLengthUserTestName;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'nome' deve ter no máximo 75 caracteres.");
      });
  });

  it("/POST user - Max Length of Email is 75", () => {
    user.email = invalidMaxLengthUserTestEmail;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'email' deve ter no máximo 75 caracteres.");
      });
  });

  it("/POST user - Max Length of Password is 16", () => {
    user.password = invalidMaxLengthUserTestPassword;

    return request.agent(app.getHttpServer())
      .post("/user")
      .send(user)
      .then((result) => {
        expect(result.statusCode).toBe(400);
        expect(result.body.errors[ 0 ].message).toBe("O campo 'senha' deve ter no máximo 16 caracteres.");
      });
  });
});
