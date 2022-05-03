import { FC } from "react";

import TodosList from "../../components/todos/todos-list/TodosList";

const TodosPage: FC = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodosList />
    </div>
  );
};

export default TodosPage;
