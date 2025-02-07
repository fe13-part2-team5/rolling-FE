import styled from "styled-components";

export const ToName = styled.span`
  margin-left: 16px;

  color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => ({ ...theme.fonts["28b"] })};

  white-space: nowrap;
`;
