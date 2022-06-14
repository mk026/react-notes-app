import { FC, useState } from "react";

import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";
import Page from "../../components/ui/page/Page";
import FormContainer from "../../components/ui/form-container/FormContainer";
import { useLocation } from "react-router-dom";
import { Paths } from "../../routes";

const AuthPage: FC = () => {
  const [isSignin, setIsSignin] = useState(true);
  const { state } = useLocation();

  const switchToSignupHandler = () => setIsSignin(false);
  const switchToSigninHandler = () => setIsSignin(true);

  const redirectPath = (state as { from?: Paths })?.from || Paths.HOME_PATH;

  const activeForm = isSignin ? (
    <SigninForm
      switchToSignup={switchToSignupHandler}
      redirectPath={redirectPath}
    />
  ) : (
    <SignupForm
      switchToSignin={switchToSigninHandler}
      redirectPath={redirectPath}
    />
  );

  return (
    <Page>
      <FormContainer>{activeForm}</FormContainer>
    </Page>
  );
};

export default AuthPage;
