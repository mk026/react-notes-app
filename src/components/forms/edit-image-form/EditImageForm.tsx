import { FC } from "react";

import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import Button from "../../ui/button/Button";

const EditImageForm: FC = () => {
  return (
    <Form>
      <label htmlFor="title">New image title</label>
      <Input id="title" name="title" type="text" />
      <label htmlFor="content">New image description</label>
      <Textarea id="description" name="description" cols={40} rows={6} />
      <Button type="submit">Save</Button>
      <Button type="button">Cancel</Button>
    </Form>
  );
};

export default EditImageForm;
