import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import InputField from "./components/InputField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InputField />
    </ThemeProvider>
  );
}

export default App;
