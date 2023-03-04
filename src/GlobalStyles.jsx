import { createGlobalStyle } from "styled-components/macro";

import "@fontsource/inter/variable.css";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
    isolation: isolate;
  }

  body {
    font-family: "InterVariable";
    font-weight: 400;
  }
`;

export default GlobalStyles;
