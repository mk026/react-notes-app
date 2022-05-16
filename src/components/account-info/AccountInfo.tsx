import { FC, FormEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Paths } from "../../routes/types";
import { getUserState } from "../../store/selectors";

const AccountInfo: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAppSelector(getUserState);
  const { signout, updateName, updateEmail } = useActions();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    signout();
    navigate(Paths.HOME_PATH);
  };

  const changeNameHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateName(name);
  };

  const changeEmailHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateEmail(email);
  };

  return (
    <div>
      <div>
        <p>{user?.name}</p>
        <form onSubmit={changeNameHandler}>
          <input
            type="text"
            placeholder="Change name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <p>{user?.email}</p>
        <form onSubmit={changeEmailHandler}>
          <input
            type="text"
            placeholder="Change email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default AccountInfo;
