import { createGlobalStyle } from 'styled-components'
import background from '../resources/images/landing-background.png'


const GlobalStyle = createGlobalStyle`
body {
    width : 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: 100%;
    background-repeat: no-repeat;
}
`

export default GlobalStyle
