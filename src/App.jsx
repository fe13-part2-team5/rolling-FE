import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InputField />
      <br />
      <br />
      <Dropdown />
    </ThemeProvider>
  );
}

export default App;
