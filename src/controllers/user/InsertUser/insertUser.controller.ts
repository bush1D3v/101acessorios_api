import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes
} from "@nestjs/common";
import { ZodValidationPipe } from "nestjs-zod";
import { handleError } from "@/error";
import { type Response } from "express";
import { type InsertUserBody } from "./insertUser.body";
import { InsertUserService } from "./insertUser.service";
import { InsertUserSchema } from "./insertUser.schema";

@UsePipes(new ZodValidationPipe(InsertUserSchema))
@Controller()
export class InsertUserController {
  constructor(private readonly service: InsertUserService) { }

  @Post("user")
  async insertUser(@Body() body: InsertUserBody, @Res() res: Response) {
    try {
      const { email, name, password } = body;

      await this.service.insertUser({ name, email, password });

      return res.status(201).send({
        "message": "Usuário criado com sucesso!"
      });
    } catch (error: unknown) {
      handleError(res, error);
    }
  }
}
