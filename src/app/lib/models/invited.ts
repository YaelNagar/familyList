import mongoose, {Schema, Model } from "mongoose";
import IInvited from "@/app/types/invited";


export const InvitedSchema: Schema<IInvited> = new Schema({
    email: { type: String, required: true },
  });

const Invited: Model<IInvited> = mongoose.models.Invited || mongoose.model<IInvited>('Invited', InvitedSchema);

export default Invited;

  