import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { ITodo } from "../../../models/ITodo";
import { useActions } from "../../../hooks/useActions";
import { todoActions } from "../../../store/action-creators";
import {
  TodoFormValues,
  todoValidationSchema,
} from "../../../validation/todoValidation";

interface EditTodoFormProps {
  todo: ITodo;
  onClose: () => void;
}

const EditTodoForm: FC<EditTodoFormProps> = ({ todo, onClose }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<TodoFormValues>({
    initialValues: { title: todo.title },
    validationSchema: todoValidationSchema,
    onSubmit: (values) => editTodoHandler(values),
  });
  const { updateTodo } = useActions(todoActions);

  const editTodoHandler = ({ title }: TodoFormValues) => {
    updateTodo({ ...todo, title });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Enter new todo title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.title}
        error={errors.title}
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

export default EditTodoForm;
