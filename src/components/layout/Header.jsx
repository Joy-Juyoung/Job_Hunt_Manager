import { LogOut, Menu } from "lucide-react";
import React from "react";
import { useAuthStore } from "../../stores/useAuthStore";

export default function Header({ onToggleSidebar }) {
  const { user, loading, signIn, signOut } = useAuthStore();

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
          {loading ? (
            <span className="">Loading...</span>
          ) : user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL}
                alt=""
                className="w-7 h-7 rounded-full"
              />
              <span className="text-sm font-bold">{user.displayName}</span>
              {/* Fix later with dropdown */}
              <LogOut
                onClick={signOut}
                size={18}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
            </div>
          ) : (
            <button className="btn btn-primary" onClick={signIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
