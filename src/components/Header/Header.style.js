import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  height: 65px;

  background-color: ${({ theme }) => theme.colors.white};
`;
export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  padding: 11px 0;

  background-color: ${({ theme }) => theme.colors.white};

  transform: translateX(-50%);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
