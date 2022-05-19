import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";
import AuthService from "./services/AuthService";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/redux";
import { getAuthState } from "./store/selectors";

function App() {
  const { checkAuth } = useActions();
  const { isLoading } = useAppSelector(getAuthState);

  useEffect(() => {
    if (AuthService.getStoredToken()) {
      checkAuth();
    }
  }, [checkAuth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
