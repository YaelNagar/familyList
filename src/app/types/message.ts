import User from "./user";

export default interface Message {
  _id: string;
  date: Date;
  user: User;
  content: string;
}
