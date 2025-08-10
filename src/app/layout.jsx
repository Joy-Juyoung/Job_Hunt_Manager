import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <header className="">
        <div className="font-semibold">Job Hunt Dashboard</div>
      </header>

      <main className="row-start-2 p-6">
        <Outlet />
      </main>
    </div>
  );
}
