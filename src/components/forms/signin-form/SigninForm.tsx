import { FC, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  signinFormInitialValues,
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { Paths } from "../../../routes/types";
import { useAppSelector } from "../../../hooks/redux";
import { getAuthState } from "../../../store/selectors";

interface SigninFormProps {
  switchToSignup: () => void;
}

const SigninForm: FC<SigninFormProps> = ({ switchToSignup }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik<SigninFormValues>({
    initialValues: signinFormInitialValues,
    validationSchema: signinValidationSchema,
    onSubmit: (values) => signinHandler(values),
  });
  const { signin } = useActions();
  const { isAuth } = useAppSelector(getAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(Paths.HOME_PATH, { replace: true });
    }
  }, [isAuth, navigate]);

  const signinHandler = ({ email, password }: SigninFormValues) => {
    signin(email, password);
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor="email">Enter your email</label>
      <Input
        id="email"
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.email}
        error={errors.email}
      />
      <label htmlFor="password">Enter your password</label>
      <Input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.password}
        error={errors.password}
      />
      <Button type="submit">Signin</Button>
      <Button type="reset">Clear</Button>
      <p>
        Don't have an account? <button onClick={switchToSignup}>Signup</button>
      </p>
    </Form>
  );
};

export default SigninForm;
