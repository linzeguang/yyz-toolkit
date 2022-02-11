import React from "react";
import Dialog from "rc-dialog";
import { GlobalStyle, ModalTitle } from "./styled";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = (props) => {
  const { visible, title, afterClose, children } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Dialog
        visible={visible}
        animation="zoom"
        maskAnimation="fade"
        afterClose={afterClose}
        destroyOnClose
      >
        {title && <ModalTitle>{title}</ModalTitle>}
        {children}
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
