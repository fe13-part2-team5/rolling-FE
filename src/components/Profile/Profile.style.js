import styled from "styled-components";

export const ProfileCircle = styled.div`
  ${({ theme }) => theme.flexLayout()}
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 80px;
`;

export const ProfileBox = styled.div`
  ${({ theme }) => theme.flexLayout(undefined, "flex-start", undefined)}
  width: 197px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  gap: 47px;
`;

export const Icon = styled.div`
  margin-left: 22px;
`;
