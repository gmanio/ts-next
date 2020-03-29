import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;  
  };

  :root {
    font-family: 'NanumGothic', 'serif';
    letter-spacing: -0.5px;
    --main-color: #fff;
  };

  #__next {
    height: 100%;
  };
`;
