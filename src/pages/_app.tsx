import React, { useState, useEffect } from 'react'
import GlobalStyle from '../styles/GlobalStyle'

import Head from 'next/head'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (title: string): void => {
    localStorage.setItem('theme', title)
    setTheme(title)
  }

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue) {
      console.log('to', storageValue)
      storageValue === 'light' ? toggleTheme('light') : toggleTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Iris</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <Component {...pageProps} toggleTheme={toggleTheme} actualTheme={theme}/>
      </ThemeProvider>
    </>
  )
}

export default App
