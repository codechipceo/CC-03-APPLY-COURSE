import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Students } from "./pages/Students/Students";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Students />,
  },
  {
    path: "/students",
    element: <Students />,
  },
]);

const GuardComponent = () => {};

export default routes;
