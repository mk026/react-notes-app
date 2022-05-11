import { FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
