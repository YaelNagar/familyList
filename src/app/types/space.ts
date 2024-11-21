import User from "./user";
import Event from "./event";
import Invited from "./invited";

export default interface ISpace {
  _id: string;
  adminEmail: string;
  spaceName: string;
  invitedList: Invited[];
  users: User[];
  events: Event[];
}
