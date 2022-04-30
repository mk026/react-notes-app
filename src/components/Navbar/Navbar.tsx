import { FC } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink to="home">Home</NavLink>
      <NavLink to="notes">Notes</NavLink>
      <NavLink to="todos">Todos</NavLink>
      <NavLink to="account">Account</NavLink>
      <NavLink to="auth">Auth</NavLink>
    </nav>
  );
};

export default Navbar;
