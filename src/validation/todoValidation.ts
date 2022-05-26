import * as yup from "yup";

export interface TodoFormValues {
  title: string;
}

export const todoFormInitialValues: TodoFormValues = {
  title: "",
};

export const todoValidationSchema = yup.object({
  title: yup.string().required(),
});
