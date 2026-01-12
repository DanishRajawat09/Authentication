import type { RequestHandler } from "express";
import { UserModel } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import type { RegisterInput } from "../validation/signupSchema.js";

export const registerUser: RequestHandler<{}, any, RegisterInput> = async (
  req,
  res
) => {
  const { email, password } = req.body;

  // 1️⃣ Check for existing unverified account
  const unverifiedUser = await UserModel.findOne({
    email,
    isVerified: false,
  });

  if (unverifiedUser) {
    return res.status(200).json(
      new ApiResponse(
        200,
        "Account already exists but is not verified. Please verify your email to continue."
      )
    );
  }

  // 2️⃣ Check for existing verified account
  const existingUser = await UserModel.findOne({
    email,
    isVerified: true,
  });

  if (existingUser) {
    throw new ApiError(
      409,
      "An account with this email already exists."
    );
  }

  // 3️⃣ Create new user
  const user = await UserModel.create({
    email,
    password,
  });

  if (!user) {
    throw new ApiError(
      500,
      "Failed to create account. Please try again later."
    );
  }

  // 4️⃣ Success response
  return res.status(201).json(
    new ApiResponse(
      201,
      "Account created successfully. Please verify your email to activate your account."
    )
  );
};
