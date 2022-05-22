import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

const ChangeEmailForm: FC = () => {
  const [email, setEmail] = useState("");
  const { updateEmail } = useActions();

  const changeEmailHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateEmail(email);
  };

  return (
    <form onSubmit={changeEmailHandler}>
      <input
        type="text"
        placeholder="Change email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangeEmailForm;
