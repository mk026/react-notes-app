import { FC, ReactNode } from "react";

import classes from "./PageTop.module.scss";

interface PageTopProps {
  children?: ReactNode;
  title: string;
}

const PageTop: FC<PageTopProps> = ({ title, children }) => {
  return (
    <div className={classes["page-top"]}>
      <h1 className={classes["page-top__title"]}>{title}</h1>
      {children}
    </div>
  );
};

export default PageTop;
