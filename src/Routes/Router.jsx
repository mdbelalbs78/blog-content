import {
    createBrowserRouter,
  } from "react-router-dom";
import Mains from "../Layout/Mains";
import Home from "../Pages/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mains></Mains>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);