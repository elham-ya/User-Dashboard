export enum ToastType {
  warning = 'warning',
  danger = 'danger',
  success = 'success',
}
export type ToastProps = {
  type: ToastType;
  message: string;
  onClose: () => void;
};
