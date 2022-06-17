import { FC } from "react";

import Button from "../../components/ui/button/Button";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const GalleryPage: FC = () => {
  return (
    <Page>
      <PageTop title="My Gallery">
        <Button>Add new image</Button>
      </PageTop>
    </Page>
  );
};

export default GalleryPage;
