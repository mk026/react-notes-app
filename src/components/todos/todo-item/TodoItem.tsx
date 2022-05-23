import { FC, useState } from "react";

import { ITodo } from "../../../models/ITodo";
import EditTodoForm from "../../forms/edit-todo-form/EditTodoForm";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditForm = () => setIsEditing((prev) => !prev);

  return (
    <>
      {isEditing && <EditTodoForm todo={todo} />}
      <div>
        <input type="checkbox" checked={todo.completed} />
        <p>{todo.title}</p>
        <button onClick={toggleEditForm}>Edit</button>
      </div>
    </>
  );
};

export default TodoItem;
