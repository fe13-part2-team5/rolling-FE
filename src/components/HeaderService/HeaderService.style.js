import styled from "styled-components";

export const HeaderBox = styled.div`
  position: sticky;
  top: 65px;
  z-index: 10;

  width: 100%;
  height: 68px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled.header`
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;
  height: 68px;
  margin: 0 auto;
  padding: 13px 0;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 28px;
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
