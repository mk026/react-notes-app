import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Paths } from "../../utils/routes";

import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink to={Paths.HOME_PATH}>Home</NavLink>
      <NavLink to={Paths.NOTES_PATH}>Notes</NavLink>
      <NavLink to={Paths.TODOS_PATH}>Todos</NavLink>
      <NavLink to={Paths.ACCOUNT_PATH}>Account</NavLink>
      <NavLink to={Paths.AUTH_PATH}>Auth</NavLink>
    </nav>
  );
};

export default Navbar;
