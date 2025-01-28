import {
  ToastContainer,
  Content,
  Message,
  Completed,
  Button,
  ToasterContainer,
} from "./Toast.style";
import { useToast } from "../../context/ToastContext";

function Toast({ onClose, message }) {
  return (
    <ToastContainer>
      <Content>
        <Completed />
        <Message>{message}</Message>
      </Content>
      <Button onClick={onClose} />
    </ToastContainer>
  );
}

function Toaster() {
  const { toasts, removeToast } = useToast();
  return (
    <ToasterContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          message={toast.message}
        />
      ))}
    </ToasterContainer>
  );
}

export default Toaster;
