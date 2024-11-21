import { User, UserSchema } from "./user";
import { Schema } from "mongoose";

export interface Task {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  user: User;
}

export const taskSchema: Schema<Task> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, required: true },
  user: { type: UserSchema, required: true },
});
