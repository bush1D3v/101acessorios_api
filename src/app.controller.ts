import { Controller, Get, Res } from "@nestjs/common";
import { type Response } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly service: AppService) { }

  @Get("ping")
  public Pong(@Res() res: Response) {
    return res.send(this.service.Pong());
  }
}
