import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

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
    signinSuccess(state) {
      state.isAuth = true;
      state.isLoading = false;
    },
    signinError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signup(state) {
      state.isLoading = true;
    },
    signupSuccess(state) {
      state.isAuth = true;
      state.isLoading = false;
    },
    signupError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signout(state) {
      state.isAuth = false;
      AuthService.removeStoredToken();
    },
    checkAuth(state) {
      state.isLoading = true;
    },
    checkAuthSuccess(state) {
      state.isAuth = true;
      state.isLoading = false;
    },
    checkAuthError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
