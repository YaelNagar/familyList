import mongoose, {Schema, Model } from "mongoose";
import User from "./user";
import ITask from "@/app/types/task";

export const TaskSchema: Schema<ITask> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: true },
    user: { type: User, required: true },
  });
  
const Task: Model<ITask> = mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);

export default Task;
