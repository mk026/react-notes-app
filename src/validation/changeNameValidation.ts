import * as yup from "yup";

export interface ChangeNameFormValues {
  name: string;
}

export const changeNameFormInitialValues: ChangeNameFormValues = {
  name: "",
};

export const changeNameValidationSchema = yup.object({
  name: yup.string().required(),
});
