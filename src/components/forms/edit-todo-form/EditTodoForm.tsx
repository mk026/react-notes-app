import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";
import { ITodo } from "../../../models/ITodo";

interface EditTodoFormProps {
  todo: ITodo;
}

const EditTodoForm: FC<EditTodoFormProps> = ({ todo }) => {
  const [title, setTitle] = useState("");
  const { updateTodo } = useActions();

  const editTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo({ ...todo, title });
  };

  return (
    <form onSubmit={editTodoHandler}>
      <input
        type="text"
        placeholder="Enter new todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTodoForm;
