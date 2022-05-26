import { FC } from "react";
import { useFormik } from "formik";

import {
  changePasswordFormInitialValues,
  ChangePasswordFormValues,
  changePasswordValidationSchema,
} from "../../../validation/changePasswordValidation";
import { useActions } from "../../../hooks/useActions";

const ChangePasswordForm: FC = () => {
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
      <input
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
      <input
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
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangePasswordForm;
