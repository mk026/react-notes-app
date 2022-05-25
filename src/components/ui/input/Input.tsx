import { FC, InputHTMLAttributes } from "react";

import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return <input className={classes.input} {...props} />;
};

export default Input;
