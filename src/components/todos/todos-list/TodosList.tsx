import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchTodos } from "../../../store/action-creators/todoActionCreators";
import { getTodoState } from "../../../store/selectors/todoSelectors";
import TodoItem from "../todo-item/TodoItem";

const TodosList: FC = () => {
  const { todos, isLoading, error } = useAppSelector(getTodoState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
