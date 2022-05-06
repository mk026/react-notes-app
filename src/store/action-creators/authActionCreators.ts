import { AppDispatch } from "..";
import AuthService from "../../services/AuthService";
import { authSlice } from "../reducers/authReducer";

export const signin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.signin());
      const response = await AuthService.signin(email, password);
      dispatch(authSlice.actions.signinSuccess(response.data));
    } catch (e) {
      dispatch(authSlice.actions.signinError((e as Error).message));
    }
  };
