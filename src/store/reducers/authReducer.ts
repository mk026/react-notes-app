import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state) {
      state.isLoading = true;
    },
    signinSuccess(state, action: PayloadAction) {
      state.isAuth = true;
      state.isLoading = false;
    },
    signinError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signout(state) {
      state.isAuth = false;
    },
  },
});
