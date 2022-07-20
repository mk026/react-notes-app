import { FC } from "react";
import { useFormik } from "formik";

import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import { useActions } from "../../../hooks/useActions";
import { noteActions } from "../../../store/action-creators";
import {
  noteFormInitialValues,
  NoteFormValues,
  noteValidationSchema,
} from "../../../validation/noteValidation";

interface AddNoteFormProps {
  onClose: () => void;
}

const AddNoteForm: FC<AddNoteFormProps> = ({ onClose }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<NoteFormValues>({
    initialValues: noteFormInitialValues,
    validationSchema: noteValidationSchema,
    onSubmit: (values) => addNoteHandler(values),
  });
  const { addNote } = useActions(noteActions);

  const addNoteHandler = ({ title, content }: NoteFormValues) => {
    addNote(title, content);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">Note title</label>
      <Input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.title}
        error={errors.title}
      />
      <label htmlFor="content">Note content</label>
      <Textarea
        id="content"
        name="content"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.content}
        error={errors.content}
        cols={40}
        rows={6}
      />
      <Button type="submit" disabled={!isValid}>
        Add note
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default AddNoteForm;
