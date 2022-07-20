import { FC, useState } from "react";

import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import EditTodoForm from "../../forms/edit-todo-form/EditTodoForm";
import { ITodo } from "../../../models/ITodo";
import { useActions } from "../../../hooks/useActions";
import { todoActions } from "../../../store/action-creators";

import classes from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodo, deleteTodo } = useActions(todoActions);

  const toggleEditForm = () => setIsEditing((prev) => !prev);
  const deleteTodoHandler = () => deleteTodo(todo._id);
  const changeTodoStatus = () =>
    updateTodo({ ...todo, completed: !todo.completed });

  return (
    <Card className={classes.todo}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={changeTodoStatus}
      />
      {isEditing && <EditTodoForm todo={todo} onClose={toggleEditForm} />}
      {!isEditing && <p className={classes["todo__title"]}>{todo.title}</p>}
      <div className={classes["todo__controls"]}>
        <Button onClick={toggleEditForm}>Edit</Button>
        <Button onClick={deleteTodoHandler}>Delete</Button>
      </div>
    </Card>
  );
};

export default TodoItem;
