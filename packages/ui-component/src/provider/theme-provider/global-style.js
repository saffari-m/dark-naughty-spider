import { createGlobalStyle } from "@utils/styled-components";
import resetStyle from "./reset";

const GlobalStyle = createGlobalStyle`
  ${({ reset }) => `
    ${reset ? resetStyle : ""}
  `}
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ${({ injectGlobal }) => `
    ${injectGlobal ? injectGlobal : ""}
  `}
`;

export default GlobalStyle;
