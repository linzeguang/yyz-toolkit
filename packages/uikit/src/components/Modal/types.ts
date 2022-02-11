export interface ModalProps {
  visible: boolean;
  title?: string;
  onClose: () => void;
  afterClose?: () => void;
}
