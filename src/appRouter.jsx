import { createBrowserRouter } from "react-router-dom";
import SingleTaskPage from "./pages/SingleTaskPage";
import TasksPage from "./pages/TasksPage";
import HomePage from "./pages/HomePage";
import NotFound from './pages/NotFound'

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "task/:id",
    element: <SingleTaskPage />,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

export default Routes;
