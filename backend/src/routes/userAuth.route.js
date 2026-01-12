import Router from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { registerUser } from "../controllers/userAuth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validation/signupSchema.js";
const router = Router();

router
  .route("/sign-up")
  .post(validate(registerSchema), asyncHandler(registerUser));
export default router;
