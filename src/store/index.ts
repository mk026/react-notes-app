import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authSlice, userSlice, noteSlice, todoSlice } from "./reducers";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  note: noteSlice.reducer,
  todo: todoSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
