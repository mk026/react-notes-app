import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { signout } from "../../store/action-creators/authActionCreators";
import { getUserState } from "../../store/selectors";

import classes from "./UserStatus.module.css";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(signout());
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
