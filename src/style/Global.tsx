import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { TraffickersTheme } from "../TraffickersTheme"

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends TraffickersTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    
  }
  nav >div >a {
    display: none!important
  }
`

export default GlobalStyle
