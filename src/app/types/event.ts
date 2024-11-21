import ITask from "./task";
import IMessage from "./message";

export default interface IEvent {
  _id: string;
  name: string;
  date: Date;
  tasks: ITask[];
  messages: IMessage[];
  address: string;
}

