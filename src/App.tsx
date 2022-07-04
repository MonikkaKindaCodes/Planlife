import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import theme from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
