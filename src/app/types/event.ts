import Task from "./task";
import Massage from "./massage";

export default interface Event {
  _id:string;
  name: string;
  date: Date;
  tasks: Task[];
  massages: Massage[];
}