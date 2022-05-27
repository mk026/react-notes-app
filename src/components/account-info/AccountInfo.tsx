import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes/types";
import { getUserState } from "../../store/selectors";
import ChangeEmailForm from "../forms/change-email-form/ChangeEmailForm";
import ChangeNameForm from "../forms/change-name-form/ChangeNameForm";
import ChangePasswordForm from "../forms/change-password-form/ChangePasswordForm";

const AccountInfo: FC = () => {
  const { user } = useAppSelector(getUserState);
  const { deleteAccount } = useActions();
  const navigate = useNavigate();

  const deleteAccountHandler = () => {
    deleteAccount();
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
      <div>
        <p>Update password</p>
        <ChangePasswordForm />
      </div>
      <button onClick={deleteAccountHandler}>Delete account</button>
    </div>
  );
};

export default AccountInfo;
