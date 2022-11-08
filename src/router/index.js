import { createBrowserRouter } from "react-router-dom";
import Home from "../views/HomePage";
import Login from "../views/LoginPage";
import PrivateRoute from "../components/PrivateRoute"
import NotFound from "../views/NotFound";
import Register from "../views/RegisterPage";

const router = createBrowserRouter([

    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;
