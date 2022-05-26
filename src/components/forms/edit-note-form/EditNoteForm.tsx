import { FC } from "react";
import { useFormik } from "formik";

import { useActions } from "../../../hooks/useActions";
import { INote } from "../../../models/INote";
import {
  noteFormInitialValues,
  NoteFormValues,
  noteValidationSchema,
} from "../../../validation/noteValidation";

interface EditNoteFormProps {
  note: INote;
  onClose: () => void;
}

const EditNoteForm: FC<EditNoteFormProps> = ({ note, onClose }) => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<NoteFormValues>({
      initialValues: noteFormInitialValues,
      validationSchema: noteValidationSchema,
      onSubmit: (values) => editNoteHandler(values),
    });
  const { updateNote } = useActions();

  const editNoteHandler = ({ title, content }: NoteFormValues) => {
    updateNote({ _id: note._id, title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <label htmlFor="title">New note title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.content && errors.content && <div>{errors.content}</div>}
      <label htmlFor="content">New note content</label>
      <input
        id="content"
        name="content"
        type="text"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Save</button>
      <button onClick={onClose}>Close</button>
    </form>
  );
};

export default EditNoteForm;
