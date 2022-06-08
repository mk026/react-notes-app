import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch } from "./redux";
import * as actionCreators from "../store/action-creators";
import { authSlice, noteSlice, todoSlice, userSlice } from "../store/reducers";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...actionCreators,
          ...authSlice.actions,
          ...userSlice.actions,
          ...noteSlice.actions,
          ...todoSlice.actions,
        },
        dispatch
      ),
    [dispatch]
  );
};
