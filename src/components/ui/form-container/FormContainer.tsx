import { FC, ReactNode } from "react";

import Card from "../card/Card";

import classes from "./FormContainer.module.scss";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return <Card className={classes["form-container"]}>{children}</Card>;
};

export default FormContainer;
