import { Schema } from "mongoose";
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  image: string;
}

export const UserSchema: Schema<User> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  image: { type: String, required: true },
});