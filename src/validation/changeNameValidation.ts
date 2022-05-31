import * as yup from "yup";

import { nameRules } from "./rules";

export interface ChangeNameFormValues {
  name: string;
}

export const changeNameFormInitialValues: ChangeNameFormValues = {
  name: "",
};

export const changeNameValidationSchema = yup.object({
  name: yup
    .string()
    .min(nameRules.minLength)
    .max(nameRules.maxLength)
    .required(),
});
