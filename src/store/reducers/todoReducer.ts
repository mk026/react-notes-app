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
  },
});
