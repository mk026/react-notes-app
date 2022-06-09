import { FC, InputHTMLAttributes } from "react";

import classes from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}

const Input: FC<InputProps> = ({ error, touched, ...props }) => {
  return (
    <>
      <input className={classes.input} {...props} />
      {touched && error && <p className={classes.error}>{error}</p>}
    </>
  );
};

export default Input;
