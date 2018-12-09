export class Topic {
  title:string;
  description:string;
  priority:number;

  constructor(title:string, desc:string, pty:number) {
    this.title = title;
    this.description = desc;
    this.priority = pty;
  }
}