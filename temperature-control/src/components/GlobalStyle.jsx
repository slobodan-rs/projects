import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        width : 100vw;
        height: 100vh;
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
        text-align: center;
        background-color: #C5C5C5;
    }
`

export default GlobalStyle