import { createBrowserRouter } from "react-router-dom";
import { Students } from "./pages/Students/Students";
import Home from "./pages/Home/Home";
import { CollageDetail } from "./pages/CollageDetail/CollageDetail";
import { RecruitmentPartners } from "./pages/RecruitmentPartners/RecruitmentPartners";
import { Contact } from "./pages/Contact/Contact";
import { Institutions } from "./pages/Institutions/Institutions";

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
  {
    path: "/recruitment-partners",
    element: <RecruitmentPartners />,
  },
  {
    path: "/institutions",
    element: <Institutions />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const GuardComponent = () => {};

export default routes;
