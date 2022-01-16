import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, h1, h2, p, div, a {
    transition: all 0.2s ease;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${props => props.theme.background};
  }
`