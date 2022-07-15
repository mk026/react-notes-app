import * as yup from "yup";

import { imageRules } from "./rules";

export interface ImageFormValues {
  title: string;
  description: string;
}

export const imageFormInitialValues: ImageFormValues = {
  title: "",
  description: "",
};

export const imageValidationSchema = yup.object({
  title: yup
    .string()
    .min(imageRules.title.minLength)
    .max(imageRules.title.maxLength)
    .required(),
  description: yup
    .string()
    .min(imageRules.description.minLength)
    .max(imageRules.description.maxLength)
    .required(),
});
