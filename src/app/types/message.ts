import {User, UserSchema} from "./user";
import { Schema } from "mongoose";

export interface Message {
  _id: string;
  date: Date;
  user: User;
  content: string;
}

export const messageSchema: Schema<Message> = new Schema({
  date: { type: Date, required: true },
  user: { type: UserSchema, required: true },
  content: { type: String, required: true }
});