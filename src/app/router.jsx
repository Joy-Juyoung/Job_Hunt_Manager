import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Calendar from "../pages/Calendar";
import Stats from "../pages/Stats";
import Settings from "../pages/Settings";
import RequireAuth from "../hooks/RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common layout
    children: [
      { index: true, element: <Dashboard /> },
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
