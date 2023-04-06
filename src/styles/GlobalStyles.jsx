import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }

  body,
  html {
    background-color: #ffffff;
    color: #000;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
