import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  todoFormInitialValues,
  TodoFormValues,
  todoValidationSchema,
} from "../../../validation/todoValidation";

interface AddTodoFormProps {
  onClose: () => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onClose }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<TodoFormValues>({
    initialValues: todoFormInitialValues,
    validationSchema: todoValidationSchema,
    onSubmit: (values) => addTodoHandler(values),
  });
  const { addTodo } = useActions();

  const addTodoHandler = ({ title }: TodoFormValues) => {
    addTodo(title);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Todo title</label>
      <Input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.title}
        error={errors.title}
      />
      <Button type="submit" disabled={!isValid}>
        Add todo
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
};

export default AddTodoForm;
