import { createBrowserRouter } from "react-router-dom";
import SideNav from "./Home/SideNav";
("./Home/SideNav");
import Section1 from "./Home/Section1";
import Filters from "./Home/Filters";
import Tasks from "./Home/Tasks";
import "./Routingmodule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SingleTaskPage from "./taskoverview/SingleTaskPage"; // استيراد SingleTaskPage

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="containers">
          <SideNav />
          <div className="item">
            <Section1 />
            <Filters />
            <Tasks />
          </div>
        </div>
      </>
    ),
  },
  {
    path: "a",
    element: (
      <div>
        <p>About Page</p>
      </div>
    ),
  },
  {
    path: "d",
    element: (
      <div>
        <p>Dashboard Page</p>
      </div>
    ),
  },
  {
    path: "c",
    element: (
      <div>
        <p>Contact Page</p>
      </div>
    ),
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
