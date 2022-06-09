import { FC, FormHTMLAttributes, ReactNode } from "react";

import classes from "./Form.module.scss";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
