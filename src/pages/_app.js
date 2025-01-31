import { ThemeProvider } from 'styled-components'
import { GlobalStyle, ResetCss } from '../styles'
import '../styles/tailwind.css'
import { light } from '../themes'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <ResetCss />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
