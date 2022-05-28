import { FC, InputHTMLAttributes } from "react";

import classes from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return <input className={classes.input} {...props} />;
};

export default Input;
