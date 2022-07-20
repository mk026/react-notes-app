import * as authActionCreators from "./authActionCreators";
import * as noteActionCreators from "./noteActionCreators";
import * as todoActionCreators from "./todoActionCreators";
import * as userActionCreators from "./userActionCreators";
import * as imageActionCreators from "./imageActionCreators";
import {
  authSlice,
  imageSlice,
  noteSlice,
  todoSlice,
  userSlice,
} from "../reducers";

export const authActions = { ...authActionCreators, ...authSlice.actions };
export const noteActions = { ...noteActionCreators, ...noteSlice.actions };
export const todoActions = { ...todoActionCreators, ...todoSlice.actions };
export const userActions = { ...userActionCreators, ...userSlice.actions };
export const imageActions = { ...imageActionCreators, ...imageSlice.actions };
