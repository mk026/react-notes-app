import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state) {
      state.isLoading = true;
    },
    signinSuccess(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    signinError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signup(state) {
      state.isLoading = true;
    },
    signupSuccess(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    signupError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signout(state) {
      state.isAuth = false;
    },
  },
});
