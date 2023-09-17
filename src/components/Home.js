import { Link } from "react-router-dom";
import TaskList from "./TaskList";

export default function Home({ tasks }) {
  return (
    <div>
      <h1>Task List</h1>
      <div>
        <Link to="/add-task">Create New Task</Link>
      </div>
      <br />
      <TaskList tasks={tasks} />
    </div>
  );
}
