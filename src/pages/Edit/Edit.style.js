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
