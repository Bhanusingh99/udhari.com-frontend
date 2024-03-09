import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  token: string;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  token: {
    type: String,
    default: "",
  },
});

export const User = model<IUser>("user", userSchema);
