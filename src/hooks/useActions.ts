import { bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch } from "./redux";
import * as actions from "../store/action-creators";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
