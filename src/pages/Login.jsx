import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { CircleAlert } from "lucide-react";

export default function Login() {
  const { user, loading, error, signIn } = useAuthStore();
  const loc = useLocation();
  const navigate = useNavigate();
  const from = loc.state?.from?.pathname || "/dashboard"; // 로그인 후 이동 목적지

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, from, navigate]);

  return (
    <div className="min-h-[calc(100vh-56px)] grid place-items-center">
      <div className="card w-full max-w-sm">
        <h1 className="text-lg font-semibold mb-3">Login</h1>

        {/* Google login*/}
        <button className="btn btn-primary w-full" onClick={signIn}>
          Continue with Google
        </button>

        {/* Error */}
        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

        {/* Notification */}
        <p className="mt-3 text-xs text-gray-600 flex items-center">
          <CircleAlert />
          <span className="mx-2">
            If the pop-up is blocked, please allow it in your browser.
          </span>
        </p>
      </div>
    </div>
  );
}
