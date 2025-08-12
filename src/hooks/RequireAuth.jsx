import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

export default function RequireAuth({ children }) {
  const { user, loading } = useAuthStore();
  const loc = useLocation();

  if (loading)
    return <div className="p-6 text-sm text-gray-600">Loading...</div>;
  if (!user) return <Navigate to="/" state={{ from: loc }} replace />;

  return children;
}
