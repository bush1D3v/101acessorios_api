import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { type OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import document from "../swagger.json";
import cors from "cors";

const PORT = process.env.PORT || 3001;

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  SwaggerModule.setup("", app, document as OpenAPIObject);

  await app.listen(PORT);
}
bootstrap();
