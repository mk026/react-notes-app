import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes";
import { getUserState } from "../../store/selectors";
import ChangeEmailForm from "../forms/change-email-form/ChangeEmailForm";
import ChangeNameForm from "../forms/change-name-form/ChangeNameForm";
import ChangePasswordForm from "../forms/change-password-form/ChangePasswordForm";
import Button from "../ui/button/Button";
import Modal from "../ui/modal/Modal";

import classes from "./AccountInfo.module.scss";

const AccountInfo: FC = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { user } = useAppSelector(getUserState);
  const { deleteAccount } = useActions();
  const navigate = useNavigate();

  const toggleEditNameFormHandler = () => setIsEditingName((prev) => !prev);
  const toggleEditEmailFormHandler = () => setIsEditingEmail((prev) => !prev);
  const toggleEditPasswordFormHandler = () =>
    setIsEditingPassword((prev) => !prev);
  const toggleDeleteAccountModal = () => setIsDeleting((prev) => !prev);

  const deleteAccountHandler = () => {
    deleteAccount();
    toggleDeleteAccountModal();
    navigate(Paths.HOME_PATH);
  };

  return (
    <>
      <div className={classes["account-info"]}>
        <section className={classes["info"]}>
          <p>{user?.name}</p>
          <Button onClick={toggleEditNameFormHandler}>Edit</Button>
          {isEditingName && (
            <ChangeNameForm onClose={toggleEditNameFormHandler} />
          )}
        </section>
        <section className={classes["info"]}>
          <p>{user?.email}</p>
          <Button onClick={toggleEditEmailFormHandler}>Edit</Button>
          {isEditingEmail && (
            <ChangeEmailForm onClose={toggleEditEmailFormHandler} />
          )}
        </section>
        <section className={classes["info"]}>
          <Button onClick={toggleEditPasswordFormHandler}>
            Update password
          </Button>
        </section>
        <Button onClick={toggleDeleteAccountModal}>Delete account</Button>
      </div>
      <Modal
        isActive={isEditingPassword}
        onClose={toggleEditPasswordFormHandler}
      >
        <ChangePasswordForm onClose={toggleEditPasswordFormHandler} />
      </Modal>
      <Modal isActive={isDeleting} onClose={toggleDeleteAccountModal}>
        <p>This operation cannot be undone</p>
        <Button onClick={deleteAccountHandler}>Delete</Button>
        <Button onClick={toggleDeleteAccountModal}>Cancel</Button>
      </Modal>
    </>
  );
};

export default AccountInfo;
