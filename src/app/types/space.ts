import IUser from "./user";
import IEvent from "./event";
import IInvited from "./invited";

export default interface ISpace {
  _id: string;
  adminEmail: string;
  spaceName: string;
  invitedList: IInvited[];
  users: IUser[];
  events: IEvent[];
};
