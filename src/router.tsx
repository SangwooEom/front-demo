import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Join from "./pages/auth/Join";
import Add from "./pages/board/Add";
import Detail from "./pages/board/Detail";
import List from "./pages/board/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/auth/join",
        element: <Join />
    },
    {
        path: "/board/add",
        element: <Add />
    },
    {
        path: "/board/detail/:id",
        element: <Detail />
    },
    {
        path: "/board/list",
        element: <List />
    }
]);

export default router;