import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: (
      <h1>
        Hellow <Outlet />
      </h1>
    ),
    children: [
      {
        path: "goo",
        element: <h2>Goo</h2>,
      },
    ],
  },
]);

export default router;
