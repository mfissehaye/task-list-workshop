import { useState } from "react";
import store from "../store";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const params = useParams();
  const storedTask = store.tasks.find((t) => t.id == params.taskId);
  const [task, setTask] = useState(storedTask);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // we are going to use task here to update store.tasks
    // for (let i = 0; i < store.tasks.length; i++) {
    //   if (store[i].id === params.taskId) {
    //     store.tasks[i] = task;
    //   }
    // }

    store.tasks = store.tasks.map((t) => {
      if (t.id == params.taskId) return task;
      return t;
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div>
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            placeholder="Duration"
            value={task.duration}
            onChange={(e) => setTask({ ...task, duration: e.target.value })}
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Deadline"
            value={task.deadline}
            onChange={(e) => setTask({ ...task, deadline: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Assignee"
            value={task.assignee}
            onChange={(e) => setTask({ ...task, assignee: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Assignor"
            value={task.assignor}
            onChange={(e) => setTask({ ...task, assignor: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Status"
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
          />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
