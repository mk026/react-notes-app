import { FC, ReactNode } from "react";

import classes from "./PageTop.module.scss";

interface PageTopProps {
  children?: ReactNode;
}

const PageTop: FC<PageTopProps> = ({ children }) => {
  return <div className={classes["page-top"]}>{children}</div>;
};

export default PageTop;
