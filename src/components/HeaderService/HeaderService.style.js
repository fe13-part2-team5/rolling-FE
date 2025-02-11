import styled from "styled-components";

export const HeaderBox = styled.div`
  position: sticky;
  top: 66px;
  z-index: 10;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    top: 0;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;
  height: 68px;
  margin: 0 auto;
  padding: 13px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileImagesWrapper = styled.div`
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const MobileHeaderTop = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 10px 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const MobileHeaderBottom = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 10px 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 28px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const MiniSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 13px;
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;
