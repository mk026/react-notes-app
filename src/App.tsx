import { useEffect } from "react";

import Header from "./components/header/Header";
import AppRouter from "./components/routing/app-router/AppRouter";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/redux";
import { getAuthState } from "./store/selectors";
import { authActions } from "./store/action-creators";

function App() {
  const { checkAuth } = useActions(authActions);
  const { isChecking } = useAppSelector(getAuthState);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isChecking) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
