import { FC } from "react";

import AddTodoForm from "../../components/forms/add-todo-form/AddTodoForm";
import TodosList from "../../components/todos/todos-list/TodosList";
import Page from "../../components/ui/page/Page";

const TodosPage: FC = () => {
  return (
    <Page>
      <h1>Todos</h1>
      <AddTodoForm />
      <TodosList />
    </Page>
  );
};

export default TodosPage;
