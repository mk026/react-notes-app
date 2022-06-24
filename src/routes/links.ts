import { Paths } from ".";

export interface ILink {
  path: Paths;
  name: string;
}

export const publicLinks: ILink[] = [{ path: Paths.HOME_PATH, name: "Home" }];
export const authLinks: ILink[] = [
  { path: Paths.HOME_PATH, name: "Home" },
  { path: Paths.NOTES_PATH, name: "Notes" },
  { path: Paths.TODOS_PATH, name: "Todos" },
  { path: Paths.GALLERY_PATH, name: "Gallery" },
];
