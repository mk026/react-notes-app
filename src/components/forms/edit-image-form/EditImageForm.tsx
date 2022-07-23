import { FC } from "react";

import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import Button from "../../ui/button/Button";
import IImage from "../../../models/IImage";
import { useActions } from "../../../hooks/useActions";
import { imageActions } from "../../../store/action-creators";
import { useFormik } from "formik";
import {
  ImageFormValues,
  imageValidationSchema,
} from "../../../validation/imageValidation";

interface EditImageFormProps {
  image: IImage;
  onClose: () => void;
}

const EditImageForm: FC<EditImageFormProps> = ({ image, onClose }) => {
  const { updateImage } = useActions(imageActions);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<ImageFormValues>({
    initialValues: {
      title: image.title,
      description: image.description,
    },
    validationSchema: imageValidationSchema,
    onSubmit: (values) => editImageHandler(values),
    enableReinitialize: true,
  });

  const editImageHandler = ({ title, description }: ImageFormValues) => {
    updateImage({ ...image, title, description });
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">New image title</label>
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
      <label htmlFor="description">New image description</label>
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
        Save
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default EditImageForm;
