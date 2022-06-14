import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux";
import { Paths } from "../../../routes";
import { getAuthState } from "../../../store/selectors";

const AuthWrapper: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={Paths.AUTH_PATH} replace state={{ from: location }} />
  );
};

export default AuthWrapper;
