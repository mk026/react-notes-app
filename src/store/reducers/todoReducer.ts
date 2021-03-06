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
    enableLoading(state) {
      state.isLoading = true;
    },
    fetchTodosSuccess(state, action: PayloadAction<ITodo[]>) {
      state.isLoading = false;
      state.todos = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    updateTodoSuccess(state, action: PayloadAction<ITodo>) {
      const todoId = action.payload._id;
      const oldTodoIdx = state.todos.findIndex((todo) => todo._id === todoId);
      state.todos[oldTodoIdx] = action.payload;
      state.isLoading = false;
    },
    deleteTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.isLoading = false;
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
  },
});
