import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
  }

  input {
    background: none;
    border: none
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
