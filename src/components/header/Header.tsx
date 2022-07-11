import { FC, useCallback, useState } from "react";

import MenuButton from "../menu-button/MenuButton";
import NavMenu from "../nav-menu/NavMenu";
import Navbar from "../navbar/Navbar";
import UserStatus from "../user-status/UserStatus";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = useCallback(() => setMenuIsActive((prev) => !prev), []);

  return (
    <header className={classes.header}>
      <MenuButton onClick={toggleMenu} />
      <NavMenu isActive={menuIsActive} onClose={toggleMenu} />
      <Navbar />
      <UserStatus />
    </header>
  );
};

export default Header;
