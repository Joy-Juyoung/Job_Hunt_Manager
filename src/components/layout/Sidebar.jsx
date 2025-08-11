import {
  Menu,
  LayoutDashboard,
  FileText,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/applications", label: "Applications", icon: FileText },
  { to: "/calendar", label: "Calendar", icon: Calendar },
  { to: "/stats", label: "Stats", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose, onToggleSidebar }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden ${
          open ? "" : "hidden"
        }`}
        onClick={onClose}
      />
      <aside
        className={`z-50 md:z-auto fixed md:static top-0
                    h-[calc(100vh)] md:h-auto md:top-[56px] 
                    w-48 shrink-0 bg-white md:py-6
                    transition-transform duration-200
                    ${
                      open
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }`}
      >
        <div className="md:hidden h-[56px] pl-6 flex items-center gap-2">
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

        <nav className="px-4 space-y-2">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
                  ${
                    isActive
                      ? "bg-secondary font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
