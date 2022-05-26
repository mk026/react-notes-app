import * as yup from "yup";

export interface NoteFormValues {
  title: string;
  content: string;
}

export const noteFormInitialValues: NoteFormValues = {
  title: "",
  content: "",
};

export const noteValidationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
});
