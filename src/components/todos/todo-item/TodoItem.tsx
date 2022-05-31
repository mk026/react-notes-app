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
  const { updateTodo, deleteTodo } = useActions();

  const toggleEditForm = () => setIsEditing((prev) => !prev);
  const deleteTodoHandler = () => deleteTodo(todo._id);
  const changeTodoStatus = () =>
    updateTodo({ ...todo, completed: !todo.completed });

  return (
    <>
      {isEditing && <EditTodoForm todo={todo} onClose={toggleEditForm} />}
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={changeTodoStatus}
        />
        <p>{todo.title}</p>
        <Button onClick={toggleEditForm}>Edit</Button>
        <Button onClick={deleteTodoHandler}>Delete</Button>
      </div>
    </>
  );
};

export default TodoItem;
