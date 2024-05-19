import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { getToken } from "./api/auth";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  return getToken() ? children : <Navigate to="/" />;
}

const getPrivateRoute = (index: number, path: string, Component: ReactNode) => {
  return (
    <Route
      key={index}
      path={path}
      element={<PrivateRoute>{Component}</PrivateRoute>}
    />
  );
};

const getDefaultRoute = (key: number, path: string, Component: ReactNode) => {
  return (
    <Route key={key} path={path} element={Component} />
  );
}

interface InterfaceRoute {
  path: string;
  component: ReactNode;
}

interface InterfaceRoutes extends Array<InterfaceRoute> {}

const defaultRoutes: InterfaceRoutes = [
  { path: '/', component: <Login /> },
];

const privateRoutes: InterfaceRoutes = [
  { path: '/user', component: <Profile /> },
];

const App = () => {
  return (
    <Routes>
      {defaultRoutes.map((item: InterfaceRoute, index: number) => getDefaultRoute(index, item.path, item.component))}
      {privateRoutes.map((item: InterfaceRoute, index: number) => getPrivateRoute(index, item.path, item.component))}

      <Route path="/" element={<Login />} />
      <Route path="/user" element={<Profile />} />
    </Routes>
  );
};

export default App;
