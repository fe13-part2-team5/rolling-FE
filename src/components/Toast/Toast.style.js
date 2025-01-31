import styled, { keyframes } from "styled-components";

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

const ToastContainer = styled.div`
  animation: ${({ $isVisible }) => ($isVisible ? slideUp : fadeOut)} 0.3s
    ease-in-out;

  width: 524px;
  height: 64px;
  background-color: #000000cc;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Message = styled.div`
  ${({ theme }) => theme.fonts["16r"]};
  color: ${({ theme }) => theme.colors.white};

  user-select: none;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const ToasterContainer = styled.div`
  z-index: 9999;
  position: fixed;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export { ToastContainer, Content, Message, Button, ToasterContainer };
