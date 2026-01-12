import { z } from "zod";
import { registerSchema } from "../validation/signupSchema.js";
import type { RequestHandler } from "express";
import { ApiError } from "../utils/ApiError.js";
import type { RegisterInput } from "../validation/signupSchema.js";
import { UserModel } from "../models/user.model.js";
export const registerUser: RequestHandler<{}, any, RegisterInput> = async (
  req,
  res
) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(401, "Email is required");
  }
  if (!password) {
    throw new ApiError(400, "Password field should not be empty");
  }

  const user = await UserModel.create({email , password })

  if (!user) {
    throw new ApiError(400 , "Database Error user not created")
  }

  
};
