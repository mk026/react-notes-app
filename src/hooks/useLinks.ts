import { useMemo } from "react";
import { Paths } from "../routes/types";

import { getAuthState } from "../store/selectors";
import { useAppSelector } from "./redux";

export interface ILink {
  path: Paths;
  name: string;
}

export const publicLinks: ILink[] = [
  { path: Paths.HOME_PATH, name: "Home" },
  { path: Paths.AUTH_PATH, name: "Auth" },
];
export const authLinks: ILink[] = [
  { path: Paths.HOME_PATH, name: "Home" },
  { path: Paths.NOTES_PATH, name: "Notes" },
  { path: Paths.TODOS_PATH, name: "Todos" },
  { path: Paths.ACCOUNT_PATH, name: "Account" },
];

export const useLinks = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return useMemo(() => {
    return isAuth ? authLinks : publicLinks;
  }, [isAuth]);
};
