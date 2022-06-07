import { FC, ReactNode } from "react";

import Backdrop from "../backdrop/Backdrop";
import Card from "../card/Card";

import classes from "./Modal.module.scss";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, isActive, onClose }) => {
  return (
    <>
      <Backdrop isActive={isActive} onClick={onClose} />
      <Card className={classes.modal}>{children}</Card>
    </>
  );
};

export default Modal;
