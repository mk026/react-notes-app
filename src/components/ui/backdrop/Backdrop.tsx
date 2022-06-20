import { FC } from "react";

import classes from "./Backdrop.module.scss";

interface BackdropProps {
  onClick: () => void;
  isActive: boolean;
  invisible?: boolean;
}

const Backdrop: FC<BackdropProps> = ({ isActive, onClick, invisible }) => {
  const styles = [classes.backdrop];

  if (isActive) {
    styles.push(classes.active);
  }
  if (invisible) {
    styles.push(classes.invisible);
  }

  return <div className={styles.join(" ")} onClick={onClick} />;
};

export default Backdrop;
