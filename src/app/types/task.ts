import User from "./user";

export default interface Task {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  user: User;
}
