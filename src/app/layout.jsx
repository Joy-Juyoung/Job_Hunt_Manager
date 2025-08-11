import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <Header onToggleSidebar={() => setOpen((v) => !v)} />
      <div className="flex min-h-[calc(100vh-56px)]">
        <Sidebar
          open={open}
          onClose={() => setOpen(false)}
          onToggleSidebar={() => setOpen((v) => !v)}
        />
        <main className="flex-1 py-6 md:py-8 overflow-y-auto">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
