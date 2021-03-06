import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../models/IUser";

interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    enableLoading(state) {
      state.isLoading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    removeUserSuccess(state) {
      state.isLoading = false;
      state.user = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
