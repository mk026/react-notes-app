import { FC, ReactNode } from "react";

import classes from "./Page.module.css";

interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return <div className={classes.page}>{children}</div>;
};

export default Page;
