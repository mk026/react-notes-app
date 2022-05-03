import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { authRoutes, publicRoutes } from "../../routes";

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const routes = isAuth ? authRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
