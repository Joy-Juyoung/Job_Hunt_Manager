import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();

  // After login
  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  return (
    <section className="grid gap-6 md:grid-cols-2 items-center ">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          All your job activities in one place.{" "}
        </h1>
        <p className="text-gray-600">
          Manage applications, schedules, and statistics all in one view. Start
          right away.
        </p>
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-primary">
            Start for Free
          </Link>
        </div>
      </div>

      <div className="card h-64 md:h-80 flex items-center justify-center">
        <span className="text-gray-500">Dashboard preview (Coming Soon)</span>
      </div>
    </section>
  );
}
