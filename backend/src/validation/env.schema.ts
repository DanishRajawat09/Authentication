import { z } from "zod";
import parseDuration from "../utils/parseDuration.js";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().int().positive(),
  MONGODB_URI: z.string().min(1, "MONGODB URI is missing"),
  CORS_ORIGIN: z.string().min(1, "cors origin is missing"),
  ACCESS_TOKEN_SECRET: z.string().min(1, "Access token secret is missing"),
  ACCESS_TOKEN_EXPIRY: z.string().transform(parseDuration),
  REFRESH_TOKEN_SECRET: z.string().min(1, "Refresh token secret is missing"),
  REFRESH_TOKEN_EXPIRY: z.string().transform(parseDuration),
});
