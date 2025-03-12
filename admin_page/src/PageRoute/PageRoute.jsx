import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginUserWrapper from "../screens/LoginUser/LoginUserWrapper";
import React from "react";
import HomePage from "../screens/HomePage/HomePage";
const PageRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginUserWrapper />,
  },
]);
const Route = () => {
  return <RouterProvider router={PageRoute} />;
};
export default Route;
