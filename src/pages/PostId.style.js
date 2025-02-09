import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  min-height: 120vh;
  background-color: ${(props) => props.bgColor || "#ffffff"};
  margin: 0 auto;
  min-width: 1200px;
  justify-content: "center";
`;
export const MessageCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-bottom: ${(props) => `${props.messageCount * 280}px`};
  width: 1200px;
  margin: 113px auto;
  padding-bottom: 50px;
`;

export const PlusBox = styled(Link)`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);

  display: flex;
  justify-content: center;
  align-items: center;
`;
