import { FC } from "react";

const SignupForm: FC = () => {
  return (
    <form>
      <label htmlFor="signup-name">Enter your name</label>
      <input id="signup-name" type="text" />
      <label htmlFor="signup-email">Enter your email</label>
      <input id="signup-email" type="text" />
      <label htmlFor="signup-password">Enter your password</label>
      <input id="signup-password" type="text" />
      <label htmlFor="signup-password-confirm">Confirm your password</label>
      <input id="signup-password-confirm" type="text" />
    </form>
  );
};

export default SignupForm;
