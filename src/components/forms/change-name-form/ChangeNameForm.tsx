import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  changeNameFormInitialValues,
  ChangeNameFormValues,
  changeNameValidationSchema,
} from "../../../validation/changeNameValidation";

interface ChangeNameFormProps {
  onClose: () => void;
}

const ChangeNameForm: FC<ChangeNameFormProps> = ({ onClose }) => {
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
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Change name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Save</Button>
      <Button onClick={onClose}>Cancel</Button>
    </form>
  );
};

export default ChangeNameForm;
