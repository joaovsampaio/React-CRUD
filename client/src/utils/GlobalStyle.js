import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  :root {
    --raspberry: #ce2d4f;
    --satin: #ce6d8b;
    --thistle: #cebbc9;
    --blue: #4056f4;
    --ultramarine: #470ff4;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    background-color: var(--thistle);

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