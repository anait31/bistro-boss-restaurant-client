import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";

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
        }
      ]
    },
  ]);