import { createGlobalStyle } from "styled-components/macro";

import "@fontsource/inter/variable.css";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: hsl(35deg 77% 62% / 1);
    --color-secondary: hsl(5deg 85% 63% / 1);

    --color-white: hsl(36deg 100% 99% / 1);
    --color-grayblue: hsl(233deg 8% 79% / 1);
    --color-grayblue-dark: hsl(236deg 13% 42% / 1);
    --color-darkblue: hsl(240deg 100% 5% / 1);

    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --font-weight-bolder: 800;
  }

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
    font-weight: var(--font-weight-normal);
    background-color: var(--color-white);
  }

  img {
    display: block;
    max-width: 100%;
  }

  p {
    font-size: calc(15rem / 16);
  }
`;

export default GlobalStyles;
