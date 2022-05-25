import { Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";

import { useActions } from "../../../hooks/useActions";

interface SignupFormProps {
  switchToSignin: () => void;
}

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: FC<SignupFormProps> = ({ switchToSignin }) => {
  const { signup } = useActions();

  const initialValues: SignupFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  const signupHandler = ({ name, email, password }: SignupFormValues) => {
    signup(name, email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={signupHandler}
      validateOnBlur
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          {touched.name && errors.name && <div>{errors.name}</div>}
          <label htmlFor="signup-name">Enter your name</label>
          <input
            id="signup-name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <label htmlFor="signup-email">Enter your email</label>
          <input
            id="signup-email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <div>{errors.password}</div>}
          <label htmlFor="signup-password">Enter your password</label>
          <input
            id="signup-password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <div>{errors.confirmPassword}</div>
          )}
          <label htmlFor="signup-password-confirm">Confirm your password</label>
          <input
            id="signup-password-confirm"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Signup</button>
          <p>
            Already have an account?{" "}
            <button onClick={switchToSignin}>Signin</button>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
