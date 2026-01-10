import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { CORS_ORIGIN } from "./config/env.js";
const app = express();

// middlewares
app.use(express.json);
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))

// routes


export default app;
