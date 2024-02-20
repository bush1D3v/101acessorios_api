import { Module } from "@nestjs/common";
import { InsertUserModule } from "@/controllers/user";

@Module({
  imports: [ InsertUserModule ],
  controllers: [],
  providers: []
})
export class AppModule { }
