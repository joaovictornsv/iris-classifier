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
        <link
          rel="icon"
          href="https://www.flaticon.com/svg/vstatic/svg/4139/4139394.svg?token=exp=1615857631~hmac=bd6b2e72fce4f65cbb6278e53e4de5c4"
        />

      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
