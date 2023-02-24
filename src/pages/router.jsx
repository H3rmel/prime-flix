import { createBrowserRouter } from "react-router-dom";

// Pages
import Error from "./Error/Index";
import Favorites from "./Favorites/Index";
import Home from "./Home/Index";
import Movie from "./Movie/Index";
import NotFound from "./NotFound/Index";

const router = createBrowserRouter([
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

export default router;
