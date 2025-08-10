import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Calendar from "../pages/Calendar";
import Stats from "../pages/Stats";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common layout
    children: [
      { index: true, element: <Dashboard /> }, // "/" (index route)
      { path: "applications", element: <Applications /> },
      { path: "calendar", element: <Calendar /> },
      { path: "stats", element: <Stats /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <div>Not Found</div> }, // 404
    ],
  },
]);
