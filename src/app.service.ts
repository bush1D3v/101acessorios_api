import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  public Pong(): string {
    return "Pong";
  }
}
