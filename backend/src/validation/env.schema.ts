import {z} from "zod"

export const envSchema = z.object({
    NODE_ENV : z.enum(["development" , "production" , "test"]).default("development"),
    PORT : z.coerce.number().int().positive(),
    MONGODB_URI : z.string().min(1 , "MONGODB URI is missing"),
    CORS_ORIGIN : z.string().min(1 , "cors origin is missing")
})
