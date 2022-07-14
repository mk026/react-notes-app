import { FC } from "react";

import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";

interface AddImageFormProps {
  onClose: () => void;
}

const AddImageForm: FC<AddImageFormProps> = ({ onClose }) => {
  return (
    <Form>
      <label htmlFor="title">Image title</label>
      <Input type="text" />
      <label htmlFor="description">Image description</label>
      <Textarea id="description" cols={40} rows={6} />
      <Button type="submit">Add image</Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default AddImageForm;
