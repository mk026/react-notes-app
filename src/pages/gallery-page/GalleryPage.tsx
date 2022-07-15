import { FC, useState } from "react";
import AddImageForm from "../../components/forms/add-image-form/AddImageForm";

import Button from "../../components/ui/button/Button";
import Drawer from "../../components/ui/drawer/Drawer";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const GalleryPage: FC = () => {
  const [isAddingImage, setIsAddingImage] = useState(false);

  const toggleAddImageForm = () => setIsAddingImage((prev) => !prev);

  return (
    <>
      <Drawer
        isActive={isAddingImage}
        onClose={toggleAddImageForm}
        position="right"
      >
        <AddImageForm onClose={toggleAddImageForm} />
      </Drawer>
      <Page>
        <PageTop title="My Gallery">
          <Button onClick={toggleAddImageForm}>Add new image</Button>
        </PageTop>
      </Page>
    </>
  );
};

export default GalleryPage;
