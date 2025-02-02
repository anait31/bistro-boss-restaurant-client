import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";
import ErrorPages from "../pages/ErrorPages/ErrorPages";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/our-menu',
            element: <OurMenu></OurMenu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        }
      ]
    },
  ]);