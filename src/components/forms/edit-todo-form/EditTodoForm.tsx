import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";
import { ITodo } from "../../../models/ITodo";

interface EditTodoFormProps {
  todo: ITodo;
  onClose: () => void;
}

const EditTodoForm: FC<EditTodoFormProps> = ({ todo, onClose }) => {
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
      <button onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTodoForm;
