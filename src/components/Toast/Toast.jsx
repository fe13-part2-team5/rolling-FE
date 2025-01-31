import {
  ToastContainer,
  Content,
  Message,
  Button,
  ToasterContainer,
} from "./Toast.style";
import { ToastContext } from "../../context/ToastContext";
import { CompletedIcon, CloseIcon } from "../Icons";
import { theme } from "../../styles/theme";
import { useContext } from "react";

function Toast({ onClose, message, isVisible }) {
  return (
    <ToastContainer $isVisible={isVisible}>
      <Content>
        <CompletedIcon color={theme.colors.green[500]} />
        <Message>{message}</Message>
      </Content>
      <Button onClick={onClose}>
        <CloseIcon color={theme.colors.gray[300]} />
      </Button>
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
