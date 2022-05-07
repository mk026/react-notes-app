import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "../../models/ITodo";

interface TodosState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTodos(state) {
      state.isLoading = true;
    },
    fetchTodosSuccess(state, action: PayloadAction<ITodo[]>) {
      state.isLoading = false;
      state.todos = action.payload;
    },
    fetchTodosError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodo(state) {
      state.isLoading = true;
    },
    addTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    addTodoError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTodo(state) {
      state.isLoading = true;
    },
    updateTodoSuccess(state, action: PayloadAction<ITodo>) {
      const todoId = action.payload.id;
      const oldTodoIdx = state.todos.findIndex((todo) => todo.id === todoId);
      state.todos[oldTodoIdx] = action.payload;
      state.isLoading = false;
    },
    updateTodoError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
