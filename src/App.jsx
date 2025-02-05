import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { Profile } from "./components/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>hello</div>
      <Profile/>
    </ThemeProvider>
  );
}

export default App;
