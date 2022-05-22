import { FC } from "react";

import AccountInfo from "../../components/account-info/AccountInfo";
import Page from "../../components/ui/page/Page";

const AccountPage: FC = () => {
  return (
    <Page>
      <h1>Account</h1>
      <AccountInfo />
    </Page>
  );
};

export default AccountPage;
