import { FC, useState } from "react";

import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";
import Page from "../../components/ui/page/Page";
import FormContainer from "../../components/ui/form-container/FormContainer";

const AuthPage: FC = () => {
  const [isSignin, setIsSignin] = useState(true);

  const switchToSignupHandler = () => setIsSignin(false);
  const switchToSigninHandler = () => setIsSignin(true);

  const activeForm = isSignin ? (
    <SigninForm switchToSignup={switchToSignupHandler} />
  ) : (
    <SignupForm switchToSignin={switchToSigninHandler} />
  );

  return (
    <Page>
      <FormContainer>{activeForm}</FormContainer>
    </Page>
  );
};

export default AuthPage;
