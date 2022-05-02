import { ComponentType } from "react";
import AccountPage from "../pages/AccountPage/AccountPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import NotesPage from "../pages/NotesPage/NotesPage";
import TodosPage from "../pages/TodosPage/TodosPage";

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
