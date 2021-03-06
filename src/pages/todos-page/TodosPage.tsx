import { FC, useState } from "react";

import AddTodoForm from "../../components/forms/add-todo-form/AddTodoForm";
import TodosList from "../../components/todos/todos-list/TodosList";
import Button from "../../components/ui/button/Button";
import Modal from "../../components/ui/modal/Modal";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const TodosPage: FC = () => {
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const toggleAddTodoFormHandler = () => setIsAddingTodo((prev) => !prev);

  return (
    <Page>
      <PageTop title="My Todos">
        <Button onClick={toggleAddTodoFormHandler}>Add new todo</Button>
      </PageTop>
      <Modal isActive={isAddingTodo} onClose={toggleAddTodoFormHandler}>
        <AddTodoForm onClose={toggleAddTodoFormHandler} />
      </Modal>
      <TodosList />
    </Page>
  );
};

export default TodosPage;
