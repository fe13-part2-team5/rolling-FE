import { ToastContext } from "../../context/ToastContext";
import { CompletedIcon, CloseIcon } from "../Icons";
import { theme } from "../../styles/theme";
import { useContext } from "react";
import * as T from "./Toast.style";

function Toast({ onClose, message, isVisible }) {
  return (
    <T.ToastContainer $isVisible={isVisible}>
      <T.Content>
        <CompletedIcon color={theme.colors.green[500]} />
        <T.Message>{message}</T.Message>
      </T.Content>
      <T.Button onClick={onClose}>
        <CloseIcon color={theme.colors.gray[300]} />
      </T.Button>
    </T.ToastContainer>
  );
}

function Toaster() {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <T.ToasterContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          message={toast.message}
          isVisible={toast.isVisible}
        />
      ))}
    </T.ToasterContainer>
  );
}

export default Toaster;
