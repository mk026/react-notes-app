import axios from "axios";
import { AppDispatch } from "..";
import { IUser } from "../../models/IUser";
import { authSlice } from "../reducers/authReducer";

export const signin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.signin());
      const response = await axios.post<IUser>("http://localhost:8080/api", {
        email,
        password,
      });
      dispatch(authSlice.actions.signinSuccess(response.data));
    } catch (e) {
      dispatch(authSlice.actions.signinError(e as string));
    }
  };
