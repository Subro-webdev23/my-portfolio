import {
    createBrowserRouter
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/projects/:id",
                element: <Details></Details>
            }
        ]
    },
]);