import { FC, useState } from "react";

import Button from "../../ui/button/Button";
import EditTodoForm from "../../forms/edit-todo-form/EditTodoForm";
import { ITodo } from "../../../models/ITodo";
import { useActions } from "../../../hooks/useActions";

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
        <Button onClick={toggleEditForm}>Edit</Button>
        <Button onClick={deleteTodoHandler}>Delete</Button>
      </div>
    </>
  );
};

export default TodoItem;
