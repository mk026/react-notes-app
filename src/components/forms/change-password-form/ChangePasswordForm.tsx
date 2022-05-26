import { FC } from "react";

const ChangePasswordForm: FC = () => {
  return (
    <form>
      <label htmlFor="oldPassword">Enter your current password</label>
      <input id="oldPassword" name="oldPassword" type="password" />
      <label htmlFor="newPassword">Enter new password</label>
      <input id="newPassword" name="newPassword" type="password" />
      <label htmlFor="confirmPassword">Confirm new password</label>
      <input id="confirmPassword" name="confirmPassword" type="password" />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangePasswordForm;
