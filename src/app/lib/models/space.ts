import mongoose, { Model, Schema } from "mongoose";
import ISpace from "@/app/types/space";
import Invited from "./invited";
import User from "./user";
import Event from "./event";

const SpaceSchema: Schema<ISpace> = new Schema({
    adminEmail: { type: String, required: true, },
    spaceName: { type: String, required: true },
    invitedList: { type: [Invited], required: true },
    users: { type: [User], required: true },
    events: { type: [Event], required: true },
});

const Space: Model<ISpace> = mongoose.models.Space || mongoose.model<ISpace>('Space', SpaceSchema);

export default Space;