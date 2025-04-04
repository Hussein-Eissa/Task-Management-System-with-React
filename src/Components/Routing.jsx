import { createBrowserRouter } from 'react-router-dom';

const Routes = createBrowserRouter ([
    {
        path: "/",
        element: <div><p>Home Page</p></div>
    },
    {
        path: "a",
        element: <div><p>About Page</p></div>
    },
    {
        path: "d",
        element: <div><p>Dashboard Page</p></div>
    },
    {
        path: "c",
        element: <div><p>Contact Page</p></div>
    },
    {
        path: "*",
        element: <div><p>Not Found</p></div>
    },
]);

export default Routes