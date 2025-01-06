import { Home, Profile } from "@/pages";
import { Layout } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);