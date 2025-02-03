import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>hello</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
