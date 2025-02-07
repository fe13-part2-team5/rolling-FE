import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0; 
    transform: translate(0, 64px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 524px;
  height: 64px;
  padding: 0 30px;
  background-color: #000000cc;
  border-radius: 8px;
  animation: ${({ $isVisible }) => ($isVisible ? slideUp : fadeOut)} 0.3s
    ease-in-out;
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

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const ToasterContainer = styled.div`
  position: fixed;
  bottom: 4%;
  left: 50%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 9999;
  transform: translateX(-50%);
`;
