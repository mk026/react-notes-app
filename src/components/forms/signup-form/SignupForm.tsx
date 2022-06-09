import { FC, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  signupFormInitialValues,
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { Paths } from "../../../routes/types";
import { useAppSelector } from "../../../hooks/redux";
import { getAuthState } from "../../../store/selectors";

interface SignupFormProps {
  switchToSignin: () => void;
}

const SignupForm: FC<SignupFormProps> = ({ switchToSignin }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik<SignupFormValues>({
    initialValues: signupFormInitialValues,
    validationSchema: signupValidationSchema,
    onSubmit: (values) => signupHandler(values),
  });
  const { signup } = useActions();
  const { isAuth } = useAppSelector(getAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(Paths.HOME_PATH, { replace: true });
    }
  }, [isAuth, navigate]);

  const signupHandler = ({ name, email, password }: SignupFormValues) => {
    signup(name, email, password);
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      {touched.name && errors.name && <div>{errors.name}</div>}
      <label htmlFor="name">Enter your name</label>
      <Input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <label htmlFor="email">Enter your email</label>
      <Input
        id="email"
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <label htmlFor="password">Enter your password</label>
      <Input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <div>{errors.confirmPassword}</div>
      )}
      <label htmlFor="confirmPassword">Confirm your password</label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Signup</Button>
      <Button type="reset">Clear</Button>
      <p>
        Already have an account?{" "}
        <button onClick={switchToSignin}>Signin</button>
      </p>
    </Form>
  );
};

export default SignupForm;
