import { Schema } from "mongoose";

export interface Invited {
  _id: string;
  email: string;
}

export const InvitedSchema = new Schema({
  email: { type: String, required: true },
});
