import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // A Modern CSS Reset - https://www.joshwcomeau.com/css/custom-css-reset/

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin, padding, border, and set default font */
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Pretendard", sans-serif;
  }

  body {
    /* 3. Add accessible line-height */
    line-height: 1.5;
    /* 4. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 5. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 6. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 7. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 8. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /* 9. Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }

  /* 10. User Custom Fonts */
  // Noto Sans
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NotoSansKR/NotoSansKR-Regular.woff2') format('woff2'),
}


  // 나눔명조
  @font-face {
    font-family: 'Nanum Myeongjo';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjo.woff2') format('woff2'),
}
  
  // 나눔손글씨 손편지체
  @font-face {
    font-family: 'NanumSonPyeonJiCe';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumSonPyeonJiCe/NanumSonPyeonJiCe.woff2') format('woff2'),
}
`;

export default GlobalStyle;
