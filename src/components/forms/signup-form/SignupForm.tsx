import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

const SignupForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useActions();

  const signupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      signup(name, email, password);
    }
  };

  return (
    <form onSubmit={signupHandler}>
      <label htmlFor="signup-name">Enter your name</label>
      <input
        id="signup-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="signup-email">Enter your email</label>
      <input
        id="signup-email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="signup-password">Enter your password</label>
      <input
        id="signup-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="signup-password-confirm">Confirm your password</label>
      <input
        id="signup-password-confirm"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
