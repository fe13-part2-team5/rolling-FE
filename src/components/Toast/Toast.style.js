import styled from "styled-components";
import Completed from "../../assets/icons/completed.svg";
import Close from "../../assets/icons/close.svg";

export const Container = styled.div`
  width: 524px;
  height: 64px;
  background-color: #000000cc;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
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

export { Completed };
