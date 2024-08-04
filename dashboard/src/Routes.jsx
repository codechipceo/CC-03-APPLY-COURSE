import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/add",
    element: <h1>ubaid</h1>,
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

