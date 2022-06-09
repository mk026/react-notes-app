import { FC, TextareaHTMLAttributes } from "react";

import classes from "./Textarea.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  touched?: boolean;
  error?: string;
}

const Textarea: FC<TextareaProps> = ({ error, touched, ...props }) => {
  return (
    <>
      <textarea className={classes.textarea} {...props} />
      {touched && error && <p className={classes.error}>{error}</p>}
    </>
  );
};

export default Textarea;
