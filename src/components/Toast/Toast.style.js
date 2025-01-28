import styled, { keyframes } from "styled-components";
import Completed from "../../assets/icons/completed.svg";
import Close from "../../assets/icons/close.svg";

const slideUp = keyframes`
  from {
    transform: translate(0, 64px);
    opacity: 0; 
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    transform: scale(.1);
  }
`;

export const ToastContainer = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideUp : fadeOut)} 0.3s
    ease-in-out;

  width: 524px;
  height: 64px;
  background-color: #000000cc;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Message = styled.div`
  ${({ theme }) => theme.fonts["16r"]};
  color: ${({ theme }) => theme.colors.white};

  user-select: none;
`;

export const Button = styled(Close)`
  cursor: pointer;
`;

export const ToasterContainer = styled.div`
  z-index: 9999;
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Completed };
