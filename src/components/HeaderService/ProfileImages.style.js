import styled from "styled-components";

export const ProfileImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 11px;
`;
export const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: -12px;

  border-radius: 50%;
  border: 1.4px solid ${({ theme }) => theme.colors.white};
`;

export const PlusNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: -12px;

  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};

  ${({ theme }) => ({ ...theme.fonts["12r"] })};
`;

export const Count = styled.div`
  display: flex;
  white-space: nowrap;

  margin-left: 23px;

  ${({ theme }) => ({ ...theme.fonts["18r"] })};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Num = styled.p`
  ${({ theme }) => ({ ...theme.fonts["18b"] })};
`;
