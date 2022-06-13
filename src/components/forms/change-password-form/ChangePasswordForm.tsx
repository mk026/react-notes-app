import { FC } from "react";
import { useFormik } from "formik";

import Form from "../../ui/form/Form";
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
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<ChangePasswordFormValues>({
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
    <Form onSubmit={handleSubmit}>
      <label htmlFor="oldPassword">Enter your current password</label>
      <Input
        id="oldPassword"
        name="oldPassword"
        type="password"
        value={values.oldPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.oldPassword}
        error={errors.oldPassword}
      />
      <label htmlFor="newPassword">Enter new password</label>
      <Input
        id="newPassword"
        name="newPassword"
        type="password"
        value={values.newPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.newPassword}
        error={errors.newPassword}
      />
      <label htmlFor="confirmPassword">Confirm new password</label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.confirmPassword}
        error={errors.confirmPassword}
      />
      <Button type="submit" disabled={!isValid}>
        Save
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default ChangePasswordForm;
