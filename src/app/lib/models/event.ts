import mongoose, { Schema, Model } from "mongoose";
import Task from "./task";
import Message from "./message"
import IEvent from "@/app/types/event";

export const EventSchema: Schema<IEvent> = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    tasks: { type: [Task], required: true },
    messages: { type: [Message], required: true },
    address: {type: String, required: true},
});

const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
