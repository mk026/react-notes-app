import { FC, FormHTMLAttributes, ReactNode } from "react";

import classes from "./Form.module.scss";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  inline?: boolean;
}

const Form: FC<FormProps> = ({ children, inline, ...props }) => {
  const styles = inline ? classes["inline-form"] : classes["form"];

  return (
    <form className={styles} {...props}>
      {children}
    </form>
  );
};

export default Form;
