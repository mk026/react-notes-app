import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: true,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    enableLoading(state) {
      state.isLoading = true;
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
