import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./reducers/authReducer";
import { noteSlice } from "./reducers/noteReducer";
import { todoSlice } from "./reducers/todoReducer";
import { userSlice } from "./reducers/userReducer";

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
