import { Link } from "react-router-dom";
import store from "../store";

export default function TaskList() {
  // this will only rerender when there is state change
  // even if there is change in the store.js file
  // it wouldn't care
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {store.tasks.map((task) => (
          <div key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </div>
        ))}
      </div>

      {/* <ul>
        <li><a key="" href="#">First Task</a></li>
        <li><a key="" href="#">Second Task</a></li>
      </ul> */}
    </div>
  );
}
