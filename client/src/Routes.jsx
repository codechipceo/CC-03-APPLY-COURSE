import { createBrowserRouter } from "react-router-dom";
import { Students } from "./pages/Students/Students";
import Home from "./pages/Home/Home";
import { CollageDetail } from "./pages/CollageDetail/CollageDetail";
import { RecruitmentPartners } from "./pages/RecruitmentPartners/RecruitmentPartners";
import { Contact } from "./pages/Contact/Contact";
import { Institutions } from "./pages/Institutions/Institutions";
import Footer from "./components/Footer";
import { Women } from "./pages/Women/Women";

const routeArr = [
  {
    path: "/",
    element: <Students />,
  },
  {
    path: "/students",
    element: <Students />,
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
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: '/women',
    element : <Women />

  },
  {
    path: '/*',
    element:<> <h1>404 error</h1></>
  }
  ]
const updatedRoutes = routeArr.map((item) => {
  return {
    path: item.path,
    element: <>
      {item.element}
      <Footer />
    </>
  }
})
const routes = createBrowserRouter(updatedRoutes);

const GuardComponent = () => {};

export default routes;
