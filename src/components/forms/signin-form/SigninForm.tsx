import { FC } from "react";

const SigninForm: FC = () => {
  return (
    <form>
      <label htmlFor="signin-name">Enter your name</label>
      <input id="signin-name" type="text" />
      <label htmlFor="signin-password">Enter your password</label>
      <input id="signin-password" type="text" />
    </form>
  );
};

export default SigninForm;
