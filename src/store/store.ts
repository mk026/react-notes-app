import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducer";
import { noteSlice } from "./reducers/noteReducer";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  note: noteSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });
