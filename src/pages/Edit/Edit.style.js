import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: calc(100vh - 65px - 68px);
  padding: 113px 24px;
  background: ${({ $backgroundColor, $backgroundImageURL, theme }) =>
    $backgroundImageURL
      ? `no-repeat url(${$backgroundImageURL}) center fixed`
      : theme.colors[$backgroundColor][200]};
  background-size: cover;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 28px;
  column-gap: 24px;
  width: 1200px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 62px;
  right: calc((99vw - 1200px) / 2);
`;
