import { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import { useActions } from "../../../hooks/useActions";

interface SigninFormProps {
  switchToSignup: () => void;
}

interface SigninFormValues {
  email: string;
  password: string;
}

const SigninForm: FC<SigninFormProps> = ({ switchToSignup }) => {
  const { signin } = useActions();

  const initialValues: SigninFormValues = { email: "", password: "" };
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const signinHandler = ({ email, password }: SigninFormValues) => {
    signin(email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={signinHandler}
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
          {touched.email && errors.email && <div>{errors.email}</div>}
          <label htmlFor="signin-email">Enter your email</label>
          <input
            id="signin-email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <div>{errors.password}</div>}
          <label htmlFor="signin-password">Enter your password</label>
          <input
            id="signin-password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Signin</button>
          <p>
            Don't have an account?{" "}
            <button onClick={switchToSignup}>Signup</button>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SigninForm;
