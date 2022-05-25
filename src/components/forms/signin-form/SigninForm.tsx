import { FC } from "react";
import { useFormik } from "formik";
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
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<SigninFormValues>({
      initialValues: { email: "", password: "" },
      validationSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }),
      onSubmit: (values) => signinHandler(values),
    });
  const { signin } = useActions();

  const signinHandler = ({ email, password }: SigninFormValues) => {
    signin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <p>
        Don't have an account? <button onClick={switchToSignup}>Signup</button>
      </p>
    </form>
  );
};

export default SigninForm;
