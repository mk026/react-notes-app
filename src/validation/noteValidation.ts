import * as yup from "yup";

import { noteRules } from "./rules";

export interface NoteFormValues {
  title: string;
  content: string;
}

export const noteFormInitialValues: NoteFormValues = {
  title: "",
  content: "",
};

export const noteValidationSchema = yup.object({
  title: yup
    .string()
    .min(noteRules.title.minLength)
    .max(noteRules.title.maxLength)
    .required(),
  content: yup
    .string()
    .min(noteRules.content.minLength)
    .max(noteRules.content.maxLength)
    .required(),
});
