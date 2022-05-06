import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { authSlice } from "../../store/reducers/authReducer";

const AccountInfo: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(authSlice.actions.signout());
    navigate(Paths.HOME_PATH);
  };

  return (
    <div>
      <p>User Name</p>
      <p>User Email</p>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default AccountInfo;
