import { Menu } from "lucide-react";
import React from "react";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="header bg-white/80 backdrop-blur">
      <div className="w-full h-full flex items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex md:hidden cursor-pointer"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center">
            <img src="/favicon.ico" alt="Logo" className="w-7 mr-1" />
            <span className="text-lg font-semibold tracking-tight">
              JobHunt
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
}
