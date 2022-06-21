import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes";
import { getAuthState, getUserState } from "../../store/selectors";
import Backdrop from "../ui/backdrop/Backdrop";
import UserMenu from "../user-menu/UserMenu";

import classes from "./UserStatus.module.scss";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const { isAuth } = useAppSelector(getAuthState);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleUserMenuHandler = () => setIsMenuVisible((prev) => !prev);

  if (!isAuth) {
    return (
      <Link className={classes["link"]} to={Paths.AUTH_PATH}>
        Signin
      </Link>
    );
  }

  return (
    <div className={classes["user-status"]}>
      <button className={classes["btn"]} onClick={toggleUserMenuHandler}>
        {user?.name}
      </button>
      {isMenuVisible && (
        <>
          <Backdrop
            isActive={isMenuVisible}
            onClick={toggleUserMenuHandler}
            invisible
          />
          <UserMenu />
        </>
      )}
    </div>
  );
};

export default UserStatus;
