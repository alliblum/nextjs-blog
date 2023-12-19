import React from 'react'
import '../styles/global.css'
import '../styles/markdown.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'

export const theme = extendTheme({
  textStyles: {
    text: {},
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      {isClient && <h1>Prerendered</h1>}
      <>
        <Component {...pageProps} />
        {isClient && <h1>Prerendered </h1>}
      </>
    </ChakraProvider>
  )
}
