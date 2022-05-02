import { ComponentType } from "react";

import AccountPage from "../pages/account-page/AccountPage";
import AuthPage from "../pages/auth-page/AuthPage";
import HomePage from "../pages/home-page/HomePage";
import NotesPage from "../pages/notes-page/NotesPage";
import TodosPage from "../pages/todos-page/TodosPage";

export enum Paths {
  HOME_PATH = "/",
  NOTES_PATH = "/notes",
  TODOS_PATH = "/todos",
  ACCOUNT_PATH = "/account",
  AUTH_PATH = "/auth",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const appRoutes: IRoute[] = [
  { path: Paths.HOME_PATH, Component: HomePage },
  { path: Paths.NOTES_PATH, Component: NotesPage },
  { path: Paths.TODOS_PATH, Component: TodosPage },
  { path: Paths.ACCOUNT_PATH, Component: AccountPage },
  { path: Paths.AUTH_PATH, Component: AuthPage },
];
