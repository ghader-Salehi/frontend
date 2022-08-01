import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle, ResetCss } from '@/styles'
import { light } from '@/themes'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  let isHeaderFixed = !['AuctionPage', 'LotteryPage', 'MarketplacePage'].includes(Component.customPropDisplayName)

  return (
    <ThemeProvider theme={light}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="Decentralized applications by TrendDapp." />
        <title>TrendDapp</title>
      </Head>
      <ResetCss />
      <GlobalStyle />
      <Header isFixed={isHeaderFixed} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
