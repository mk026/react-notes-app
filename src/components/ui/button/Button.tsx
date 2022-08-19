import { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const styles = className ? `${classes.button} ${className}` : classes.button;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
