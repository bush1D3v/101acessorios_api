import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { InsertUserModule } from "@/controllers/user";

@Module({
  imports: [ InsertUserModule ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule { }
