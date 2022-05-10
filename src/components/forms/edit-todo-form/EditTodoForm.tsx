import { FC } from "react";

const EditTodoForm: FC = () => {
  return (
    <form>
      <input type="text" placeholder="Enter new todo title" />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTodoForm;
