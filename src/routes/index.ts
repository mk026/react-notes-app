import { ComponentType } from "react";

import AccountPage from "../pages/account-page/AccountPage";
import AuthPage from "../pages/auth-page/AuthPage";
import HomePage from "../pages/home-page/HomePage";
import NotesPage from "../pages/notes-page/NotesPage";
import TodosPage from "../pages/todos-page/TodosPage";
import GalleryPage from "../pages/gallery-page/GalleryPage";

export enum Paths {
  HOME_PATH = "/",
  NOTES_PATH = "/notes",
  TODOS_PATH = "/todos",
  GALLERY_PATH = "/gallery",
  ACCOUNT_PATH = "/account",
  AUTH_PATH = "/auth",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const authRoutes: IRoute[] = [
  { path: Paths.NOTES_PATH, Component: NotesPage },
  { path: Paths.TODOS_PATH, Component: TodosPage },
  { path: Paths.GALLERY_PATH, Component: GalleryPage },
  { path: Paths.ACCOUNT_PATH, Component: AccountPage },
];

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME_PATH, Component: HomePage },
  { path: Paths.AUTH_PATH, Component: AuthPage },
];
