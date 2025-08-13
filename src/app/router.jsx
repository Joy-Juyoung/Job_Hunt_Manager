import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./publicLayout";
import AppLayout from "./layout"; // 기존 헤더+사이드바 레이아웃
import Home from "../pages/Home";
import Login from "../pages/Login"; // 이전 단계에서 만든 로그인 페이지
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Calendar from "../pages/Calendar";
import Stats from "../pages/Stats";
import Settings from "../pages/Settings";
import RequireAuth from "../hooks/RequireAuth";

export const router = createBrowserRouter([
  // 공개 구간 (사이드바 없음)
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },
  // 인증 구간 (사이드바 있음)
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "applications",
        element: (
          <RequireAuth>
            <Applications />
          </RequireAuth>
        ),
      },
      {
        path: "calendar",
        element: (
          <RequireAuth>
            <Calendar />
          </RequireAuth>
        ),
      },
      {
        path: "stats",
        element: (
          <RequireAuth>
            <Stats />
          </RequireAuth>
        ),
      },
      {
        path: "settings",
        element: (
          <RequireAuth>
            <Settings />
          </RequireAuth>
        ),
      },
    ],
  },
]);
