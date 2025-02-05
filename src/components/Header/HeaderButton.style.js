import styled from "styled-components";

export const StyledButton = styled.button`
  height: 42px;
  margin-right: 24px;
  padding: 8px 16px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;

  white-space: nowrap;

  cursor: pointer;
  overflow: hidden;
`;
