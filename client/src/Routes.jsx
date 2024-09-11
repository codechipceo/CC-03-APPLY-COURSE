import { createBrowserRouter } from "react-router-dom";
import { Students } from "./pages/Students/Students";
import Home from "./pages/Home/Home";
import { CollageDetail } from "./pages/CollageDetail/CollageDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/recruitment",
    element: <Students />,
  },
  {
    path: "/collage-detail",
    element: <CollageDetail />,
  },
]);

const GuardComponent = () => {};

export default routes;
