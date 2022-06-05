import { FC, useState } from "react";

import { useAppSelector } from "../../hooks/redux";
import { authRoutes, publicRoutes } from "../../routes";
import { getAuthState } from "../../store/selectors";
import MenuButton from "../menu-button/MenuButton";
import NavMenu from "../nav-menu/NavMenu";
import Navbar from "../navbar/Navbar";
import UserStatus from "../user-status/UserStatus";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { isAuth } = useAppSelector(getAuthState);

  const toggleMenu = () => setMenuIsActive((prev) => !prev);

  const routes = isAuth ? authRoutes : publicRoutes;

  return (
    <header className={classes.header}>
      <MenuButton onClick={toggleMenu} />
      <NavMenu routes={routes} isActive={menuIsActive} onClose={toggleMenu} />
      <Navbar routes={routes} />
      {isAuth && <UserStatus />}
    </header>
  );
};

export default Header;
