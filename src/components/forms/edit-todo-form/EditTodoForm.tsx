import { FC } from "react";
import { useFormik } from "formik";

import { useActions } from "../../../hooks/useActions";
import { ITodo } from "../../../models/ITodo";
import {
  todoFormInitialValues,
  TodoFormValues,
  todoValidationSchema,
} from "../../../validation/todoValidation";

interface EditTodoFormProps {
  todo: ITodo;
  onClose: () => void;
}

const EditTodoForm: FC<EditTodoFormProps> = ({ todo, onClose }) => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<TodoFormValues>({
      initialValues: todoFormInitialValues,
      validationSchema: todoValidationSchema,
      onSubmit: (values) => editTodoHandler(values),
    });
  const { updateTodo } = useActions();

  const editTodoHandler = ({ title }: TodoFormValues) => {
    updateTodo({ ...todo, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Enter new todo title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Save</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTodoForm;
