import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
    *{
        sizing: border-box;
        margin: 0px;
    }

    body{
        background: white;
        font-family: 'Work Sans', sans-serif;
    }

    button{
        border: none;
        border: 2px solid;
        border-radius: 20px;
        background: transparent;
    }
`;

export default GlobalStyles;
