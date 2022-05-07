import { AppDispatch } from "..";
import TodoService from "../../services/TodoService";
import { todoSlice } from "../reducers/todoReducer";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.fetchTodos());
    const response = await TodoService.fetchTodos();
    dispatch(todoSlice.actions.fetchTodosSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.fetchTodosError((e as Error).message));
  }
};
