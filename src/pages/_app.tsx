import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'

import Head from 'next/head'

import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Iris</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
