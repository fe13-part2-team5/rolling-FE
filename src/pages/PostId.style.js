import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: start;

  min-height: 130vh;
  padding: 113px 24px;

  background-color: ${(props) =>
    !props.bgImage ? props.bgColor || "white" : "transparent"};

  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : "none"};
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

  @media (max-width: 1248px) {
    width: calc(100% - 48px);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
