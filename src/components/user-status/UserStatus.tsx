import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes";
import { getAuthState, getUserState } from "../../store/selectors";
import UserMenu from "../user-menu/UserMenu";

import classes from "./UserStatus.module.scss";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const { isAuth } = useAppSelector(getAuthState);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleUserMenuHandler = () => setIsMenuActive((prev) => !prev);

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
      {isMenuActive && (
        <UserMenu isActive={isMenuActive} onClose={toggleUserMenuHandler} />
      )}
    </div>
  );
};

export default UserStatus;
