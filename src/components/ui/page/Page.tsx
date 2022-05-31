import { FC, ReactNode } from "react";

import classes from "./Page.module.scss";

interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return <main className={classes.page}>{children}</main>;
};

export default Page;
