import { createBrowserRouter } from "react-router-dom";
import { Students } from "./pages/Students/Students";
import Home from "./pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/students",
    element: <Students />,
  },
]);

const GuardComponent = () => {};

export default routes;
