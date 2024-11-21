import mongoose, { Model, Schema } from "mongoose";
import ISpace from "@/app/types/space";
import {InvitedSchema} from "@/app/types/invited";
import {UserSchema} from "@/app/types/user";
import {EventSchema} from "@/app/types/event";

const SpaceSchema: Schema<ISpace> = new Schema({
    adminEmail: { type: String, required: true, },
    spaceName: { type: String, required: true },
    invitedList: { type: [InvitedSchema], required: true },
    users: { type: [UserSchema], required: true },
    events: { type: [EventSchema], required: true },
});

const Space: Model<ISpace> = mongoose.models.Space || mongoose.model<ISpace>('Space', SpaceSchema);

export default Space;