import { FC, TextareaHTMLAttributes } from "react";

import classes from "./Textarea.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: FC<TextareaProps> = (props) => {
  return <textarea className={classes.textarea} {...props} />;
};

export default Textarea;
