import { FC } from "react";
import { NavLink } from "react-router-dom";

import { useLinks } from "../../hooks/useLinks";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  const links = useLinks();

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes.navbar__link + " " + classes.active
      : classes.navbar__link;

  return (
    <nav className={classes.navbar}>
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
  );
};

export default Navbar;
