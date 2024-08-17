import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
import { School } from "./pages/School/School";
import { Program } from "./pages/Program/Program";
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

