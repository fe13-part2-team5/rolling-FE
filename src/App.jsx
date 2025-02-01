import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import InputTextField from "./components/InputTextField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InputTextField />
    </ThemeProvider>
  );
}

export default App;
