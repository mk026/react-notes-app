import { FC, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Backdrop from "../ui/backdrop/Backdrop";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/action-creators";
import { Paths } from "../../routes";

import classes from "./UserMenu.module.scss";

interface UserMenuProps {
  isActive: boolean;
  onClose: () => void;
}

const UserMenu: FC<UserMenuProps> = ({ isActive, onClose }) => {
  const { signout } = useActions(authActions);
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    onClose();
    signout();
    navigate(Paths.HOME_PATH);
  };

  return (
    <>
      <Backdrop isActive={isActive} onClick={onClose} invisible />
      <div className={classes["user-menu"]}>
        <Link
          className={classes["btn"]}
          to={Paths.ACCOUNT_PATH}
          onClick={onClose}
        >
          My Account
        </Link>
        <button className={classes["btn"]} onClick={signoutHandler}>
          Signout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
