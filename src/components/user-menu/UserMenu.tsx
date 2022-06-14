import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes";

import classes from "./UserMenu.module.scss";

const UserMenu: FC = () => {
  const { signout } = useActions();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    signout();
    navigate(Paths.HOME_PATH);
  };

  return (
    <div className={classes["user-menu"]}>
      <button className={classes["btn"]} onClick={signoutHandler}>
        Signout
      </button>
    </div>
  );
};

export default UserMenu;
