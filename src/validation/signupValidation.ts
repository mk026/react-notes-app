import * as yup from "yup";

import { nameRules, passwordRules } from "./rules";

export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupFormInitialValues: SignupFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const signupValidationSchema = yup.object({
  name: yup
    .string()
    .min(nameRules.minLength)
    .max(nameRules.maxLength)
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(passwordRules.minLength)
    .max(passwordRules.maxLength)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
