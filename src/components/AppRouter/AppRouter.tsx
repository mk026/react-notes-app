import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import AccountPage from "../../pages/AccountPage/AccountPage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import HomePage from "../../pages/HomePage/HomePage";
import NotesPage from "../../pages/NotesPage/NotesPage";
import TodosPage from "../../pages/TodosPage/TodosPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="notes" element={<NotesPage />} />
      <Route path="todos" element={<TodosPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouter;
