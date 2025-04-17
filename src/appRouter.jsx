import { createBrowserRouter } from "react-router-dom";
import SingleTaskPage from "./pages/SingleTaskPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "task/:id",
    element: <SingleTaskPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
