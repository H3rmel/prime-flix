import { createBrowserRouter } from "react-router-dom";

// Pages
import Error from "./Error";
import Home from "./Home";
import Movie from "./Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movie",
    element: <Movie />,
    errorElement: <Error />,
  },
]);

export default router;
