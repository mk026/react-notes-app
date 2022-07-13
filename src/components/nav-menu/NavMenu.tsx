import { FC } from "react";
import { NavLink } from "react-router-dom";

import { useLinks } from "../../hooks/useLinks";
import Drawer from "../ui/drawer/Drawer";

import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  isActive: boolean;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ isActive, onClose }) => {
  const links = useLinks();

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes["nav-menu__link"] + " " + classes.active
      : classes["nav-menu__link"];

  return (
    <Drawer isActive={isActive} onClose={onClose} position="left">
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
