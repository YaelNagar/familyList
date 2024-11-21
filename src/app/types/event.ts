import {Task, taskSchema} from "./task";
import {Message, messageSchema} from "./message";
import { Schema } from "mongoose";
export default interface Event {
  _id: string;
  name: string;
  date: Date;
  tasks: Task[];
  messages: Message[];
}

export const EventSchema: Schema<Event> = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  tasks: { type: [taskSchema], required: true },
  messages: { type: [messageSchema], required: true },
});