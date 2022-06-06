import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IRoute } from "../../routes/types";
import Backdrop from "../ui/backdrop/Backdrop";

import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  routes: IRoute[];
  isActive: boolean;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ routes, isActive, onClose }) => {
  const menuStyles = isActive
    ? `${classes["nav-menu"]} ${classes["active"]}`
    : classes["nav-menu"];

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes["nav-menu__link"] + " " + classes.active
      : classes["nav-menu__link"];

  return (
    <>
      <Backdrop isActive={isActive} onClick={onClose} />
      <nav className={menuStyles}>
        <ul>
          {routes.map(({ path, name }) => (
            <li key={path}>
              <NavLink className={getLinkStyles} to={path}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
