import dotenv from "dotenv";
import { envSchema } from "../validation/env.schema.js";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables");
  console.error(parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}


export const { PORT, NODE_ENV , MONGODB_URI , CORS_ORIGIN} = parsedEnv.data;
