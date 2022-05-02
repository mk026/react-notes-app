import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./reducers/authReducer";
import { noteSlice } from "./reducers/noteReducer";
import { todoSlice } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  note: noteSlice.reducer,
  todo: todoSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });
