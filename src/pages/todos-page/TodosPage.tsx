import { FC } from "react";
import AddTodoForm from "../../components/forms/add-todo-form/AddTodoForm";

import TodosList from "../../components/todos/todos-list/TodosList";

const TodosPage: FC = () => {
  return (
    <div>
      <h1>Todos</h1>
      <AddTodoForm />
      <TodosList />
    </div>
  );
};

export default TodosPage;
