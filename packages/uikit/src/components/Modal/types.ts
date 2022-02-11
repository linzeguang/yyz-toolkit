export interface ModalProps {
  visible: boolean;
  title?: string;
  afterClose?: () => void;
}
