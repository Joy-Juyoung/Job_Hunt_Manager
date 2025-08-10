import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/applications", label: "Applications" },
  { to: "/calendar", label: "Calendar" },
  { to: "/stats", label: "Stats" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar({ open, onClose }) {
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
        className={`z-50 md:z-auto fixed md:static top-[56px] md:top-0
                    /* ↓ 헤더를 뺀 높이로 고정 */
                    h-[calc(100vh-56px)] md:h-auto
                    w-64 shrink-0 bg-white border-r
                    transition-transform duration-200
                    ${
                      open
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }`}
      >
        <nav className="p-3 space-y-1">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm transition
                  ${
                    isActive
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
