import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 42px;
  margin-left: 24px;

  overflow: hidden;
`;

export const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts["20b"]};
`;
