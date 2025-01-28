import {
  ToastContainer,
  Content,
  Message,
  Completed,
  Button,
  ToasterContainer,
} from "./Toast.style";
import { ToastContext } from "../../context/ToastContext";
import { useContext } from "react";

function Toast({ onClose, message, isVisible }) {
  return (
    <ToastContainer $isVisible={isVisible}>
      <Content>
        <Completed />
        <Message>{message}</Message>
      </Content>
      <Button onClick={onClose} />
    </ToastContainer>
  );
}

function Toaster() {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <ToasterContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          message={toast.message}
          isVisible={toast.isVisible}
        />
      ))}
    </ToasterContainer>
  );
}

export default Toaster;
