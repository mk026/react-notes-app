import { FC, memo } from "react";

import classes from "./MenuButton.module.scss";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <div className={classes["menu-btn"]} onClick={onClick}>
      <span />
    </div>
  );
};

export default memo(MenuButton);
