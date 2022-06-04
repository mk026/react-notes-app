import { ComponentType } from "react";

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
  name: string;
}
