import { FC, useEffect } from "react";

import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { getTodoState } from "../../../store/selectors";
import TodoItem from "../todo-item/TodoItem";

const TodosList: FC = () => {
  const { todos, isLoading, error } = useAppSelector(getTodoState);
  const { fetchTodos } = useActions();

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
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
