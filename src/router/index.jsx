import { createBrowserRouter } from "react-router-dom";

import { Error, Favorites, Home, Movie, NotFound } from "@/pages/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/favorite",
    element: <Favorites />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
