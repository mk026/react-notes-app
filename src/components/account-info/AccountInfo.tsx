import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes/types";
import { getUserState } from "../../store/selectors";
import ChangeEmailForm from "../forms/change-email-form/ChangeEmailForm";
import ChangeNameForm from "../forms/change-name-form/ChangeNameForm";

const AccountInfo: FC = () => {
  const { user } = useAppSelector(getUserState);
  const { signout } = useActions();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    signout();
    navigate(Paths.HOME_PATH);
  };

  return (
    <div>
      <div>
        <p>{user?.name}</p>
        <ChangeNameForm />
      </div>
      <div>
        <p>{user?.email}</p>
        <ChangeEmailForm />
      </div>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default AccountInfo;
