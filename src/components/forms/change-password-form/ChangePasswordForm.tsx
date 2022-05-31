import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import {
  changePasswordFormInitialValues,
  ChangePasswordFormValues,
  changePasswordValidationSchema,
} from "../../../validation/changePasswordValidation";
import { useActions } from "../../../hooks/useActions";

interface ChangePasswordFormProps {
  onClose: () => void;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ onClose }) => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<ChangePasswordFormValues>({
      initialValues: changePasswordFormInitialValues,
      validationSchema: changePasswordValidationSchema,
      onSubmit: (values) => changePasswordHandler(values),
    });
  const { updatePassword } = useActions();

  const changePasswordHandler = ({
    oldPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    updatePassword(oldPassword, newPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.oldPassword && errors.oldPassword && (
        <div>{errors.oldPassword}</div>
      )}
      <label htmlFor="oldPassword">Enter your current password</label>
      <Input
        id="oldPassword"
        name="oldPassword"
        type="password"
        value={values.oldPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.newPassword && errors.newPassword && (
        <div>{errors.newPassword}</div>
      )}
      <label htmlFor="newPassword">Enter new password</label>
      <Input
        id="newPassword"
        name="newPassword"
        type="password"
        value={values.newPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <div>{errors.confirmPassword}</div>
      )}
      <label htmlFor="confirmPassword">Confirm new password</label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Save</Button>
      <Button onClick={onClose}>Cancel</Button>
    </form>
  );
};

export default ChangePasswordForm;
