import * as yup from "yup";

export interface ChangeEmailFormValues {
  email: string;
}

export const changeEmailFormInitialValues: ChangeEmailFormValues = {
  email: "",
};

export const changeEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
});
