import { AppDispatch } from "..";
import { ITodo } from "../../models/ITodo";
import TodoService from "../../services/TodoService";
import { todoSlice } from "../reducers";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.fetchTodos());
    const response = await TodoService.fetchTodos();
    dispatch(todoSlice.actions.fetchTodosSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.fetchTodosError((e as Error).message));
  }
};

export const addTodo = (title: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.addTodo());
    const response = await TodoService.addTodo(title);
    dispatch(todoSlice.actions.addTodoSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.addTodoError((e as Error).message));
  }
};

export const updateTodo = (todo: ITodo) => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.updateTodo());
    const response = await TodoService.updateTodo(todo);
    dispatch(todoSlice.actions.updateTodoSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.updateTodoError((e as Error).message));
  }
};

export const deleteTodo = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.deleteTodo());
    const response = await TodoService.deleteTodo(id);
    dispatch(todoSlice.actions.deleteTodoSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.deleteTodoError((e as Error).message));
  }
};
