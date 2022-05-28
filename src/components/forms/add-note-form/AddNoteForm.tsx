import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import { useActions } from "../../../hooks/useActions";
import {
  noteFormInitialValues,
  NoteFormValues,
  noteValidationSchema,
} from "../../../validation/noteValidation";

const AddNoteForm: FC = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<NoteFormValues>({
      initialValues: noteFormInitialValues,
      validationSchema: noteValidationSchema,
      onSubmit: (values) => addNoteHandler(values),
    });
  const { addNote } = useActions();

  const addNoteHandler = ({ title, content }: NoteFormValues) => {
    addNote(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <label htmlFor="title">Note title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.content && errors.content && <div>{errors.content}</div>}
      <label htmlFor="content">Note content</label>
      <input
        id="content"
        name="content"
        type="text"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Add todo</Button>
    </form>
  );
};

export default AddNoteForm;
