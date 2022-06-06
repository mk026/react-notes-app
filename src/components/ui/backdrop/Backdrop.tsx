import { FC } from "react";

import classes from "./Backdrop.module.scss";

interface BackdropProps {
  onClick: () => void;
  isActive: boolean;
}

const Backdrop: FC<BackdropProps> = ({ isActive, onClick }) => {
  const styles = isActive
    ? `${classes.backdrop} ${classes.active}`
    : classes.backdrop;

  return <div className={styles} onClick={onClick} />;
};

export default Backdrop;
