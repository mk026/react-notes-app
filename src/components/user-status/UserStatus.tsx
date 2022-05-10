import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { signout } from "../../store/action-creators/authActionCreators";
import { getUserState } from "../../store/selectors/userSelectors";

const UserStatus: FC = () => {
  const { user } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(signout());
    navigate(Paths.HOME_PATH);
  };

  return (
    <div>
      <p>{user?.name}</p>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default UserStatus;
