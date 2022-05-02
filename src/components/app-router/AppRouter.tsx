import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { appRoutes } from "../../routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {appRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
