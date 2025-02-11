import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: start;

  min-height: 130vh;
  padding: 113px 24px;

  background-color: ${({ theme, bgColor, bgImage }) =>
    !bgImage ? theme.colors?.[bgColor]?.[200] || "white" : "transparent"};

  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : "none")};
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

export const MessageCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 28px;
  column-gap: 24px;

  width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: 1250px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: 100%;
  }
`;

export const PlusBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 384px;
  height: 280px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
`;

export const PrimaryButtonWrapper = styled.div`
  position: absolute;
  top: 62px;
  left: calc((99vw - 1200px) / 2);
`;
