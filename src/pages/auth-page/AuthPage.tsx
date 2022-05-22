import { FC, useState } from "react";

import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";
import Page from "../../components/ui/page/Page";

const AuthPage: FC = () => {
  const [isSignin, setIsSignin] = useState(true);

  const switchToSignupHandler = () => setIsSignin(false);
  const switchToSigninHandler = () => setIsSignin(true);

  const activeForm = isSignin ? (
    <SigninForm switchToSignup={switchToSignupHandler} />
  ) : (
    <SignupForm switchToSignin={switchToSigninHandler} />
  );

  return <Page>{activeForm}</Page>;
};

export default AuthPage;
