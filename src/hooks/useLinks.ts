import { useMemo } from "react";

import { authLinks, publicLinks } from "../routes/links";
import { getAuthState } from "../store/selectors";
import { useAppSelector } from "./redux";

export const useLinks = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return useMemo(() => (isAuth ? authLinks : publicLinks), [isAuth]);
};
