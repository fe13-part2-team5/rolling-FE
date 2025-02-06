import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ $backgroundColor, $backgroundImageURL, theme }) =>
    $backgroundImageURL
      ? `no-repeat url(${$backgroundImageURL}) center`
      : theme.colors[$backgroundColor][200]};
  background-size: cover;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  row-gap: 28px;
  column-gap: 24px;

  width: 1200px;
  margin: 0 24px;
`;
