import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

interface SigninFormProps {
  switchToSignup: () => void;
}

const SigninForm: FC<SigninFormProps> = ({ switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useActions();

  const signinHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <form onSubmit={signinHandler}>
      <label htmlFor="signin-email">Enter your email</label>
      <input
        id="signin-email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="signin-password">Enter your password</label>
      <input
        id="signin-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signin</button>
      <p>
        Don't have an account? <button onClick={switchToSignup}>Signup</button>
      </p>
    </form>
  );
};

export default SigninForm;
