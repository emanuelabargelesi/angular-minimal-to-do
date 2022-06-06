export class Todo {
  id: string;
  desc: string;
  date: Date;
  priority: number;
  completed: boolean;

  constructor(id:string, desc: string, priority: number) {
    this.id = id;
    this.desc = desc;
    this.date = new Date();
    this.priority = priority;
    this.completed = false;
  }
}