import { createSlice } from "@reduxjs/toolkit";

interface TodosState {
  todos: any[];
}

const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
