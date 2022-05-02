import { ComponentType } from "react";
import AccountPage from "../pages/AccountPage/AccountPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import NotesPage from "../pages/NotesPage/NotesPage";
import TodosPage from "../pages/TodosPage/TodosPage";

export interface IRoute {
  path: string;
  Component: ComponentType;
}

export const appRoutes: IRoute[] = [
  { path: "/", Component: HomePage },
  { path: "/notes", Component: NotesPage },
  { path: "/todos", Component: TodosPage },
  { path: "/account", Component: AccountPage },
  { path: "/auth", Component: AuthPage },
];
