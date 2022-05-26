import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  isChecking: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  isChecking: true,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    enableLoading(state) {
      state.isLoading = true;
    },
    checkAuthStart(state) {
      state.isChecking = true;
    },
    checkAuthEnd(state, action: PayloadAction<boolean>) {
      state.isChecking = false;
      state.isAuth = action.payload;
    },
    checkAuthError(state, action: PayloadAction<string>) {
      state.isChecking = false;
      state.error = action.payload;
    },
    authSuccess(state) {
      state.isAuth = true;
      state.isLoading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signout(state) {
      state.isAuth = false;
    },
    disableLoading(state) {
      state.isLoading = false;
    },
  },
});
