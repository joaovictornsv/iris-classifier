import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../src/styles/GlobalStyle';

interface AppProps {
  Component: any,
  pageProps: any,
}

export default function App({ Component, pageProps }: AppProps) {
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
  );
}
