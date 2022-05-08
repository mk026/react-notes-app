import { FC, FormEvent, useState } from "react";

import { useAppDispatch } from "../../../hooks/redux";
import { addTodo } from "../../../store/action-creators/todoActionCreators";

const AddTodoForm: FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(title));
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
