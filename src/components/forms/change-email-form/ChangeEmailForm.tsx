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

const ChangeEmailForm: FC = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<ChangeEmailFormValues>({
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
      {touched.email && errors.email && <div>{errors.email}</div>}
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="Change email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default ChangeEmailForm;
