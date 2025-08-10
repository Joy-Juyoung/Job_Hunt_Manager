import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
