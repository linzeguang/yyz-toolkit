import React, {
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import Dialog from "rc-dialog";
import { GlobalStyle, ModalTitle } from "./styled";
import { ModalHandleProps, ModalProps } from "./types";

const Modal = React.forwardRef<ModalHandleProps, PropsWithChildren<ModalProps>>(
  (props, ref) => {
    const { title, afterClose, children } = props;
    const [visible, setVisible] = useState(false);

    const toggle = useCallback(
      (boo?: boolean) => {
        setVisible(boo ?? !visible);
      },
      [visible]
    );

    useImperativeHandle(ref, () => ({ toggle, visible }), [toggle, visible]);

    return (
      <React.Fragment>
        <GlobalStyle />
        <Dialog
          visible={visible}
          animation="zoom"
          maskAnimation="fade"
          afterClose={afterClose}
          onClose={() => toggle()}
          destroyOnClose
        >
          {title && <ModalTitle>{title}</ModalTitle>}
          {children}
        </Dialog>
      </React.Fragment>
    );
  }
);

export default Modal;
