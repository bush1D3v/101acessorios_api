import z from "zod";
import { InsertUserSchema } from "./insertUser.schema";

export type InsertUserBody = z.infer<typeof InsertUserSchema>;
