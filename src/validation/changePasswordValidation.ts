import * as yup from "yup";

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const changePasswordFormInitialValues: ChangePasswordFormValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const changePasswordValidationSchema = yup.object({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword")], "Passwords are not equal"),
});
