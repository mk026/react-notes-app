import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });
