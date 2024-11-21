import mongoose, { Schema, Model } from "mongoose";
import IMessage from "@/app/types/message";
import User from "./user"

export const MessageSchema: Schema<IMessage> = new Schema({
    date: { type: Date, required: true },
    user: { type: User, required: true },
    content: { type: String, required: true }
});

const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;
