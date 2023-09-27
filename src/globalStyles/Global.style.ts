import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/FiraCode-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'defaultFont';
        src: url(${font});
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'defaultFont';

        color: white;
    }


    body{
        width: 100vw;
        height: 100vh;
        background-color: red;
    }

    #root {
        width: 100%;
        height: 100%;
        background: linear-gradient(250.15deg, rgba(40, 43, 45, 1) 3.29%,  rgba(18, 21, 27, 1) 94.75%);
    }
`

export default GlobalStyle;