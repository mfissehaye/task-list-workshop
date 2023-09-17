import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskDetail from "./components/TaskDetail";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: "/", element: <Home /> }, // /
      { path: "/tasks", element: <TaskList /> }, // tasks
      { path: "/add-task", element: <AddTask /> }, // /add-task
      { path: "/edit-task/:taskId", element: <EditTask /> }, // /edit-task/1
      { path: "/tasks/:taskId", element: <TaskDetail /> }, // tasks/1, tasks/20, tasks/uuid-text
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
