import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  changeEmailFormInitialValues,
  ChangeEmailFormValues,
  changeEmailValidationSchema,
} from "../../../validation/changeEmailValidation";

interface ChangeEmailFormProps {
  onClose: () => void;
}

const ChangeEmailForm: FC<ChangeEmailFormProps> = ({ onClose }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<ChangeEmailFormValues>({
    initialValues: changeEmailFormInitialValues,
    validationSchema: changeEmailValidationSchema,
    onSubmit: (values) => changeEmailHandler(values),
  });
  const { updateEmail } = useActions();

  const changeEmailHandler = ({ email }: ChangeEmailFormValues) => {
    updateEmail(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="Change email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.email}
        error={errors.email}
      />
      <Button type="submit" disabled={!isValid}>
        Save
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
};

export default ChangeEmailForm;
