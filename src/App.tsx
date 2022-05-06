import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
import { useAppDispatch } from "./hooks/redux";
import { authSlice } from "./store/reducers/authReducer";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (AuthService.getStoredToken()) {
      dispatch(authSlice.actions.signinSuccess());
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
