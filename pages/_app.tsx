// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../src/styles/GlobalStyle'

interface AppProps {
  Component: any,
  pageProps: any,
}

// eslint-disable-next-line no-unused-vars
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Iris</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
