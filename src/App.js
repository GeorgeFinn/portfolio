import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";

import { lightTheme, darkTheme } from "./themes/default";
import Routes from "./Routes";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  WebFont.load({
    google: {
      families: ["Montserrat:300,400,600,700", "sans-serif"]
    }
  });

  const GlobalStyle = createGlobalStyle`
  main, html, body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Roboto,"Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    width: 100vw;
    -webkit-overflow-scrolling: touch;
  }
  a {
    color:#000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: $light_blue;
    }
  }
`;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <main style={{ backgroundColor: theme.bg, height: "auto" }}>
          <Routes />
          <GlobalStyle />
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
