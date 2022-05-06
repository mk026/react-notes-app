import { AppDispatch } from "..";
import AuthService from "../../services/AuthService";
import { authSlice } from "../reducers/authReducer";

export const signin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.signin());
      const response = await AuthService.signin(email, password);
      AuthService.storeToken(response.data.token);
      dispatch(authSlice.actions.signinSuccess());
    } catch (e) {
      dispatch(authSlice.actions.signinError((e as Error).message));
    }
  };

export const signup =
  (name: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.signup());
      const response = await AuthService.signup(name, email, password);
      AuthService.storeToken(response.data.token);
      dispatch(authSlice.actions.signupSuccess());
    } catch (e) {
      dispatch(authSlice.actions.signupError((e as Error).message));
    }
  };

export const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.checkAuth());
    const response = await AuthService.checkAuth();
    AuthService.storeToken(response.data.token);
    dispatch(authSlice.actions.checkAuthSuccess());
  } catch (e) {
    dispatch(authSlice.actions.checkAuthError((e as Error).message));
  }
};
