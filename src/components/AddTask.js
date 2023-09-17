import { useState } from "react";
import store from "../store";
import Task from "../model/Task";
import { useNavigate } from "react-router-dom";
export default function AddTask() {
  const [task, setTask] = useState(new Task("", "", "", "", "", "", "", ""));
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    store.tasks.push({ ...task, id: store.tasks.length });
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
          <input type="submit" value="Add Task" />
        </div>
      </form>
    </div>
  );
}
