import { FC } from "react";

import AccountInfo from "../../components/account-info/AccountInfo";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const AccountPage: FC = () => {
  return (
    <Page>
      <PageTop title="My Account" />
      <AccountInfo />
    </Page>
  );
};

export default AccountPage;
