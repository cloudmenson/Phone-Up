import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    color: #FFFFFF !important;
    font-family: 'Open Sans', sans-serif, 'Montserrat', sans-serif !important;
  }

  input {
    background: none;
    border: none
  }

  a {
    text-decoration: none !important;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
