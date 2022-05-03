import { FC } from "react";
import { ITodo } from "../../../models/ITodo";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;
