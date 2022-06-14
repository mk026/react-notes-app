import { FC, useState } from "react";

import { useAppSelector } from "../../hooks/redux";
import { useLinks } from "../../hooks/useLinks";
import { getAuthState } from "../../store/selectors";
import MenuButton from "../menu-button/MenuButton";
import NavMenu from "../nav-menu/NavMenu";
import Navbar from "../navbar/Navbar";
import UserStatus from "../user-status/UserStatus";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { isAuth } = useAppSelector(getAuthState);
  const links = useLinks();

  const toggleMenu = () => setMenuIsActive((prev) => !prev);

  return (
    <header className={classes.header}>
      <MenuButton onClick={toggleMenu} />
      <NavMenu links={links} isActive={menuIsActive} onClose={toggleMenu} />
      <Navbar links={links} />
      {isAuth && <UserStatus />}
    </header>
  );
};

export default Header;
