import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

const AddTodoForm: FC = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useActions();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <label htmlFor="todo-title">Todo title</label>
      <input
        id="todo-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodoForm;
