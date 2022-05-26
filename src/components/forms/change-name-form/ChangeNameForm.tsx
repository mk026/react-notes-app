import { FC } from "react";
import { useFormik } from "formik";

import { useActions } from "../../../hooks/useActions";
import {
  changeNameFormInitialValues,
  ChangeNameFormValues,
  changeNameValidationSchema,
} from "../../../validation/changeNameValidation";

const ChangeNameForm: FC = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<ChangeNameFormValues>({
      initialValues: changeNameFormInitialValues,
      validationSchema: changeNameValidationSchema,
      onSubmit: (values) => changeNameHandler(values),
    });
  const { updateName } = useActions();

  const changeNameHandler = ({ name }: ChangeNameFormValues) => {
    updateName(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.name && errors.name && <div>{errors.name}</div>}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Change name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangeNameForm;
