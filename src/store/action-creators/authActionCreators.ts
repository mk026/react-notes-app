import { AppDispatch } from "..";
import AuthService from "../../services/AuthService";
import { authSlice } from "../reducers";
import { userSlice } from "../reducers";

export const signin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.signin());
      const response = await AuthService.signin(email, password);
      AuthService.storeToken(response.data.token);
      dispatch(userSlice.actions.setUser(response.data.user));
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
      dispatch(userSlice.actions.setUser(response.data.user));
      dispatch(authSlice.actions.signupSuccess());
    } catch (e) {
      dispatch(authSlice.actions.signupError((e as Error).message));
    }
  };

export const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    if (AuthService.getStoredToken()) {
      const response = await AuthService.checkAuth();
      AuthService.storeToken(response.data.token);
      dispatch(userSlice.actions.setUser(response.data.user));
      dispatch(authSlice.actions.checkAuthSuccess());
    } else {
      dispatch(authSlice.actions.disableLoading());
    }
  } catch (e) {
    AuthService.removeStoredToken();
    dispatch(authSlice.actions.checkAuthError((e as Error).message));
  }
};

export const signout = () => (dispatch: AppDispatch) => {
  AuthService.removeStoredToken();
  dispatch(userSlice.actions.removeUser());
  dispatch(authSlice.actions.signout());
};
