import { FC, useState } from "react";

import { useAppSelector } from "../../hooks/redux";
import { getUserState } from "../../store/selectors";
import Backdrop from "../ui/backdrop/Backdrop";
import UserMenu from "../user-menu/UserMenu";

import classes from "./UserStatus.module.scss";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleUserMenuHandler = () => setIsMenuVisible((prev) => !prev);

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
