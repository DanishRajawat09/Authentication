import mongoose, { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  avatar?: string;
  fullName?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please Provide a Valid Email Address",
      ],
      unique : true,
      index : true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select : false
    },
    fullName: {
      type: String,
      minlength: 3,
      trim: true,
    },
    avatar: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserModel =
  mongoose.models?.User || mongoose.model<IUser>("User", userSchema);
