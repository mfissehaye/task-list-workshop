import { Link, useParams } from "react-router-dom";
import store from "../store";

export default function TaskDetail() {
  const params = useParams();
  const task = store.tasks.find((t) => t.id == params.taskId);
  if (!task)
    return (
      <p>
        Task does not exist. <Link to="/">Home</Link>
      </p>
    );
  return (
    <div>
      <Link to="/">Back to List</Link>
      <h1>
        Task Detail for
        <br />
        {task.title}
      </h1>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Duration: {task.duration}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Assignor: {task.assignor}</p>
      <p>Status: {task.status}</p>

      <div>
        <Link to={"/edit-task/" + task.id}>Edit</Link>
      </div>
    </div>
  );
}
