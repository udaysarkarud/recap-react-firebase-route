import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import MyProfile from "../components/MyProfile/MyProfile";
import Products from "../components/Products/Products";
import Order from "../components/Order/Order";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "myprofile",
        element: <MyProfile />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
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
