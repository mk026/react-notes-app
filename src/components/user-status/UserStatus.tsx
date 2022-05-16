import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes/types";
import { getUserState } from "../../store/selectors";

import classes from "./UserStatus.module.css";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const { signout } = useActions();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    signout();
    navigate(Paths.HOME_PATH);
  };

  return (
    <div className={classes["user-status"]}>
      <p className={classes["user-status__name"]}>{user?.name}</p>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default UserStatus;
