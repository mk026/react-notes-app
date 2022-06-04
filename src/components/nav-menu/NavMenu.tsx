import { FC, ReactNode } from "react";

import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  children: ReactNode;
  isActive: boolean;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ children, isActive, onClose }) => {
  const menuStyles = isActive
    ? `${classes["nav-menu"]} ${classes["active"]}`
    : classes["nav-menu"];
  const backdropStyles = isActive
    ? `${classes["backdrop"]} ${classes["active"]}`
    : classes["backdrop"];

  return (
    <>
      <div className={backdropStyles} onClick={onClose}></div>
      <nav className={menuStyles}>{children}</nav>
    </>
  );
};

export default NavMenu;
