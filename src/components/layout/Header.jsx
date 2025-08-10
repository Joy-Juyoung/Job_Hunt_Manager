import { Menu } from "lucide-react";
import React from "react";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="header border-b bg-white/80 backdrop-blur">
      <div className="container h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="inline-flex md:hidden cursor-pointer"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu size={18} />
          </button>
          <span className="text-lg font-semibold tracking-tight">
            Job Hunt Dashboard
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
}
