import { createSlice } from "@reduxjs/toolkit";

import { ITodo } from "../../models/ITodo";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
