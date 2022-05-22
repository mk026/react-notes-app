import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

const ChangeNameForm: FC = () => {
  const [name, setName] = useState("");
  const { updateName } = useActions();

  const changeNameHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateName(name);
  };

  return (
    <form onSubmit={changeNameHandler}>
      <input
        type="text"
        placeholder="Change name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ChangeNameForm;
