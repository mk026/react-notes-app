import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";
import AuthService from "./services/AuthService";
import { useActions } from "./hooks/useActions";

function App() {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (AuthService.getStoredToken()) {
      checkAuth();
    }
  }, [checkAuth]);

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
