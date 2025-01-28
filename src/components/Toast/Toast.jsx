import {
  ToastContainer,
  Content,
  Message,
  Completed,
  Button,
  ToasterContainer,
} from "./Toast.style";

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

function Toaster({ toasts, removeToast }) {
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
