import { AppDispatch } from "..";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import { authSlice, userSlice } from "../reducers";

export const updateName = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.enableLoading());
    const response = await UserService.updateName(name);
    dispatch(userSlice.actions.fetchUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.setError((e as Error).message));
  }
};

export const updateEmail = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.enableLoading());
    const response = await UserService.updateEmail(email);
    dispatch(userSlice.actions.fetchUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.setError((e as Error).message));
  }
};

export const updatePassword =
  (oldPassword: string, newPassword: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.enableLoading());
      const response = await UserService.updatePassword(
        oldPassword,
        newPassword
      );
      dispatch(userSlice.actions.fetchUserSuccess(response.data));
    } catch (e) {
      dispatch(userSlice.actions.setError((e as Error).message));
    }
  };

export const deleteAccount = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.enableLoading());
    await UserService.deleteAccount();
    dispatch(userSlice.actions.removeUserSuccess());
    AuthService.removeStoredToken();
    dispatch(authSlice.actions.signout());
  } catch (e) {
    dispatch(userSlice.actions.setError((e as Error).message));
  }
};
