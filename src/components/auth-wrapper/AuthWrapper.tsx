import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { getAuthState } from "../../store/selectors";

const AuthWrapper: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return isAuth ? <Outlet /> : <Navigate to={Paths.AUTH_PATH} replace />;
};

export default AuthWrapper;
