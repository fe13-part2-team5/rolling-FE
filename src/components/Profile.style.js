import styled from "styled-components";

export const ProfileCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 80px;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 197px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  gap: 47px;
`;

export const Icon = styled.div`
  margin-left: 22px;
`;
