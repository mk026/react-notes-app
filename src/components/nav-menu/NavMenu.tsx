import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IRoute } from "../../routes/types";
import Drawer, { DrawerPosition } from "../ui/drawer/Drawer";

import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  routes: IRoute[];
  isActive: boolean;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ routes, isActive, onClose }) => {
  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes["nav-menu__link"] + " " + classes.active
      : classes["nav-menu__link"];

  return (
    <Drawer
      isActive={isActive}
      onClose={onClose}
      position={DrawerPosition.LEFT}
    >
      <nav className={classes["nav-menu"]}>
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
    </Drawer>
  );
};

export default NavMenu;
