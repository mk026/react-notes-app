import { FC, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit} onReset={handleReset}>
      {touched.email && errors.email && <div>{errors.email}</div>}
      <label htmlFor="email">Enter your email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <label htmlFor="password">Enter your password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Signin</button>
      <button type="reset">Clear</button>
      <p>
        Don't have an account? <button onClick={switchToSignup}>Signup</button>
      </p>
    </form>
  );
};

export default SigninForm;
