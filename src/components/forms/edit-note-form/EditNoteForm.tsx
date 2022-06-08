import { FC } from "react";
import { useFormik } from "formik";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import { INote } from "../../../models/INote";
import { useActions } from "../../../hooks/useActions";
import {
  NoteFormValues,
  noteValidationSchema,
} from "../../../validation/noteValidation";

interface EditNoteFormProps {
  note: INote;
  onClose: () => void;
}

const EditNoteForm: FC<EditNoteFormProps> = ({ note, onClose }) => {
  const { updateNote } = useActions();

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<NoteFormValues>({
      initialValues: {
        title: note.title,
        content: note.content,
      },
      validationSchema: noteValidationSchema,
      onSubmit: (values) => editNoteHandler(values),
      enableReinitialize: true,
    });

  const editNoteHandler = ({ title, content }: NoteFormValues) => {
    updateNote({ _id: note._id, title, content });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {touched.title && errors.title && <div>{errors.title}</div>}
      <label htmlFor="title">New note title</label>
      <Input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.content && errors.content && <div>{errors.content}</div>}
      <label htmlFor="content">New note content</label>
      <Textarea
        id="content"
        name="content"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        cols={40}
        rows={6}
      />
      <Button type="submit">Save</Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
};

export default EditNoteForm;
