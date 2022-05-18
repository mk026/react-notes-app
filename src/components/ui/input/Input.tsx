import { FC, HTMLInputTypeAttribute } from "react";

import classes from "./Input.module.css";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input className={classes.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
