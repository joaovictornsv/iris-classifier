import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Iris</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
