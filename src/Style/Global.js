import { createGlobalStyle } from "styled-components";
import mainbackground from './background2.png'

const GlobalStyles = createGlobalStyle `


* {
}



body {
    background-color:#fff;
    font-family: 'Quicksand', sans-serif;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${mainbackground});
    background-size: 100% 100%;


  }
`
export default GlobalStyles