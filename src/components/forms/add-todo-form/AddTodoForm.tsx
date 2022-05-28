import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import { useActions } from "../../../hooks/useActions";
import {
  todoFormInitialValues,
  TodoFormValues,
  todoValidationSchema,
} from "../../../validation/todoValidation";

const AddTodoForm: FC = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<TodoFormValues>({
      initialValues: todoFormInitialValues,
      validationSchema: todoValidationSchema,
      onSubmit: (values) => addTodoHandler(values),
    });
  const { addTodo } = useActions();

  const addTodoHandler = ({ title }: TodoFormValues) => {
    addTodo(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <label htmlFor="title">Todo title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Add todo</Button>
    </form>
  );
};

export default AddTodoForm;
