import { createGlobalStyle } from 'styled-components'
import background from '../images/background.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        overflow: hidden;
        overflow-y: scroll;
        background-image: url(${background});
    }
`