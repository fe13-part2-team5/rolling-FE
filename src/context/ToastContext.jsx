import { createContext, useContext, useState } from "react";

import { createPortal } from "react-dom";
import Toaster from "../components/Toast/Toast";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {createPortal(<Toaster />, document.querySelector("#toast"))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "ToastContext를 참조할 수 없습니다. useToast를 ToastProvider의 하위 컴포넌트에서 사용하고 있는지 확인하세요."
    );
  }

  return context;
};

export default ToastProvider;
