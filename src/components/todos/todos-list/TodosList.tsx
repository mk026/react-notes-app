import { FC, useEffect } from "react";

import TodoItem from "../todo-item/TodoItem";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { getTodoState } from "../../../store/selectors";
import { todoActions } from "../../../store/action-creators";

import classes from "./TodoList.module.scss";

const TodosList: FC = () => {
  const { todos, isLoading, error } = useAppSelector(getTodoState);
  const { fetchTodos } = useActions(todoActions);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!todos.length) {
    return <div>No todos found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={classes["todos-list"]}>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
