import { FC } from "react";
import { useFormik } from "formik";

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
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Change email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangeEmailForm;
