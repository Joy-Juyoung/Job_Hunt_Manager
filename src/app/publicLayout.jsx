import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <header className="header bg-white/80 backdrop-blur border-b">
        <div className="h-full w-full px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.ico" className="w-7" alt="logo" />
            <span className="text-lg font-semibold">JobHunt</span>
          </Link>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </header>

      <main className="py-8">
        <div className="px-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
