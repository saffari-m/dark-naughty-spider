import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/home/home";
import NotFound from "@pages/notfound";
import Episode from "@pages/episode/[id]";
import EpisodeTags from "@pages/episode/tags/[id]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "episode/:id",
    element: <Episode />,
  },
  {
    path: "episode/tags/:id",
    element: <EpisodeTags />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RoutesHandler = () => {
  return <RouterProvider router={router} />;
};

export default RoutesHandler;
