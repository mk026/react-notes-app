import { FC, MouseEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Paths } from "../../routes/types";
import { signout } from "../../store/action-creators/authActionCreators";
import { getAuthState } from "../../store/selectors/authSelectors";
import { getUserState } from "../../store/selectors/userSelectors";

import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const { user } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(signout());
    navigate(Paths.HOME_PATH);
  };

  let links = null;

  if (isAuth) {
    links = (
      <>
        <NavLink to={Paths.HOME_PATH}>Home</NavLink>
        <NavLink to={Paths.NOTES_PATH}>Notes</NavLink>
        <NavLink to={Paths.TODOS_PATH}>Todos</NavLink>
        <NavLink to={Paths.ACCOUNT_PATH}>Account</NavLink>
      </>
    );
  } else {
    links = (
      <>
        <NavLink to={Paths.HOME_PATH}>Home</NavLink>
        <NavLink to={Paths.AUTH_PATH}>Auth</NavLink>
      </>
    );
  }

  let authElement = (
    <div>
      <p>{user?.name}</p>
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );

  return (
    <nav className={classes.navbar}>
      {links}
      {isAuth && authElement}
    </nav>
  );
};

export default Navbar;
