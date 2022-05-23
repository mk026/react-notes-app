import { FC, useState } from "react";

import { ITodo } from "../../../models/ITodo";
import { useActions } from "../../../hooks/useActions";
import EditTodoForm from "../../forms/edit-todo-form/EditTodoForm";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTodo } = useActions();

  const toggleEditForm = () => setIsEditing((prev) => !prev);
  const deleteTodoHandler = () => deleteTodo(todo._id);

  return (
    <>
      {isEditing && <EditTodoForm todo={todo} onClose={toggleEditForm} />}
      <div>
        <input type="checkbox" checked={todo.completed} />
        <p>{todo.title}</p>
        <button onClick={toggleEditForm}>Edit</button>
        <button onClick={deleteTodoHandler}>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
