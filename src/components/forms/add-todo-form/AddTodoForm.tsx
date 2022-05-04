import { FC } from "react";

const AddTodoForm: FC = () => {
  return (
    <form>
      <label htmlFor="todo-title">Todo title</label>
      <input id="todo-title" type="text" />
    </form>
  );
};

export default AddTodoForm;
