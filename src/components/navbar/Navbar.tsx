import { FC } from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { getAuthState } from "../../store/selectors";
import UserStatus from "../user-status/UserStatus";

import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes.navbar__link + " " + classes.active
      : classes.navbar__link;

  let links = null;

  if (isAuth) {
    links = (
      <>
        <NavLink className={getLinkClasses} to={Paths.HOME_PATH}>
          Home
        </NavLink>
        <NavLink className={getLinkClasses} to={Paths.NOTES_PATH}>
          Notes
        </NavLink>
        <NavLink className={getLinkClasses} to={Paths.TODOS_PATH}>
          Todos
        </NavLink>
        <NavLink className={getLinkClasses} to={Paths.ACCOUNT_PATH}>
          Account
        </NavLink>
      </>
    );
  } else {
    links = (
      <>
        <NavLink className={getLinkClasses} to={Paths.HOME_PATH}>
          Home
        </NavLink>
        <NavLink className={getLinkClasses} to={Paths.AUTH_PATH}>
          Auth
        </NavLink>
      </>
    );
  }

  return (
    <nav className={classes.navbar}>
      <div>{links}</div>
      {isAuth && <UserStatus />}
    </nav>
  );
};

export default Navbar;
