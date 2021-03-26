import React, { useState } from 'react'
import GlobalStyle from '../styles/GlobalStyle'

import Head from 'next/head'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = (): void => {
    console.log('troca')
    setIsDark(!isDark)
  }

  return (
    <>
      <Head>
        <title>Iris</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? dark : light}>
        <Component {...pageProps} toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  )
}

export default App
