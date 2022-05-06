import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";
import AuthService from "./services/AuthService";
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./store/action-creators/authActionCreators";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (AuthService.getStoredToken()) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
