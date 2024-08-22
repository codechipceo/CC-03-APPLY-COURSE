import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CollageDetail } from "./pages/CollageDetail/CollageDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collage-detail",
    element: <CollageDetail />,
  },
]);

const GuardComponent = () => {};

export default routes;
