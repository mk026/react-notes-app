import { FC, useState } from "react";

import AddTodoForm from "../../components/forms/add-todo-form/AddTodoForm";
import TodosList from "../../components/todos/todos-list/TodosList";
import Button from "../../components/ui/button/Button";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const TodosPage: FC = () => {
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const toggleAddTodoFormHandler = () => setIsAddingTodo((prev) => !prev);

  return (
    <Page>
      <PageTop>
        <h1>Todos</h1>
        <Button onClick={toggleAddTodoFormHandler}>Add new todo</Button>
      </PageTop>
      {isAddingTodo && <AddTodoForm onClose={toggleAddTodoFormHandler} />}
      <TodosList />
    </Page>
  );
};

export default TodosPage;
