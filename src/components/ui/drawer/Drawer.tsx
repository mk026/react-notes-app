import { FC, ReactNode } from "react";
import Backdrop from "../backdrop/Backdrop";

import classes from "./Drawer.module.scss";

export enum DrawerPosition {
  LEFT = "left",
  RIGHT = "right",
}

interface DrawerProps {
  children: ReactNode;
  position: DrawerPosition;
  onClose: () => void;
  isActive: boolean;
}

const Drawer: FC<DrawerProps> = ({ position, isActive, onClose, children }) => {
  let styles = [];

  if (position === DrawerPosition.LEFT) {
    styles.push(classes["drawer--left"]);
  }
  if (position === DrawerPosition.RIGHT) {
    styles.push(classes["drawer--right"]);
  }
  if (isActive) {
    styles.push(classes["active"]);
  }

  return (
    <>
      <Backdrop isActive={isActive} onClick={onClose} />
      <aside className={styles.join(" ")}>{children}</aside>
    </>
  );
};

export default Drawer;
