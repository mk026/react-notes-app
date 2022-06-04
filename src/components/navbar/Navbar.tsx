import { FC } from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { authRoutes, publicRoutes } from "../../routes";
import { getAuthState } from "../../store/selectors";
import UserStatus from "../user-status/UserStatus";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  const routes = isAuth ? authRoutes : publicRoutes;

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes.navbar__link + " " + classes.active
      : classes.navbar__link;

  return (
    <header className={classes.navbar}>
      <div className={classes["menu-btn"]}>
        <span />
      </div>
      <nav>
        {routes.map(({ path, name }) => (
          <NavLink key={path} className={getLinkStyles} to={path}>
            {name}
          </NavLink>
        ))}
      </nav>
      {isAuth && <UserStatus />}
    </header>
  );
};

export default Navbar;
