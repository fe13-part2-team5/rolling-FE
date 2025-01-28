import { createContext, useContext, useState } from "react";

import { createPortal } from "react-dom";
import Toaster from "../components/Toast/Toast";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, isVisible: true };

    setToasts((prevToasts) =>
      prevToasts.length <= 2
        ? [...prevToasts, newToast]
        : [...prevToasts.slice(1), newToast]
    );

    setTimeout(() => removeToast(id), duration);
  };

  // toast가 toasts에서 제거되기 전, isVisible 값을 변경해서 애니메이션을 보여줍니다.
  const removeToast = (id) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast
      )
    );

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 200);
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
