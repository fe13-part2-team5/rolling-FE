import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  height: 66px;

  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    position: absolute;
    top: -9999px;
  }
`;
export const StyledHeader = styled.header`
  display: flex;

  z-index: 10;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  padding: 11px 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
