import { IRoute, Paths } from "./types";
import AccountPage from "../pages/account-page/AccountPage";
import AuthPage from "../pages/auth-page/AuthPage";
import HomePage from "../pages/home-page/HomePage";
import NotesPage from "../pages/notes-page/NotesPage";
import TodosPage from "../pages/todos-page/TodosPage";

export const authRoutes: IRoute[] = [
  { path: Paths.NOTES_PATH, Component: NotesPage, name: "Notes" },
  { path: Paths.TODOS_PATH, Component: TodosPage, name: "Todos" },
  { path: Paths.ACCOUNT_PATH, Component: AccountPage, name: "Account" },
];

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME_PATH, Component: HomePage, name: "Home" },
  { path: Paths.AUTH_PATH, Component: AuthPage, name: "Auth" },
];
