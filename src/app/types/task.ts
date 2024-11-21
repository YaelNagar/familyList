import IUser from "./user";

export default interface ITask {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  user: IUser;
}

