import { FC, ReactNode } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
