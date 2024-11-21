import Task from "./task";
import Massage from "./message";

export default interface Event {
  _id:string;
  name: string;
  date: Date;
  tasks: Task[];
  messages: Massage[];
}