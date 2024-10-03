import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
import { School } from "./pages/School/School";
import { Program } from "./pages/Program/Program";
import { QRcodes } from "./pages/QRcodes/QRcodes";
import { Login} from './pages/Admin/Login'
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/school",
    element: <School />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/qrcodes",
    element: <QRcodes />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const AppRouter = () => {

  const routeList = routes.map((item, i) => (
    <Route key={i} path={item.path} element={item.element} />
  ));
  return (
    <Routes>

      {routeList}
    </Routes>
  );
};

// const GuardComponent = () => {};

