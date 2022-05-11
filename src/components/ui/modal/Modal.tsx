import { FC, ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Modal;
