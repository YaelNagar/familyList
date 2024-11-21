import IUser from "./user";

export default interface IMessage {
  _id: string;
  date: Date;
  user: IUser;
  content: string;
}

