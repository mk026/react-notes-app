import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { authRoutes, publicRoutes } from "../../routes";
import { getAuthState } from "../../store/selectors";
import MenuButton from "../menu-button/MenuButton";
import NavMenu from "../nav-menu/NavMenu";
import UserStatus from "../user-status/UserStatus";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { isAuth } = useAppSelector(getAuthState);

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classes.navbar__link + " " + classes.active
      : classes.navbar__link;
  const toggleMenu = () => setMenuIsActive((prev) => !prev);

  const routes = isAuth ? authRoutes : publicRoutes;
  const links = routes.map(({ path, name }) => (
    <NavLink key={path} className={getLinkStyles} to={path}>
      {name}
    </NavLink>
  ));

  return (
    <header className={classes.navbar}>
      <MenuButton onClick={toggleMenu} />
      <NavMenu isActive={menuIsActive} onClose={toggleMenu}>
        {links}
      </NavMenu>
      <nav>{links}</nav>
      {isAuth && <UserStatus />}
    </header>
  );
};

export default Navbar;
