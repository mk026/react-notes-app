import { FC } from "react";
import { useFormik } from "formik";

import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import {
  imageFormInitialValues,
  ImageFormValues,
  imageValidationSchema,
} from "../../../validation/imageValidation";

interface AddImageFormProps {
  onClose: () => void;
}

const AddImageForm: FC<AddImageFormProps> = ({ onClose }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<ImageFormValues>({
    initialValues: imageFormInitialValues,
    validationSchema: imageValidationSchema,
    onSubmit: (values) => addImageHandler(values),
  });

  const addImageHandler = ({ title, description }: ImageFormValues) => {
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">Image title</label>
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
      <label htmlFor="description">Image description</label>
      <Textarea
        id="description"
        name="description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.description}
        error={errors.description}
        cols={40}
        rows={6}
      />
      <Button type="submit" disabled={!isValid}>
        Add image
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default AddImageForm;
