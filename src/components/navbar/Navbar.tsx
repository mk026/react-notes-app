import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IRoute } from "../../routes/types";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  routes: IRoute[];
}

const Navbar: FC<NavbarProps> = ({ routes }) => {
  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes.navbar__link + " " + classes.active
      : classes.navbar__link;

  return (
    <nav className={classes.navbar}>
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
  );
};

export default Navbar;
