import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

const GlobalStyle = createGlobalStyle`

  :root {
    
    --fontRoboto: RobotoLight, Open-Sans, Helvetica, Sans-Serif;
    --fontBebas: BebasNeueRegular, Open-Sans, Helvetica, Sans-Serif;
  }

  body, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    display:flex; 
    flex-direction:column; 

    background-color: ${({ theme }) => theme.colors.bgColor};

    @font-face {
    font-family: RobotoLight;
    src: url(src/assets/fonts/Roboto-Light.ttf);
    }

    @font-face {
    font-family: BebasNeueRegular;
    src: url(src/assets/fonts/BebasNeue-Regular.ttf);
    }
    
    font-family: RobotoLight, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
