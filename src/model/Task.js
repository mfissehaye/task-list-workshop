export default class Task {
  constructor(
    id,
    title,
    description,
    duration,
    deadline,
    assignee,
    assignor,
    status
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.deadline = deadline;
    this.assignee = assignee;
    this.assignor = assignor;
    this.status = status;
  }
}
