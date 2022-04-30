import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Todos from "./pages/Todos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="notes" element={<Notes />} />
        <Route path="todos" element={<Todos />} />
        <Route path="account" element={<Account />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
