import { FC } from "react";
import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";

const AuthPage: FC = () => {
  return (
    <div>
      <SignupForm />
      <SigninForm />
    </div>
  );
};

export default AuthPage;
