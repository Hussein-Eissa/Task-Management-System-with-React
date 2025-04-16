import { createBrowserRouter } from "react-router-dom";
import "./Routingmodule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SingleTaskPage from "./taskoverview/SingleTaskPage"; // استيراد SingleTaskPage
import TaskOverview from "./taskoverview/TaskOverview";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/tasks",
    element: <TaskOverview />,
  },
  {
    path: "task/:id", // الـ route بتاع SingleTaskPage مع ID ديناميكي
    element: <SingleTaskPage />,
  },
  {
    path: "*",
    element: (
      <div>
        <p>Not Found</p>
      </div>
    ),
  },
]);

export default Routes;
