import { FC, ReactNode } from "react";

import classes from "./Card.module.scss";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
