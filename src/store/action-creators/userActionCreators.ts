import { AppDispatch } from "..";
import UserService from "../../services/UserService";
import { userSlice } from "../reducers/userReducer";

export const updateName = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchUser());
    const response = await UserService.updateName(name);
    dispatch(userSlice.actions.fetchUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.fetchUserError((e as Error).message));
  }
};

export const updateEmail = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchUser());
    const response = await UserService.updateEmail(email);
    dispatch(userSlice.actions.fetchUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.fetchUserError((e as Error).message));
  }
};

export const updatePassword =
  (oldPassword: string, newPassword: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchUser());
      const response = await UserService.updatePassword(
        oldPassword,
        newPassword
      );
      dispatch(userSlice.actions.fetchUserSuccess(response.data));
    } catch (e) {
      dispatch(userSlice.actions.fetchUserError((e as Error).message));
    }
  };
