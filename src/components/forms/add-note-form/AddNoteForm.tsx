import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useActions } from "../../../hooks/useActions";
import {
  noteFormInitialValues,
  NoteFormValues,
  noteValidationSchema,
} from "../../../validation/noteValidation";

interface AddNoteFormProps {
  onClose: () => void;
}

const AddNoteForm: FC<AddNoteFormProps> = ({ onClose }) => {
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
      <Input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.content && errors.content && <div>{errors.content}</div>}
      <label htmlFor="content">Note content</label>
      <Input
        id="content"
        name="content"
        type="text"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit">Add note</Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
};

export default AddNoteForm;
