import mongoose, {Schema, Model } from "mongoose";
import IUser from "@/app/types/user";

export const UserSchema: Schema<IUser> = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date, required: true },
    image: { type: String, required: true },
  });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;


  