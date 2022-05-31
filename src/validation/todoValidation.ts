import * as yup from "yup";

import { todoRules } from "./rules";

export interface TodoFormValues {
  title: string;
}

export const todoFormInitialValues: TodoFormValues = {
  title: "",
};

export const todoValidationSchema = yup.object({
  title: yup
    .string()
    .min(todoRules.title.minLength)
    .max(todoRules.title.maxLength)
    .required(),
});
