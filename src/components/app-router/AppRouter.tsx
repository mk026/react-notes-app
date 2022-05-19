import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors";
import { authRoutes, publicRoutes } from "../../routes";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const routes = isAuth ? authRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
