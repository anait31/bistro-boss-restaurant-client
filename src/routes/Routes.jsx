import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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