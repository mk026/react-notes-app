import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ILink } from "../../routes/links";
import Drawer, { DrawerPosition } from "../ui/drawer/Drawer";

import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  links: ILink[];
  isActive: boolean;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ links, isActive, onClose }) => {
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
          {links.map(({ path, name }) => (
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
