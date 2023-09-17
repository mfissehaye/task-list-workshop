import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div>Task List</div>
        <div>User Information</div>
      </div>

      <Outlet />
    </div>
  );
}
